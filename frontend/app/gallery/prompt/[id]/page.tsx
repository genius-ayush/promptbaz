"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { 
  Copy, 
  Check, 
  Share2, 
  Cpu, 
  Maximize2, 
  Layers, 
  Calendar 
} from "lucide-react";
import { MOCK_PROMPTS } from "@/lib/data/prompt";
import { cn } from "@/lib/utils"; // Assuming you have a standard clsx utility

export default function PromptDetailPage() {
  const params = useParams();
  const id = params.id;
  
  // Find data (Swap with Axios call later)
  const promptData = MOCK_PROMPTS.find((p) => p.id === id) || MOCK_PROMPTS[0];
  
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptData.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Image (Sticky on Desktop) */}
          <div className="lg:col-span-7">
            <div className="sticky top-24 rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-sm group">
              <div className="relative aspect-auto">
                 <img 
                  src={promptData.sampleImageUrl} 
                  alt={promptData.title} 
                  className="w-full h-auto object-contain max-h-[85vh]"
                />
                <button className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg backdrop-blur-sm transition-colors">
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Prompt Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Header Info */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {promptData.categories.map(cat => (
                  <span key={cat.id} className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    {cat.name}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {promptData.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Cpu className="w-4 h-4" />
                  <span>{promptData.modelUsed}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(promptData.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Main Prompt Area */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-foreground">Prompt</h3>
                <div className="flex gap-2">
                   <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                    <Share2 className="w-4 h-4" /> Share
                   </button>
                </div>
              </div>
              
              <div className="relative group">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border text-secondary-foreground font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
                  {promptData.promptText}
                </div>
                
                {/* Floating Copy Button */}
                <button 
                  onClick={handleCopy}
                  className={cn(
                    "absolute top-2 right-2 p-2 rounded-lg transition-all duration-200 border shadow-sm flex items-center gap-2",
                    copied 
                      ? "bg-green-500 border-green-600 text-white" 
                      : "bg-background border-input hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="text-xs font-medium pr-1">{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            <div className="h-px bg-border w-full" />

            {/* Configuration / Steps */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Aspect Ratio</span>
                <p className="font-medium">{promptData.aspectRatio || "Not specified"}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Seed</span>
                <p className="font-medium font-mono">{promptData.seed || "Random"}</p>
              </div>
            </div>

            {/* Steps Section */}
            {promptData.steps && promptData.steps.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Generation Steps
                </h3>
                <div className="space-y-2">
                  {promptData.steps.map((step, index) => (
                    <div key={index} className="flex gap-3 text-sm">
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-mono">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                {promptData.tags.map(tag => (
                  <span key={tag.id} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}