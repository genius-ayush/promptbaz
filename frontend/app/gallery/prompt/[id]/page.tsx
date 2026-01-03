"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import {
  Copy,
  Check,
  Share2,
  Cpu,
  Maximize2,
  Layers,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PromptDetailPage() {
  const { id } = useParams();

  const [promptData, setPromptData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // 🔹 Fetch prompt from backend
  useEffect(() => {
    if (!id) return;

    const fetchPrompt = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:5000/prompts/${id}`
        );
        console.log(res.data) ; 
        //@ts-ignore
        setPromptData(res.data.prompt);
      } catch (err) {
        setError("Failed to load prompt");
      } finally {
        setLoading(false);
      }
    };

    fetchPrompt();
  }, [id]);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptData.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ------------------ UI STATES ------------------ */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Loading prompt...
      </div>
    );
  }

  if (error || !promptData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error || "Prompt not found"}
      </div>
    );
  }

  /* ------------------ MAIN UI ------------------ */

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Image */}
          <div className="lg:col-span-7">
            <div className="sticky top-24 rounded-2xl overflow-hidden border bg-muted/30">
              <img
                src={promptData.sampleImageUrl}
                alt={promptData.title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <button className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-lg">
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-8">

            {/* Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {promptData.categories?.map((cat: any) => (
                  <span
                    key={cat.id}
                    className="rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl font-bold">{promptData.title}</h1>

              <div className="flex gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Cpu className="w-4 h-4" />
                  {promptData.modelUsed}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(promptData.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Prompt */}
            <div className="relative">
              <div className="p-4 rounded-xl bg-secondary/50 border font-mono text-sm whitespace-pre-wrap">
                {promptData.promptText}
              </div>

              <button
                onClick={handleCopy}
                className={cn(
                  "absolute top-2 right-2 p-2 rounded-lg border flex items-center gap-2",
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-background hover:bg-accent"
                )}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span className="text-xs">
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </div>

            {/* Config */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-muted-foreground">Aspect Ratio</span>
                <p>{promptData.aspectRatio || "N/A"}</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Seed</span>
                <p className="font-mono">{promptData.seed || "Random"}</p>
              </div>
            </div>

            {/* Steps */}
            {promptData.steps?.length > 0 && (
              <div>
                <h3 className="flex items-center gap-2 text-sm font-medium">
                  <Layers className="w-4 h-4" /> Generation Steps
                </h3>
                <div className="mt-2 space-y-2">
                  {promptData.steps.map((step: string, i: number) => (
                    <div key={i} className="flex gap-3 text-sm">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-muted text-xs">
                        {i + 1}
                      </span>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {promptData.tags?.map((tag: any) => (
                <span key={tag.id} className="text-sm text-muted-foreground">
                  #{tag.name}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
