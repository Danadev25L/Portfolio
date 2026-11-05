"use client";

import { useEffect, useRef } from "react";

/**
 * A decorative looping video that only decodes while it is on screen. A background video that keeps
 * playing off screen costs a decode per frame for the whole visit, which shows up as scroll stutter.
 */
export default function BackgroundVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.05 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return <video ref={ref} className={className} preload="none" playsInline loop muted src={src} />;
}
