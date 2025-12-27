"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToCloudinary = void 0;
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const uploadToCloudinary = (buffer, folder = "prompts") => {
    return new Promise((resolve, reject) => {
        cloudinary_1.default.uploader
            .upload_stream({ folder }, (error, result) => {
            if (error || !result)
                return reject(error);
            resolve(result.secure_url);
        })
            .end(buffer);
    });
};
exports.uploadToCloudinary = uploadToCloudinary;
