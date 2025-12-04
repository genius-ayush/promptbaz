'use client'

import { StripedPattern } from "../magicui/striped-pattern";
import { Copy, Search, Sparkles, Layers, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// --- Visual Components for each Feature ---

// 1. Curated Library: Floating "cards" stacking up
const LibraryVisual = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-neutral-50/50 dark:bg-neutral-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 dark:bg-[radial-gradient(#262626_1px,transparent_1px)]" />
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                className="absolute w-24 h-32 rounded-lg border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
                initial={{ y: 0, rotate: 0 }}
                style={{ zIndex: i }}
                animate={{ 
                    y: [0, -8 - (i*4), 0],
                    rotate: [0, i % 2 === 0 ? 3 : -3, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeInOut"
                }}
            >
                <div className="m-2 h-16 rounded bg-neutral-100 dark:bg-neutral-800/50" />
                <div className="mx-2 h-2 w-2/3 rounded bg-neutral-100 dark:bg-neutral-800/50" />
            </motion.div>
        ))}
    </div>
  );
};

// 2. Step-by-Step: Connecting nodes (Your requested logic adapted)
const GuideVisual = () => {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 bg-neutral-100/50 dark:bg-neutral-900/50 overflow-hidden">
             <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                        <motion.div
                            className="h-8 w-8 rounded-full border bg-background flex items-center justify-center shadow-sm z-10"
                            animate={{
                                borderColor: ["#e5e5e5", "var(--primary)", "#e5e5e5"],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                        >
                            <span className="text-xs font-bold text-muted-foreground">{i + 1}</span>
                        </motion.div>
                        {i < 2 && (
                            <motion.div 
                                className="h-1 w-8 bg-neutral-200 dark:bg-neutral-800"
                            >
                                <motion.div 
                                    className="h-full bg-primary"
                                    initial={{ width: "0%" }}
                                    animate={{ width: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                                />
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
            <motion.div 
                className="px-3 py-1 bg-background border rounded-full text-[10px] shadow-sm text-muted-foreground"
                animate={{ opacity: [0.5, 1, 0.5], y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Generating...
            </motion.div>
        </div>
    );
};

// 3. Search: A scanning lens effect
const SearchVisual = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-neutral-100/50 dark:bg-neutral-900/50 overflow-hidden">
            {/* Background Grid of items */}
            <div className="grid grid-cols-4 gap-2 opacity-30">
                {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="h-6 w-6 rounded-md bg-neutral-400 dark:bg-neutral-600" />
                ))}
            </div>
            
            {/* Scanning Lens */}
            <motion.div
                className="absolute flex items-center justify-center h-24 w-24 rounded-full border-2 border-primary/50 bg-background/20 backdrop-blur-[2px] shadow-lg"
                animate={{ 
                    x: [-40, 40, -40],
                    y: [-20, 20, -20]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Search className="h-8 w-8 text-primary" />
            </motion.div>
        </div>
    );
};

// 4. Copy: Code typing and highlighting
const CopyVisual = () => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCopied((prev) => !prev);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center bg-neutral-100/50 dark:bg-neutral-900/50 overflow-hidden p-6">
            <div className="w-full max-w-[200px] rounded-lg border bg-background shadow-sm p-3 space-y-2">
                <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <div className="space-y-1.5 pt-1">
                    <motion.div 
                        className="h-2 w-3/4 rounded-full bg-neutral-200 dark:bg-neutral-800"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <div className="h-2 w-1/2 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                    <div className="h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800" />
                </div>
                
                <motion.div 
                    className="absolute bottom-4 right-4 p-2 rounded-md bg-primary text-primary-foreground shadow-lg"
                    animate={{ scale: copied ? [1, 1.2, 1] : 1 }}
                >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </motion.div>
            </div>
        </div>
    );
};


const features = [
    {
        title: "Curated Prompt Library",
        desc: "High-quality prompts tested by creators, each paired with real output.",
        icon: Sparkles,
        visual: <LibraryVisual />,
    },
    {
        title: "Step-by-Step Generation",
        desc: "Each prompt includes settings, models, and seeds for reproducibility.",
        icon: Layers,
        visual: <GuideVisual />,
    },
    {
        title: "Search & Discover Styles",
        desc: "Browse prompts by theme, style, or model. Find the perfect aesthetic.",
        icon: Search,
        visual: <SearchVisual />,
    },
    {
        title: "Copy Prompt in One Click",
        desc: "Copy complete prompts instantly—no rewriting or tweaking required.",
        icon: Copy,
        visual: <CopyVisual />,
    },
];

export default function Features() {
    return (
        <div className="mt-30 w-full flex justify-center border-b">
            {/* Main Container */}
            <div className="flex w-full max-w-full ml-8 mr-8 border-l border-r border-t bg-background">
                
                {/* Left Stripe */}
                <div className="hidden md:block relative w-[50px] border-r overflow-hidden">
                    <StripedPattern />
                </div>

                {/* Center Content */}
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="border-b w-full text-center flex flex-col items-center justify-center py-8 bg-background/50 backdrop-blur-sm">
                        <h1 className="text-3xl sm:text-4xl md:text-4xl font-medium tracking-tight mb-4">
                            Create Better Images. Faster.
                        </h1>
                        <p className="max-w-xl text-muted-foreground text-sm sm:text-base px-4">
                            Discover how PromptBaz helps you find the right prompt, follow the right steps, and create stunning AI visuals with ease.
                        </p>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                className={`
                                    group relative flex flex-col border-b p-6 md:p-8 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/20 transition-colors duration-300
                                    ${index % 2 === 0 ? "md:border-r" : ""}
                                `}
                            >
                                {/* Visual Area - Expanded height for immersion */}
                                <div className="mb-6 h-40 w-full overflow-hidden rounded-xl border bg-background shadow-sm">
                                    {feature.visual}
                                </div>

                                {/* Text Content */}
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <feature.icon className="h-4 w-4" />
                                    </div>
                                    <h3 className="font-semibold text-lg tracking-tight">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Stripe */}
                <div className="hidden md:block relative w-[50px] border-l overflow-hidden">
                    <StripedPattern />
                </div>
            </div>
            
            {/* Background Lines for Aesthetic */}
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden opacity-20 pointer-events-none">
                 {/* Optional: Add background grain or gradient blobs here if needed */}
            </div>
        </div>
    );
}