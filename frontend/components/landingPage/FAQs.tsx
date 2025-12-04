'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircleQuestion } from "lucide-react";
import Separator from "../ui/seprator";
import { StripedPattern } from "../magicui/striped-pattern";

// --- Mock Data ---
const faqs = [
  {
    question: "How do I use the prompts from the library?",
    answer: "Simply click the 'Copy' button on any design card. Paste this directly into your AI image generator (Midjourney, DALL-E, etc.). We include all necessary parameters like aspect ratio and model version for best results."
  },
  {
    question: "Are the prompts compatible with free AI tools?",
    answer: "Yes! While some prompts are optimized for specific models like Midjourney v6, most descriptive parts work beautifully across free alternatives like Bing Image Creator, Leonardo.ai, or Stable Diffusion."
  },
  {
    question: "Can I submit my own designs to the library?",
    answer: "Absolutely. We thrive on community contributions. Navigate to your dashboard and click 'Submit Design' to share your best creations with the world. Verified submissions earn community badges."
  },
  {
    question: "Do I need a paid subscription to access premium prompts?",
    answer: "Our core library is free forever. We do offer a Pro tier for advanced workflows, which includes features like prompt sequencing, history saving, and exclusive access to experimental model parameters."
  },
  {
    question: "What if the generated image doesn't look like the preview?",
    answer: "AI generation involves some randomness (seeds). While our prompts get you 95% of the way there, you might need to re-roll a few times. Check the 'Step-by-Step' guide for specific seed numbers if you need exact replication."
  }
];

// --- Components ---
//@ts-ignore
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left transition-all hover:text-primary"
      >
        <span className="text-base font-medium text-foreground sm:text-lg">
          {question}
        </span>
        <span className={`ml-4 shrink-0 rounded-full border border-border p-1 transition-colors duration-300 ${isOpen ? "bg-primary border-primary text-primary-foreground" : "bg-transparent text-muted-foreground"}`}>
          <Plus 
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} 
          />
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-background border-b">
        
      {/* Background Decor - Minimalist Gradient Blob */}
      {/* <div className="pointer-events-none absolute right-0 top-0 -z-10 translate-x-1/3 -translate-y-1/3 opacity-20">
         <div className="h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
      </div> */}

      <div className="container mx-auto px-4 md:px-6 flex h-full">
        <div className="hidden md:block relative w-[50px] border-r overflow-hidden">
                            <StripedPattern />
                        </div>
        <div className="mx-auto max-w-3xl mt-8 mb-8">
            
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-secondary-foreground backdrop-blur-sm"
            >
                <MessageCircleQuestion className="h-3.5 w-3.5 text-primary" />
                <span>Support & Help</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-muted-foreground"
            >
              Everything you need to know about creating with PromptBaz.
            </motion.p>
          </div>

          {/* Accordion List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-lg border border-border/50 bg-card/50 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                //@ts-ignore
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              />
            ))}
          </motion.div>

          {/* Footer Note */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="mt-10 text-center text-sm text-muted-foreground"
          >
             Still have questions? <a href="#" className="font-medium text-primary hover:underline">Contact Support</a>
          </motion.div>

        </div>
        <div className="hidden md:block relative w-[50px] border-r overflow-hidden">
                    <StripedPattern />
                </div>
      </div>
    </section>
  );
}