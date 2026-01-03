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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
node_dns_1.default.setDefaultResultOrder('ipv4first');
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const testFileUpload = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Generating 1MB buffer...');
        const buffer = Buffer.alloc(1024 * 1024, 'a');
        const tempPath = path_1.default.join(__dirname, 'temp_test_image.png');
        fs_1.default.writeFileSync(tempPath, buffer);
        console.log('Written to file:', tempPath);
        console.log('Starting file upload...');
        const result = yield cloudinary_1.v2.uploader.upload(tempPath, {
            folder: 'test_connectivity',
            resource_type: 'image',
            timeout: 120000
        });
        console.log('✅ File upload success:', result.secure_url);
        fs_1.default.unlinkSync(tempPath);
    }
    catch (error) {
        console.error('❌ File upload failed:', error);
    }
});
testFileUpload();
