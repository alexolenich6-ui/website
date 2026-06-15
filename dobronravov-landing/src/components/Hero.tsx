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
    <section ref={ref} id="hero" className="w-full bg-ink">

      {/* ══════════════════════════════════════════
          MOBILE LAYOUT (< lg)
          Photo on top, text on bottom — clean stack
      ══════════════════════════════════════════ */}
      <div className="lg:hidden flex flex-col min-h-[100svh]">

        {/* Photo — top ~55% */}
        <div className="relative w-full" style={{ height: "55svh" }}>
          <Image
            src={asset("/portrait/band.jpg")}
            alt="Давид Добронравов"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          {/* Bottom fade into ink */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
        </div>

        {/* Text — bottom ~45%, solid ink */}
        <div className="flex flex-col gap-6 px-6 pt-6 pb-10 bg-ink flex-1">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-sans text-[9px] font-light tracking-[0.45em] uppercase text-gold/60"
          >
            Клинический психолог
          </motion.p>

          <h1 className="font-serif font-light leading-[0.94] tracking-[-0.03em]">
            <span className="block overflow-hidden">
              <motion.span variants={reveal} initial="hidden" animate="visible" custom={1}
                className="block text-[clamp(3rem,12vw,5rem)] text-paper">
                Вернуться
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={reveal} initial="hidden" animate="visible" custom={2}
                className="block text-[clamp(3rem,12vw,5rem)] italic text-gold">
                к&nbsp;себе.
              </motion.span>
            </span>
          </h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="font-sans text-[13px] font-light leading-[1.8] text-paper/55 max-w-[360px]">
            Когда тревога, зависимость или пустота мешают жить —
            я&nbsp;помогаю найти опору внутри и&nbsp;вернуться к&nbsp;своей жизни.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="flex flex-col gap-4">
            <CtaButton />
            <p className="font-sans text-[9px] font-light tracking-[0.3em] uppercase text-paper/30 leading-[2]">
              13&nbsp;лет служил священником · 17&nbsp;лет помогаю людям
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT (≥ lg)
          True 50/50 split — text left, photo right
      ══════════════════════════════════════════ */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-[100svh]">

        {/* LEFT — solid ink, all text */}
        <div className="flex flex-col justify-between px-16 xl:px-24 pt-40 pb-16 bg-ink">
          <div className="overflow-hidden">
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={0}
              className="font-sans text-[10px] font-light tracking-[0.5em] uppercase text-gold/60"
            >
              Давид Добронравов · Клинический психолог
            </motion.p>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden">
              <motion.p
                variants={reveal}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-serif italic font-light text-[clamp(1rem,1.6vw,1.4rem)] leading-[1.4] text-paper/40"
              >
                Когда тревога, зависимость или пустота мешают жить —
              </motion.p>
            </div>

            <h1 className="font-serif font-light leading-[0.92] tracking-[-0.04em]">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={reveal} initial="hidden" animate="visible" custom={2}
                  className="block text-[clamp(4rem,7.5vw,8.5rem)] text-paper"
                >
                  Вернуться
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={reveal} initial="hidden" animate="visible" custom={3}
                  className="block text-[clamp(4rem,7.5vw,8.5rem)] italic text-gold"
                >
                  к&nbsp;себе.
                </motion.span>
              </span>
            </h1>
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="flex flex-col gap-6 pt-8 border-t border-paper/10"
          >
            <p className="font-sans text-[14px] font-light leading-[1.85] text-paper/55 max-w-[420px]">
              Вы держитесь, терпите, заглушаете — а легче не&nbsp;становится.
              Я&nbsp;помогаю найти опору внутри и&nbsp;вернуться к&nbsp;своей жизни.
            </p>
            <div className="flex flex-col gap-4">
              <CtaButton />
              <p className="font-sans text-[10px] font-light tracking-[0.3em] uppercase text-paper/30 leading-[2]">
                13&nbsp;лет служил священником · 17&nbsp;лет помогаю людям
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — photo only, no text */}
        <div className="relative overflow-hidden">
          <Image
            src={asset("/portrait/band.jpg")}
            alt="Давид Добронравов"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
          {/* Gentle left edge fade into ink */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink to-transparent pointer-events-none" />
          {/* Top/bottom fades */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/60 to-transparent pointer-events-none" />
        </div>
      </div>

    </section>
  );
}
