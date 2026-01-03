import 'dotenv/config';
import { uploadToCloudinary } from './utils/uploadToCloudinary';
import dns from 'node:dns';
import https from 'https';

dns.setDefaultResultOrder('ipv4first');
https.globalAgent.options.keepAlive = true;

const testHeavyUpload = async () => {
    try {
        console.log('Generating 1MB buffer...');
        const buffer = Buffer.alloc(1024 * 1024, 'a'); // 1MB of 'a's
        const mimetype = 'image/png'; // generic

        console.log('Starting heavy upload...');
        const url = await uploadToCloudinary(buffer, mimetype, 'test_connectivity');
        console.log('✅ Heavy upload success:', url);
    } catch (error) {
        console.error('❌ Heavy upload failed:', error);
    }
}

testHeavyUpload();
