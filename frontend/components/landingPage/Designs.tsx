'use client'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

// --- Mock Data: High Quality AI Style Images ---
const designs = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
    prompt: "Cyberpunk street view, neon lights, 8k render...",
    model: "Midjourney v6",
    aspect: "16:9"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1633167606207-d840b507049c?q=80&w=1000&auto=format&fit=crop",
    prompt: "Abstract 3D glass shapes, iridescent colors...",
    model: "DALL-E 3",
    aspect: "1:1"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000&auto=format&fit=crop",
    prompt: "Cinematic portrait of a astronaut, mars background...",
    model: "Stable Diffusion XL",
    aspect: "9:16"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    prompt: "Oil painting of a stormy ocean, golden hour...",
    model: "Midjourney v6",
    aspect: "4:3"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1614728853970-bc27a9caec25?q=80&w=1000&auto=format&fit=crop",
    prompt: "Minimalist architectural render, concrete and wood...",
    model: "Firefly 2",
    aspect: "16:9"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    prompt: "Synthwave landscape, retro grid, mountains...",
    model: "Midjourney v5.2",
    aspect: "2:1"
  },
];

// --- Components ---
//@ts-ignore
const DesignCard = ({ design }) => {
  return (
    <div className="group relative h-[180px] w-[220px] shrink-0 overflow-hidden rounded-lg border border-border/50 bg-card shadow-sm">
        {/* Image */}
        <img 
            src={design.url} 
            alt="AI Generated" 
            className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
        />
        
        {/* Minimalist Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="mb-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                    {design.model}
                </span>
                <span className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                    {design.aspect}
                </span>
            </div>
            <p className="line-clamp-2 text-sm font-medium text-white/90">
                "{design.prompt}"
            </p>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors">
                <Zap className="h-3.5 w-3.5" /> Use Prompt
            </button>
        </div>
    </div>
  );
};
//@ts-ignore
const MarqueeRow = ({ items, direction = "left", speed = 50 }) => {
  return (
    <div className="relative flex w-full overflow-hidden py-3">
       <motion.div 
         className="flex gap-6 px-2"
         initial={{ x: direction === "left" ? 0 : "-50%" }}
         animate={{ x: direction === "left" ? "-50%" : 0 }}
         transition={{ 
            duration: speed, 
            repeat: Infinity, 
            ease: "linear" 
         }}
       >
         {/* Render items twice for seamless loop */}
         {[...items, ...items, ...items, ...items].map((item, idx) => (
           <DesignCard key={`${item.id}-${idx}`} design={item} />
         ))}
       </motion.div>
    </div>
  );
};

export default function DesignsSection() {
  return (
    <div className="w-full border-l border-r border-b pb-8">
    <section className="relative w-full overflow-hidden bg-background ">
      
      {/* Background Decor - Using theme Primary color */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
         <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div> */}

      {/* Header */}
      <div className="container relative z-10 mx-auto mb-8  text-center">
        
        <div className="border-b w-full text-center flex flex-col items-center justify-center py-8 bg-background/50 backdrop-blur-sm">
                        <h1 className="text-3xl sm:text-4xl md:text-4xl font-medium tracking-tight mb-4">
                            Crafted with Precision.
                        </h1>
                        <p className="max-w-xl text-muted-foreground text-sm sm:text-base px-4">
                            Explore the latest trending visuals generated by our community.
Copy the prompts and recreate these styles in seconds.
                        </p>    
                    </div>

        {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
        >
            Crafted with <span className="text-primary">Precision.</span>
        </motion.h2> */}
        
        {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
            Explore the latest trending visuals generated by our community. <br className="hidden sm:block"/>
            Copy the prompts and recreate these styles in seconds.
        </motion.p> */}
      </div>

      {/* Marquee Section */}
      <div className="relative flex flex-col ">
          
          {/* Edge Fade - Matches bg-background perfectly */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-background to-transparent md:w-40" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-background to-transparent md:w-40" />

          {/* Row 1: Left Scroll */}
          <div className="opacity-90 hover:opacity-100 transition-opacity duration-500">
             <MarqueeRow items={designs} direction="left" speed={70} />
          </div>

          {/* Row 2: Right Scroll */}
          <div className="opacity-90 hover:opacity-100 transition-opacity duration-500">
            <MarqueeRow items={[...designs].reverse()} direction="right" speed={60} />
          </div>
      </div>

      {/* CTA Bottom */}
      <div className="relative z-10 mt-4 flex justify-center">
        <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
        >
            Browse All Designs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>

    </section>
    </div>
  );
}