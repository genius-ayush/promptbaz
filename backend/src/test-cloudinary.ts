import 'dotenv/config';
import { uploadToCloudinary } from './utils/uploadToCloudinary';
import dns from 'node:dns';

// Ensure IPv4 is used first
dns.setDefaultResultOrder('ipv4first');

console.log('Testing uploadToCloudinary...');

const testUpload = async () => {
    try {
        const base64Image = "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        const buffer = Buffer.from(base64Image, 'base64');
        const mimetype = 'image/gif';

        console.log('Starting upload...');
        const url = await uploadToCloudinary(buffer, mimetype, 'test_connectivity');
        console.log('✅ Upload success:', url);
    } catch (error) {
        console.error('❌ Upload failed:', error);
    }
};

testUpload();
