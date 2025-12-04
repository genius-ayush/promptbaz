"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Filter, ArrowRight } from "lucide-react";
import { MOCK_PROMPTS, Prompt } from "@/lib/data/prompt"; // Import your mock data
// import axios from 'axios'; // For future integration

export default function GalleryPage() {
  const [prompts, setPrompts] = useState<Prompt[]>(MOCK_PROMPTS);

  // FIXME: FUTURE BACKEND INTEGRATION
  // useEffect(() => {
  //   const fetchPrompts = async () => {
  //     const { data } = await axios.get('/api/prompts');
  //     setPrompts(data);
  //   };
  //   fetchPrompts();
  // }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header / Filter Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">PromptBaz</h1>
          
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search prompts..." 
                className="h-9 w-[200px] lg:w-[300px] rounded-lg border border-input bg-transparent px-3 pl-9 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <button className="inline-flex items-center justify-center rounded-lg border border-input h-9 w-9 hover:bg-accent hover:text-accent-foreground transition-colors">
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Masonry Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {prompts.map((prompt) => (
            <GalleryCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </main>
    </div>
  );
}

function GalleryCard({ prompt }: { prompt: Prompt }) {
  return (
    <Link href={`gallery/prompt/${prompt.id}`} className="group break-inside-avoid block mb-4 relative rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <div className="w-full relative">
        <img 
          src={prompt.sampleImageUrl} 
          alt={prompt.title} 
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Overlay using your .fade-container logic */}
        <div className="fade-container absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           {/* The fade-container::after pseudo-element creates the gradient at the bottom */}
        </div>

        {/* Content overlaid on image (Visible on Hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-10">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="font-semibold text-white text-lg leading-tight">{prompt.title}</h3>
              <p className="text-white/80 text-xs mt-1 font-medium">{prompt.modelUsed}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}