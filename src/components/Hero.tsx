"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { y: "115%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 1.4, delay: 0.55 + i * 0.12, ease },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 1.5 + i * 0.12, ease },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-[110vh] w-full overflow-hidden bg-espresso"
    >
      <motion.div
        style={{ scale: imgScale, opacity: imgOpacity }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/portfolio/sofa_3.jpg"
          alt="Интерьер от Евгении Оленич — Софа Новочеремушкинская"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Gradient veil — atmospheric, not heavy */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/15 to-espresso/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-transparent to-transparent" />

      {/* Vertical index — left edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8, ease }}
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-6"
      >
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-cream/35 [writing-mode:vertical-rl] rotate-180">
          Premium Interior Design
        </span>
        <span className="block h-16 w-px bg-cream/15" />
      </motion.div>

      {/* Side counter — right edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8, ease }}
        className="hidden md:block absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10"
      >
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-cream/35 [writing-mode:vertical-rl]">
          01 / Hero
        </span>
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 h-full flex flex-col justify-between max-w-[1680px] mx-auto px-6 md:px-16 lg:px-24 pt-32 md:pt-40 pb-14 md:pb-24"
      >
        {/* Top eyebrow */}
        <div className="overflow-hidden">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-sans text-[10px] md:text-[11px] font-light tracking-[0.5em] uppercase text-cream/45"
          >
            Евгения Оленич · Дизайн интерьера · Москва
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
              className="font-serif text-[clamp(3.4rem,13vw,13rem)] font-light leading-[0.92] tracking-[-0.035em] text-cream"
            >
              Пространства,
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-serif text-[clamp(3.4rem,13vw,13rem)] font-light italic leading-[0.92] tracking-[-0.035em] text-cream/75 pl-[0.12em]"
            >
              в&nbsp;которых
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={3}
              className="font-serif text-[clamp(3.4rem,13vw,13rem)] font-light leading-[0.92] tracking-[-0.035em] text-cream"
            >
              живут
            </motion.h1>
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="pt-8 md:pt-10 border-t border-cream/10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end"
        >
          <p className="md:col-span-5 font-sans text-[12px] md:text-[13px] font-light leading-[1.8] text-cream/55 max-w-[420px]">
            Интерьеры, которые меняют вашу жизнь каждый&nbsp;день — и&nbsp;повышают
            стоимость вашей недвижимости на&nbsp;15–30%
          </p>

          <div className="md:col-span-7 flex flex-col md:flex-row md:justify-end items-start md:items-center gap-6 md:gap-10">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-4 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-cream/50 hover:text-cream transition-colors duration-700"
            >
              <span>Посмотреть&nbsp;портфолио</span>
              <span className="block h-px w-8 bg-cream/30 group-hover:w-12 transition-all duration-700 ease-out" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-5 font-sans text-[11px] font-light tracking-[0.4em] uppercase text-cream hover:text-oat transition-colors duration-700"
            >
              <span>Обсудить&nbsp;проект</span>
              <span className="relative block h-px w-14 bg-cream group-hover:w-20 transition-all duration-700 ease-out">
                <span className="absolute -right-[2px] -top-[3px] block w-2 h-2 border-t border-r border-cream group-hover:border-oat rotate-45" />
              </span>
            </a>
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
        <span className="font-sans text-[9px] font-light tracking-[0.45em] uppercase text-cream/30">
          Scroll
        </span>
        <motion.span
          className="block w-px bg-cream/30"
          animate={{ height: [0, 28, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
