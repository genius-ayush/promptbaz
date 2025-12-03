import React from "react";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Video } from "./Video";

function Hero() {
    return (
        <section
            className={cn(
                "relative flex flex-col items-center justify-center text-center w-full border-b z-20",
                "min-h-[80vh] sm:min-h-[90vh] md:min-h-screen",
                "[background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--primary)_100%)]",
                "rounded-b-xl px-4 sm:px-6 md:px-8 pb-32 mb-72"
            )}
        >
            {/* Content */}
            <div className="relative mx-auto my-10 max-w-6xl pointer-events-none flex flex-col items-center">
                {/* Badge */}
                <div className=" flex mb-8 sm:mb-10 items-center justify-center">
                    <div
                        className={cn(
                            "group rounded-full border border-black/5 bg-neutral-100 text-sm sm:text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                        )}
                    >
                        <AnimatedShinyText className="inline-flex items-center justify-center px-3 sm:px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>✨ Introducing PromptBaz</span>
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </div>
                </div>

                {/* Title */}
                <h1
                    className={cn(
                        "font-semibold leading-tight mx-auto max-w-4xl",
                        "text-3xl sm:text-4xl md:text-5xl lg:text-5xl"
                    )}
                >
                    Stop Searching for Prompts.{" "}
                    <br className="hidden sm:block" /> Start Creating Images.
                </h1>

                {/* Subheading */}
                <p
                    className={cn(
                        "text-gray-400 mt-5 sm:mt-6 mx-auto max-w-xl sm:max-w-2xl",
                        "text-base sm:text-lg md:text-lg"
                    )}
                >
                    Discover curated AI prompts with real sample outputs. Copy a prompt, upload your reference image, and create stunning visuals in seconds.
                </p>

                {/* CTA Button */}
                <Button className="mt-8 sm:mt-10 px-5 sm:px-7 py-2 sm:py-3 text-base sm:text-lg text-white pointer-events-auto md:mb-48">
                    Get Started
                </Button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 w-full px-4 sm:px-6 md:px-8 max-w-9xl mx-auto">
            <div className="fade-container">
                <Video />
               </div> 
            </div>

            {/* Decorative Borders */}
            <div className="absolute inset-y-0 left-3 sm:left-5 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80" />
            <div className="absolute inset-y-0 right-3 sm:right-5 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80" />
            {/* <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80" /> */}
        </section>
    );
}

export default Hero;
