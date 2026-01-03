import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import dns from 'node:dns';
import https from 'https';

// Force IPv4
dns.setDefaultResultOrder('ipv4first');

const agent = new https.Agent({
    family: 4, // Force IPv4
    keepAlive: true,
    keepAliveMsecs: 3000,
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// Force global agent to use our custom agent
https.globalAgent = agent;

const testAgentUpload = async () => {
    try {
        console.log('Generating valid GIF buffer...');
        const base64Image = "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        const buffer = Buffer.from(base64Image, 'base64');

        console.log('Starting upload with IPv4 Agent...');

        const result = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: 'test_connectivity',
                    resource_type: 'image',
                    timeout: 120000
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            stream.end(buffer);
        });

        console.log('✅ Agent upload success:', (result as any).secure_url);
    } catch (error) {
        console.error('❌ Agent upload failed:', error);
    }
}

testAgentUpload();
