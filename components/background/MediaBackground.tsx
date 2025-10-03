// components/background/MediaBackground.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type MediaBackgroundProps = {
  /** MP4 source for the landing hero background video */
  videoSrc: string;
  /** High-res image used as background once user scrolls past the hero */
  imageSrc: string;
  /** Poster (fallback still) shown before video paints */
  poster?: string;
  /** Height of the hero section (default: 100svh) */
  height?: string;
  /** Add gradient/blur overlays for legibility (default: true) */
  overlay?: boolean;
  /** Children rendered centered over the video hero */
  children?: React.ReactNode;
  /** Content rendered in the next section (scroll area) that can sit on the image background */
  after?: React.ReactNode;
  /** Extra class for the wrapper */
  className?: string;
  /** IntersectionObserver root margin controlling when to switch to image background */
  switchRootMargin?: string;
  /** Use fixed background (parallax-like) for the image panel */
  fixedImage?: boolean;
};

export default function MediaBackground({
  videoSrc,
  imageSrc,
  poster = imageSrc,
  height = "100svh",
  overlay = true,
  children,
  after,
  className = "",
  switchRootMargin = "-50% 0px -50% 0px",
  fixedImage = true,
}: MediaBackgroundProps) {
  const [showImageBg, setShowImageBg] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setShowImageBg(!entry.isIntersecting),
      { rootMargin: switchRootMargin, threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [switchRootMargin]);

  useEffect(() => {
    // Best-effort autoplay on mount (mobile Safari quirks)
    const v = videoRef.current;
    if (!v || prefersReducedMotion) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // ignore; browser might block until user gesture
      }
    };
    tryPlay();
  }, [prefersReducedMotion]);

  return (
    <>
      {/* HERO (Video Background) */}
      <section className={`relative w-full overflow-hidden ${className}`} style={{ height }}>
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={poster}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {/* Fallback still if reduced motion */}
        {prefersReducedMotion && (
          <Image
            src={poster}
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none object-cover"
          />
        )}

        {overlay && (
          <>
            <div className="absolute inset-0 overlay-top pointer-events-none" />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 overlay-bottom pointer-events-none" />
          </>
        )}

        {/* Hero content (centered) */}
        <div className="relative z-10 h-full flex items-center">{children}</div>

        {/* Sentinel (when it leaves the viewport, we flip to image background) */}
        <div ref={sentinelRef} className="absolute inset-x-0 bottom-0 h-1" />
      </section>

      {/* IMAGE BACKGROUND SCROLL AREA */}
      <section
        className="relative"
        style={
          showImageBg
            ? {
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: fixedImage ? ("fixed" as const) : ("scroll" as const),
              }
            : undefined
        }
      >
        {/* Optional top fade for smooth transition from hero to image panel */}
        {overlay && <div className="absolute inset-x-0 -top-10 h-10 overlay-bottom pointer-events-none" />}
        <div className="relative">{after}</div>
      </section>
    </>
  );
}
