"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "20+", label: "лет опыта" },
  { num: "150+", label: "реализованных проектов" },
  { num: "15–30%", label: "рост стоимости недвижимости" },
];

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -80]);

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-16 py-40 md:py-56 bg-veil overflow-hidden"
    >
      {/* Section counter top-right */}
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-espresso/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/35">
          02 / Философия
        </span>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative max-w-[1100px] mx-auto text-center"
      >
        <p className="eyebrow mb-14 md:mb-20">Философия</p>

        <blockquote className="font-serif font-light text-[clamp(1.9rem,4.8vw,4.25rem)] leading-[1.18] tracking-[-0.022em] text-espresso">
          <span className="block">«Я проектирую пространство,</span>
          <span className="block italic text-espresso/65 mt-2 md:mt-3">
            в&nbsp;котором вы живёте лучше
          </span>
          <span className="block mt-2 md:mt-3">— и&nbsp;которое стоит дороже»</span>
        </blockquote>

        <div className="flex justify-center my-20 md:my-28">
          <span className="block w-16 h-px bg-espresso/20" />
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-0 max-w-[900px] mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1,
                delay: 0.1 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`text-center px-2 md:px-6 ${
                i > 0 ? "md:border-l md:border-espresso/10" : ""
              }`}
            >
              <span className="block font-serif font-light leading-none text-[clamp(2rem,5.5vw,4rem)] text-espresso tracking-[-0.02em]">
                {stat.num}
              </span>
              <p className="mt-4 md:mt-6 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/45 whitespace-nowrap">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
