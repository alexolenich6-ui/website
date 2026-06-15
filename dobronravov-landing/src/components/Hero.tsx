"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import { asset } from "@/lib/asset";

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { y: "115%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 1.4, delay: 0.5 + i * 0.12, ease },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 1.45 + i * 0.12, ease },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Portrait — right half, fades into ink */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        {/* Photo — right side on desktop, full-bleed dimmed on mobile */}
        <div className="absolute inset-0 lg:left-[44%]">
          <Image
            src={asset("/portrait/band.jpg")}
            alt="Давид Добронравов"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1024px) 100vw, 56vw"
          />
        </div>
        {/* Gradient: left fade so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 lg:via-ink/60 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        {/* Subtle gold glow */}
        <div className="absolute -top-[20%] left-1/4 h-[60vh] w-[60vw] bg-[radial-gradient(closest-side,rgba(165,138,88,0.1),transparent)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8, ease }}
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-6"
      >
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35 [writing-mode:vertical-rl] rotate-180">
          Клинический психолог
        </span>
        <span className="block h-16 w-px bg-paper/15" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 min-h-[100svh] flex flex-col justify-between max-w-[1680px] mx-auto px-6 md:px-16 lg:px-24 pt-32 md:pt-40 pb-14 md:pb-24"
      >
        {/* Eyebrow */}
        <div className="overflow-hidden">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-sans text-[10px] md:text-[11px] font-light tracking-[0.5em] uppercase text-gold/70"
          >
            Давид Добронравов · Клинический психолог с опытом священнического служения
          </motion.p>
        </div>

        {/* Headline block */}
        <div className="-mx-1 space-y-4 md:space-y-6">
          {/* Problem statement — smaller, sets up the promise */}
          <div className="overflow-hidden">
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-serif font-light text-[clamp(1.1rem,2.8vw,2.2rem)] leading-[1.25] tracking-[-0.01em] text-paper/50 italic"
            >
              Когда тревога, зависимость или пустота мешают жить —
            </motion.p>
          </div>

          {/* Big Idea — the promise */}
          <h1 className="font-serif font-light leading-[0.94] tracking-[-0.04em]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={reveal}
                initial="hidden"
                animate="visible"
                custom={2}
                className="block text-[clamp(3.8rem,13vw,13rem)] text-paper"
              >
                Вернуться
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={reveal}
                initial="hidden"
                animate="visible"
                custom={3}
                className="block text-[clamp(3.8rem,13vw,13rem)] italic text-gold pl-[0.05em]"
              >
                к&nbsp;себе.
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Bottom row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="pt-8 md:pt-10 border-t border-paper/10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end"
        >
          <p className="md:col-span-6 font-sans text-[13px] md:text-[15px] font-light leading-[1.85] text-paper/65 max-w-[520px]">
            Вы держитесь, терпите, заглушаете — а легче не&nbsp;становится
            или становится на&nbsp;время. Я&nbsp;помогаю разобраться,
            что с&nbsp;вами происходит, и&nbsp;вернуть себе опору внутри,
            чтобы вы снова понимали, чего хотите, и&nbsp;жили свою жизнь.
          </p>

          <div className="md:col-span-6 flex flex-col md:items-end gap-7">
            <CtaButton />
            <p className="font-sans text-[10px] font-light tracking-[0.32em] uppercase text-paper/40 leading-[2.2]">
              Клинический психолог · 13&nbsp;лет служил священником ·{" "}
              <span className="text-paper/55">17 лет помогаю людям</span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.2, ease }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[9px] font-light tracking-[0.45em] uppercase text-paper/30">
          Scroll
        </span>
        <motion.span
          className="block w-px bg-paper/30"
          animate={{ height: [0, 28, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
