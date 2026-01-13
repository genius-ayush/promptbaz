"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

// ---------------- Types ----------------
type Prompt = {
  id: string;
  sampleImageUrl: string;
  promptText: string;
  modelUsed: string;
  aspectRatio: string;
};

// ---------------- Card ----------------
const DesignCard = ({ design }: { design: Prompt }) => {
  return (
    <div className="group relative h-[160px] w-[200px] sm:h-[180px] sm:w-[220px] shrink-0 overflow-hidden rounded-lg border border-border/50 bg-card shadow-sm">
      <img
        src={design.sampleImageUrl}
        alt="AI Generated"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 opacity-0 transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] text-white backdrop-blur-md">
            {design.modelUsed}
          </span>
          <span className="rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] text-white backdrop-blur-md">
            {design.aspectRatio}
          </span>
        </div>

        <p className="line-clamp-2 text-xs sm:text-sm font-medium text-white/90">
          "{design.promptText}"
        </p>

        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 py-2 text-xs font-semibold text-white backdrop-blur-sm transition">
          <Zap className="h-3.5 w-3.5" />
          Use Prompt
        </button>
      </div>
    </div>
  );
};

// ---------------- Marquee ----------------
const MarqueeRow = ({
  items,
  direction = "left",
  speed = 60,
}: {
  items: Prompt[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="relative w-full overflow-hidden py-3">
      <motion.div
        className="flex gap-4 sm:gap-6 px-2"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, idx) => (
          <DesignCard key={`${item.id}-${idx}`} design={item} />
        ))}
      </motion.div>
    </div>
  );
};

// ---------------- Main Section ----------------
export default function DesignsSection() {
  const [designs, setDesigns] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const res = await fetch("http://localhost:5000/prompts");
        const data = await res.json();
        setDesigns(data.prompts);
      } catch (err) {
        console.error("Failed to fetch prompts", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-muted-foreground">
        Loading designs...
      </div>
    );
  }

  return (
    <div className="w-full border-x border-b pb-8">
      <section className="relative w-full overflow-hidden bg-background">
        {/* Header */}
        <div className="border-b py-8 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-3">
            Crafted with Precision.
          </h1>
          <p className="mx-auto max-w-xl text-sm sm:text-base text-muted-foreground">
            Explore trending visuals created by the community. Copy prompts and
            recreate styles in seconds.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 sm:w-40 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 sm:w-40 bg-gradient-to-l from-background to-transparent" />

          <MarqueeRow items={designs} direction="left" speed={70} />
          <MarqueeRow items={[...designs].reverse()} direction="right" speed={60} />
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center px-4">
          <a href="http://localhost:3000/gallery">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-lg bg-primary px-6 sm:px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg"
          >
            Browse All Designs
            <ArrowRight className="h-4 w-4" />
          </motion.button>
          </a>
        </div>
      </section>
    </div>
  );
}