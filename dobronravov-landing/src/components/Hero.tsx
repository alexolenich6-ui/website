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

  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink lg:grid lg:grid-cols-2"
    >
      {/* ── LEFT: text panel ── */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col justify-between px-6 md:px-14 lg:px-16 xl:px-20 pt-32 md:pt-40 pb-14 md:pb-20 min-h-[100svh] bg-ink"
      >
        {/* Eyebrow */}
        <div className="overflow-hidden">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-sans text-[9px] md:text-[10px] font-light tracking-[0.5em] uppercase text-gold/60"
          >
            Давид Добронравов · Клинический психолог
          </motion.p>
        </div>

        {/* Headline */}
        <div className="space-y-2 md:space-y-4">
          <div className="overflow-hidden">
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-serif font-light text-[clamp(0.95rem,1.8vw,1.5rem)] leading-[1.3] text-paper/40 italic"
            >
              Когда тревога, зависимость или пустота мешают жить —
            </motion.p>
          </div>

          <h1 className="font-serif font-light leading-[0.92] tracking-[-0.04em]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={reveal}
                initial="hidden"
                animate="visible"
                custom={2}
                className="block text-[clamp(3.4rem,8vw,8rem)] text-paper"
              >
                Вернуться
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={reveal}
                initial="hidden"
                animate="visible"
                custom={3}
                className="block text-[clamp(3.4rem,8vw,8rem)] italic text-gold"
              >
                к&nbsp;себе.
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Bottom */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex flex-col gap-6 pt-8 border-t border-paper/10"
        >
          <p className="font-sans text-[13px] md:text-[14px] font-light leading-[1.85] text-paper/55 max-w-[400px]">
            Вы держитесь, терпите, заглушаете — а легче не&nbsp;становится.
            Я&nbsp;помогаю найти опору внутри и&nbsp;вернуться к&nbsp;своей жизни.
          </p>

          <CtaButton />

          <p className="font-sans text-[9px] md:text-[10px] font-light tracking-[0.3em] uppercase text-paper/30 leading-[2]">
            13&nbsp;лет служил священником · 17&nbsp;лет помогаю людям
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.2, ease }}
          className="hidden lg:flex absolute bottom-6 left-16 xl:left-20 flex-col items-start gap-3"
        >
          <motion.span
            className="block w-px bg-paper/20"
            animate={{ height: [0, 28, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-sans text-[8px] font-light tracking-[0.45em] uppercase text-paper/20">
            Scroll
          </span>
        </motion.div>
      </motion.div>

      {/* ── RIGHT: photo panel ── */}
      <div className="hidden lg:block relative">
        <motion.div style={{ scale: imgScale }} className="absolute inset-0 origin-center">
          <Image
            src={asset("/portrait/band.jpg")}
            alt="Давид Добронравов"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
        </motion.div>
        {/* Soft left edge bleed into ink */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent pointer-events-none" />
        {/* Top/bottom fades */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/70 to-transparent pointer-events-none" />
      </div>

      {/* Mobile: photo strip below text (just top, decorative) */}
      <div className="lg:hidden relative h-64 w-full">
        <Image
          src={asset("/portrait/band.jpg")}
          alt="Давид Добронравов"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink/60" />
      </div>
    </section>
  );
}
