import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import dns from 'node:dns';
import fs from 'fs';
import path from 'path';

dns.setDefaultResultOrder('ipv4first');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

const testFileUpload = async () => {
    try {
        console.log('Generating 1MB buffer...');
        const buffer = Buffer.alloc(1024 * 1024, 'a');
        const tempPath = path.join(__dirname, 'temp_test_image.png');
        fs.writeFileSync(tempPath, buffer);

        console.log('Written to file:', tempPath);
        console.log('Starting file upload...');

        const result = await cloudinary.uploader.upload(tempPath, {
            folder: 'test_connectivity',
            resource_type: 'image',
            timeout: 120000
        });

        console.log('✅ File upload success:', result.secure_url);

        fs.unlinkSync(tempPath);
    } catch (error) {
        console.error('❌ File upload failed:', error);
    }
}

testFileUpload();
