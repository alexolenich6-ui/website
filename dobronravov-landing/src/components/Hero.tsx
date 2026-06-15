"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import { asset } from "@/lib/asset";

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, delay: 0.3 + i * 0.1, ease },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.9 + i * 0.1, ease },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="hero"
      className="w-full bg-ink flex flex-col lg:grid lg:grid-cols-2 min-h-[100svh]"
    >
      {/* PHOTO — top on mobile, right column on desktop */}
      <div className="relative order-1 lg:order-2 h-[50svh] lg:h-auto overflow-hidden">
        <Image
          src={asset("/portrait/band.jpg")}
          alt="Давид Добронравов"
          fill
          className="object-cover object-top lg:object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Mobile: fade bottom into ink */}
        <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink to-transparent" />
        {/* Desktop: gentle left edge only */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
        <div className="hidden lg:block absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/50 to-transparent" />
        <div className="hidden lg:block absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/50 to-transparent" />
      </div>

      {/* TEXT — bottom on mobile, left column on desktop */}
      <div className="order-2 lg:order-1 flex flex-col gap-6 bg-ink px-6 md:px-12 lg:px-16 xl:px-24 pt-8 lg:pt-40 pb-12 lg:pb-16 lg:justify-between">

        {/* Eyebrow */}
        <motion.p
          variants={reveal}
          initial="hidden"
          animate="visible"
          custom={0}
          className="font-sans text-[10px] font-light tracking-[0.45em] uppercase text-gold/70"
        >
          Давид Добронравов · Клинический психолог
        </motion.p>

        {/* Headline */}
        <div className="space-y-2">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif italic font-light text-[1.1rem] lg:text-[1.3rem] leading-[1.4] text-paper/55"
          >
            Когда тревога, зависимость или пустота мешают жить —
          </motion.p>

          <h1 className="font-serif font-light leading-[0.92] tracking-[-0.04em]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={reveal} initial="hidden" animate="visible" custom={2}
                className="block text-[clamp(3.2rem,10vw,8rem)] text-paper"
              >
                Вернуться
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={reveal} initial="hidden" animate="visible" custom={3}
                className="block text-[clamp(3.2rem,10vw,8rem)] italic text-gold"
              >
                к&nbsp;себе.
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Bottom content */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="flex flex-col gap-5 pt-6 border-t border-paper/10"
        >
          <p className="font-sans text-[13px] lg:text-[14px] font-light leading-[1.85] text-paper/55 max-w-[420px]">
            Вы держитесь, терпите, заглушаете — а легче не&nbsp;становится.
            Я&nbsp;помогаю найти опору внутри и&nbsp;вернуться к&nbsp;своей жизни.
          </p>
          <CtaButton />
          <p className="font-sans text-[9px] lg:text-[10px] font-light tracking-[0.3em] uppercase text-paper/30 leading-[2]">
            13&nbsp;лет служил священником · 17&nbsp;лет помогаю людям
          </p>
        </motion.div>
      </div>
    </section>
  );
}
