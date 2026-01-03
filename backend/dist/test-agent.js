"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cloudinary_1 = require("cloudinary");
const node_dns_1 = __importDefault(require("node:dns"));
const https_1 = __importDefault(require("https"));
// Force IPv4
node_dns_1.default.setDefaultResultOrder('ipv4first');
const agent = new https_1.default.Agent({
    family: 4, // Force IPv4
    keepAlive: true,
    keepAliveMsecs: 3000,
});
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Force global agent to use our custom agent
https_1.default.globalAgent = agent;
const testAgentUpload = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Generating valid GIF buffer...');
        const base64Image = "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        const buffer = Buffer.from(base64Image, 'base64');
        console.log('Starting upload with IPv4 Agent...');
        const result = yield new Promise((resolve, reject) => {
            const stream = cloudinary_1.v2.uploader.upload_stream({
                folder: 'test_connectivity',
                resource_type: 'image',
                timeout: 120000
            }, (error, result) => {
                if (error)
                    reject(error);
                else
                    resolve(result);
            });
            stream.end(buffer);
        });
        console.log('✅ Agent upload success:', result.secure_url);
    }
    catch (error) {
        console.error('❌ Agent upload failed:', error);
    }
});
testAgentUpload();
