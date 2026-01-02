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
node_dns_1.default.setDefaultResultOrder('ipv4first');
console.log('Loading Cloudinary Config...');
console.log('API Key Present:', !!process.env.CLOUDINARY_API_KEY);
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const testUpload = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Attempting upload...');
        const dataURI = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        const result = yield cloudinary_1.v2.uploader.upload(dataURI, {
            folder: 'test_connectivity',
            timeout: 60000 // 60s timeout
        });
        console.log('Upload success:', result.secure_url);
    }
    catch (error) {
        console.error('Upload failed full error:', error);
    }
});
testUpload();
