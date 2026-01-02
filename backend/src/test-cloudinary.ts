import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import dns from 'node:dns';

dns.setDefaultResultOrder('ipv4first');

console.log('Loading Cloudinary Config...');
console.log('API Key Present:', !!process.env.CLOUDINARY_API_KEY);
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

const testUpload = async () => {
    try {
        console.log('Attempting upload...');
        const dataURI = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        const result = await cloudinary.uploader.upload(dataURI, {
            folder: 'test_connectivity',
            timeout: 60000 // 60s timeout
        });
        console.log('Upload success:', result.secure_url);
    } catch (error) {
        console.error('Upload failed full error:', error);
    }
};

testUpload();
