'use client'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-primary py-24 sm:py-18 rounded-lg">
      
      {/* --- Geometric Background Elements (Inspiration: Linear/Tech feel) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Curve */}
        <svg
          className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-10"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C200 0 300 100 400 300C500 500 700 600 900 600C1100 600 1200 800 1200 800"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M-100 0C100 0 200 100 300 300C400 500 600 600 800 600C1000 600 1100 800 1100 800"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="10 10"
          />
        </svg>
        
        {/* Subtle Grid / Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
        
        {/* Radial Glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        
        {/* Animated Heading */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="mx-auto max-w-4xl text-xl font-bold tracking-tight text-primary-foreground sm:text-7xl">
              Visualize.
              {/* <br /> */}
              <span className="opacity-90">Create.</span> <span className="text-white">Inspire.</span>
            </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-primary-foreground/80 sm:text-xl"
        >
          Join thousands of creators building the future with PromptBaz. 
          Unlock the full potential of your imagination today.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
            <button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-base font-semibold text-primary shadow-xl transition-all hover:scale-105 hover:bg-white active:scale-95">
                <Sparkles className="h-5 w-5 fill-current" />
                Start Creating Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
        </motion.div>

        {/* Trust/Footer Text */}
        {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-xs text-primary-foreground/60"
        >
            No credit card required. Cancel anytime.
        </motion.p> */}

      </div>
    </section>
  );
}