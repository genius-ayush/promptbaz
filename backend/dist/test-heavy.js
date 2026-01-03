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
const uploadToCloudinary_1 = require("./utils/uploadToCloudinary");
const node_dns_1 = __importDefault(require("node:dns"));
const https_1 = __importDefault(require("https"));
node_dns_1.default.setDefaultResultOrder('ipv4first');
https_1.default.globalAgent.options.keepAlive = true;
const testHeavyUpload = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Generating 1MB buffer...');
        const buffer = Buffer.alloc(1024 * 1024, 'a'); // 1MB of 'a's
        const mimetype = 'image/png'; // generic
        console.log('Starting heavy upload...');
        const url = yield (0, uploadToCloudinary_1.uploadToCloudinary)(buffer, mimetype, 'test_connectivity');
        console.log('✅ Heavy upload success:', url);
    }
    catch (error) {
        console.error('❌ Heavy upload failed:', error);
    }
});
testHeavyUpload();
