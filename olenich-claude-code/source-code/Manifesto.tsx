"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -60]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-16 py-40 md:py-52">
      <motion.div style={{ opacity, y }} className="max-w-[1000px] mx-auto text-center">
        <p className="font-sans text-[9px] md:text-[10px] font-light tracking-[0.6em] uppercase text-shadow/30 mb-16 md:mb-24">
          Философия
        </p>

        <blockquote className="font-serif text-[clamp(1.8rem,4.5vw,4rem)] font-light leading-[1.25] tracking-[-0.02em] text-espresso">
          «Я проектирую пространство,
          <br className="hidden md:block" />
          <span className="italic text-shadow/70"> в&nbsp;котором вы живёте лучше</span>
          <br className="hidden md:block" />
           — и&nbsp;которое стоит дороже»
        </blockquote>

        <div className="w-12 h-[0.5px] bg-oat/40 mx-auto mt-20 md:mt-28 mb-20 md:mb-28" />

        <div className="flex justify-center gap-20 md:gap-32">
          {[
            { num: "20+", label: "лет опыта" },
            { num: "150+", label: "проектов" },
            { num: "15–30%", label: "рост стоимости" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-espresso leading-none">
                {stat.num}
              </span>
              <p className="mt-4 font-sans text-[9px] font-light tracking-[0.4em] uppercase text-shadow/30">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
