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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middewares/auth");
const client_1 = require("@prisma/client");
const upload_1 = require("../middewares/upload");
const uploadToCloudinary_1 = require("../utils/uploadToCloudinary");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prompts = yield prisma.prompt.findMany();
        return res.status(200).json({ message: "Prompts Fetched", prompts });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.post("/", auth_1.verifyAdmin, upload_1.upload.single("image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { title, promptText, modelUsed, steps, aspectRatio, seed, categories = [], tags = [], } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }
        console.log(req.file);
        const imageUrl = yield (0, uploadToCloudinary_1.uploadToCloudinary)(req.file.buffer, req.file.mimetype);
        console.log("reached here");
        console.log(imageUrl);
        const prompt = yield prisma.prompt.create({
            data: {
                title,
                promptText,
                sampleImageUrl: imageUrl,
                modelUsed,
                steps,
                aspectRatio,
                seed,
                categories: {
                    connectOrCreate: categories.map((cat) => ({
                        where: { name: cat },
                        create: { name: cat },
                    })),
                },
                tags: {
                    connectOrCreate: tags.map((tag) => ({
                        where: { name: tag },
                        create: { name: tag },
                    })),
                },
            },
        });
        return res.status(200).json({ message: "Prompt Created", prompt });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const prompt = yield prisma.prompt.findUnique({
            where: {
                id: id
            }
        });
        return res.status(200).json({ message: "Prompt Fetched", prompt });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.put("/:id", auth_1.verifyAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const prompt = yield prisma.prompt.update({
            where: {
                id: id
            },
            data: req.body
        });
        return res.status(200).json({ message: "Prompt Updated", prompt });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.delete("/:id", auth_1.verifyAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const prompt = yield prisma.prompt.delete({
            where: {
                id: id
            }
        });
        return res.status(200).json({ message: "Prompt Deleted", prompt });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}));
exports.default = router;
