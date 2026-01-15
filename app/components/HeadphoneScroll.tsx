"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type HeadphoneScrollProps = {
  frames: string[];
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function HeadphoneScroll({ frames }: HeadphoneScrollProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const frameUrls = useMemo(() => frames, [frames]);
  const frameCount = frameUrls.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const animationProgress = useTransform(
    scrollYProgress,
    [0, 0.02, 1],
    [0, 0, 1],
    { clamp: true }
  );
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.2,
  });

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    }
  }, []);

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const image = imagesRef.current[index];
      if (!canvas || !ctx || !image) return;

      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;
      const imgRatio = image.width / image.height;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;

      if (imgRatio > canvasRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
      } else {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
      }

      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    },
    []
  );

  useEffect(() => {
    if (!frameCount) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    imagesRef.current = new Array(frameCount);
    let loadedCount = 0;

    frameUrls.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!isMounted) return;
        loadedCount += 1;
        imagesRef.current[index] = img;
        if (loadedCount === frameCount) {
          setIsLoading(false);
          requestAnimationFrame(() => drawFrame(0));
        }
      };
    });

    return () => {
      isMounted = false;
    };
  }, [drawFrame, frameCount, frameUrls]);

  useEffect(() => {
    resizeCanvas();
    drawFrame(0);
    const handleResize = () => {
      resizeCanvas();
      drawFrame(
        clamp(
          Math.round(animationProgress.get() * (frameCount - 1)),
          0,
          Math.max(0, frameCount - 1)
        )
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, frameCount, resizeCanvas, animationProgress]);

  useMotionValueEvent(animationProgress, "change", (latest) => {
    if (!frameCount || isLoading) return;
    const frameIndex = clamp(
      Math.round(latest * (frameCount - 1)),
      0,
      frameCount - 1
    );

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
  });

  const opacityWelcomeStart = useTransform(
    smoothProgress,
    [0, 0.08],
    [1, 0]
  );
  const welcomeYStart = useTransform(smoothProgress, [0, 0.08], [0, -40]);
  const opacityTitle = useTransform(
    smoothProgress,
    [0.12, 0.2, 0.3],
    [0, 1, 0]
  );
  const opacityLeft = useTransform(
    smoothProgress,
    [0.32, 0.42, 0.52],
    [0, 1, 0]
  );
  const opacityRight = useTransform(
    smoothProgress,
    [0.56, 0.66, 0.76],
    [0, 1, 0]
  );
  const progressScale = useTransform(smoothProgress, [0, 1], [0, 1]);
  const callNowOpacity = useTransform(smoothProgress, [0.6, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full">
      <canvas
        ref={canvasRef}
        className="sticky top-0 h-screen w-full bg-[#050505]"
      />

      <div className="pointer-events-none absolute inset-0 flex h-screen items-center justify-center">
        {isLoading && (
          <div className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white/60">
            <span className="mr-3 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-transparent" />
            Loading sequence
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2250%22 viewBox=%220 0 50 50%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%2250%22 height=%2250%22 filter=%22url(%23n)%22 opacity=%220.12%22/%3E%3C/svg%3E')] opacity-25 mix-blend-soft-light" />

      <div className="pointer-events-none sticky top-0 z-20 flex h-screen w-full items-end justify-center pb-6">
        <div className="h-1 w-[60vw] max-w-lg rounded-full bg-white/10">
          <motion.div
            style={{ scaleX: progressScale, transformOrigin: "left" }}
            className="h-full rounded-full bg-white/50"
          />
        </div>
      </div>

      <motion.div
        style={{ opacity: callNowOpacity }}
        className="pointer-events-none sticky top-6 z-20 mx-auto flex w-full justify-center"
      >
        <div className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
          Call Now
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacityWelcomeStart, y: welcomeYStart }}
        className="pointer-events-none sticky top-0 z-20 flex h-screen w-full items-center justify-center text-center"
      >
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white/90 md:text-6xl">
          Welcome
        </h1>
      </motion.div>

      <motion.div
        style={{ opacity: opacityTitle }}
        className="pointer-events-none sticky top-0 z-20 flex h-screen w-full items-center justify-center text-center"
      >
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-white/90 md:text-5xl">
          Bicycle Ambulance Santa Monica.
        </h1>
      </motion.div>

      <motion.div
        style={{ opacity: opacityLeft }}
        className="pointer-events-none sticky top-0 z-20 flex h-screen w-full items-center justify-start px-6 md:px-16"
      >
        <div className="max-w-sm text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Story
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white/90 md:text-4xl">
            Serving Santa Monica Since 1995
          </h2>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacityRight }}
        className="pointer-events-none sticky top-0 z-20 flex h-screen w-full items-center justify-end px-6 md:px-16"
      >
        <div className="max-w-sm text-right">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Service
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white/90 md:text-4xl">
            Top Tier Service
          </h2>
        </div>
      </motion.div>

    </section>
  );
}
