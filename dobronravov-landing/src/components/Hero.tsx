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

  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* ── RIGHT HALF — portrait ── */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[48%] z-0">
        <motion.div style={{ scale: imgScale }} className="absolute inset-0 origin-center">
          <Image
            src={asset("/portrait/band.jpg")}
            alt="Давид Добронравов"
            fill
            className="object-cover object-center"
            priority
            sizes="48vw"
          />
        </motion.div>
        {/* Left edge bleed — ink bleeds into photo */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent" />
        {/* Top/bottom fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Mobile: photo behind with heavy overlay */}
      <div className="lg:hidden absolute inset-0 z-0">
        <Image
          src={asset("/portrait/band.jpg")}
          alt="Давид Добронравов"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      {/* ── LEFT HALF — content ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8, ease }}
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-6"
      >
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/30 [writing-mode:vertical-rl] rotate-180">
          Клинический психолог
        </span>
        <span className="block h-16 w-px bg-paper/15" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 min-h-[100svh] flex flex-col justify-between lg:w-[54%] max-w-[1680px] mx-auto px-6 md:px-16 lg:pl-24 lg:pr-0 pt-32 md:pt-40 pb-14 md:pb-24"
      >
        {/* Eyebrow */}
        <div className="overflow-hidden">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-sans text-[10px] md:text-[11px] font-light tracking-[0.5em] uppercase text-gold/65"
          >
            Давид Добронравов · Клинический психолог
          </motion.p>
        </div>

        {/* Headline block */}
        <div className="-mx-1 space-y-3 md:space-y-5">
          <div className="overflow-hidden">
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-serif font-light text-[clamp(1rem,2.2vw,1.8rem)] leading-[1.3] tracking-[-0.01em] text-paper/45 italic"
            >
              Когда тревога, зависимость или пустота мешают жить —
            </motion.p>
          </div>

          <h1 className="font-serif font-light leading-[0.94] tracking-[-0.04em]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={reveal}
                initial="hidden"
                animate="visible"
                custom={2}
                className="block text-[clamp(3.6rem,11vw,10rem)] text-paper"
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
                className="block text-[clamp(3.6rem,11vw,10rem)] italic text-gold pl-[0.05em]"
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
          className="pt-8 border-t border-paper/10 flex flex-col gap-7"
        >
          <p className="font-sans text-[13px] md:text-[14px] font-light leading-[1.85] text-paper/60 max-w-[440px]">
            Вы держитесь, терпите, заглушаете — а легче не&nbsp;становится.
            Я&nbsp;помогаю найти опору внутри и&nbsp;вернуться к&nbsp;своей жизни.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <CtaButton />
            <p className="font-sans text-[10px] font-light tracking-[0.28em] uppercase text-paper/35 leading-[2]">
              13&nbsp;лет служил священником<br className="sm:hidden" />{" "}
              · 17&nbsp;лет помогаю людям
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.2, ease }}
        className="absolute bottom-6 left-1/2 lg:left-[27%] -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[9px] font-light tracking-[0.45em] uppercase text-paper/25">
          Scroll
        </span>
        <motion.span
          className="block w-px bg-paper/25"
          animate={{ height: [0, 28, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
