"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  caption?: string;
  meta?: string;
  height?: "compact" | "default" | "tall";
}

const heightClass = {
  compact: "h-[45vh] md:h-[55vh]",
  default: "h-[55vh] md:h-[70vh]",
  tall: "h-[70vh] md:h-[88vh]",
};

export default function ParallaxImage({
  src,
  alt,
  caption,
  meta,
  height = "default",
}: ParallaxImageProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden bg-espresso ${heightClass[height]}`}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-[-18%] w-[136%] h-[136%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          quality={88}
        />
      </motion.div>

      <div className="absolute inset-0 bg-espresso/12" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-espresso/30 to-transparent" />

      {(caption || meta) && (
        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-16 right-6 md:right-16 flex items-end justify-between gap-6">
          {caption && (
            <p className="font-sans text-[10px] md:text-[11px] font-light tracking-[0.4em] uppercase text-cream/70">
              {caption}
            </p>
          )}
          {meta && (
            <p className="font-sans text-[10px] md:text-[11px] font-light tracking-[0.4em] uppercase text-cream/40">
              {meta}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
