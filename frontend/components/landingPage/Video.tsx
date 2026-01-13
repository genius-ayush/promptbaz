"use client";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function Video() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden "
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/2NAtYVF6QpE?si=eABKHCt1sid3buRi"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/2NAtYVF6QpE?si=eABKHCt1sid3buRi"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}
