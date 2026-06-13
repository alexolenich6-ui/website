"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CtaButton from "./CtaButton";

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
      {/* Atmospheric light — the lighthouse beam, drawn from the top.
          ASSET (optional, §6 фото A — 9ca52427 ч/б портрет): можно подложить
          фоном поверх этого слоя как <Image fill className="object-cover opacity-40" />.
          См. ASSETS.md → public/portrait/hero.jpg */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 h-[70vh] w-[120vw] bg-[radial-gradient(closest-side,rgba(165,138,88,0.16),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink" />
      </motion.div>

      {/* Vertical index — left edge */}
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
        {/* Eyebrow — big idea */}
        <div className="overflow-hidden">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-sans text-[10px] md:text-[11px] font-light tracking-[0.5em] uppercase text-gold/70"
          >
            Давид Добронравов · Клинический психолог
          </motion.p>
        </div>

        {/* Massive headline */}
        <div className="-mx-1">
          <div className="overflow-hidden pb-1">
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-serif text-[clamp(3.2rem,12vw,12rem)] font-light leading-[0.94] tracking-[-0.035em] text-paper"
            >
              Вернуться
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-serif text-[clamp(3.2rem,12vw,12rem)] font-light italic leading-[0.94] tracking-[-0.035em] text-gold pl-[0.1em]"
            >
              к&nbsp;себе
            </motion.h1>
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="pt-8 md:pt-10 border-t border-paper/10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end"
        >
          <p className="md:col-span-6 font-sans text-[13px] md:text-[15px] font-light leading-[1.85] text-paper/70 max-w-[520px]">
            Зависимость, тревога, кризис — это не&nbsp;поломка. Это сигнал,
            что ты потерял контакт с&nbsp;собой. Помогаю его вернуть.
          </p>

          <div className="md:col-span-6 flex flex-col md:items-end gap-7">
            <CtaButton />
            {/* §9.3 — формулировка стажа на согласовании. */}
            <p className="font-sans text-[10px] font-light tracking-[0.32em] uppercase text-paper/40 leading-[2.2]">
              Клинический психолог · опыт психиатрии ·{" "}
              <span className="text-paper/55">17+ лет рядом с людьми</span>
            </p>
            {/* TODO(§9.2) — соц-доказательство («тысячи прошли этот путь» /
                «1000+ получили поддержку») вставить после согласования финала.
                Сознательно не выводим непроверённое число (этика §7). */}
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle scroll cue */}
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
