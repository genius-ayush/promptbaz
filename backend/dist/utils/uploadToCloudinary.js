"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToCloudinary = void 0;
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const uploadToCloudinary = (buffer, mimetype, folder = "prompts") => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary_1.default.uploader.upload_stream({
            folder,
            resource_type: "image",
        }, (error, result) => {
            if (error) {
                console.error("❌ Cloudinary upload error:", error);
                return reject(error);
            }
            if (!(result === null || result === void 0 ? void 0 : result.secure_url)) {
                return reject(new Error("No secure_url returned from Cloudinary"));
            }
            resolve(result.secure_url);
        });
        // 🔥 THIS LINE IS CRITICAL
        stream.end(buffer);
    });
};
exports.uploadToCloudinary = uploadToCloudinary;
