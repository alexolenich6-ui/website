"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const textReveal = {
  hidden: { y: "120%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 1.4,
      delay: 0.5 + i * 0.12,
      ease,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 1.4 + i * 0.15, ease },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} id="hero" className="relative h-[110vh] w-full overflow-hidden">
      <motion.div
        style={{ scale: imgScale, opacity: imgOpacity }}
        className="absolute inset-0"
      >
        <Image
          src="/portfolio/sofa_3.jpg"
          alt="Интерьер от Евгении Оленич"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full flex flex-col justify-end max-w-[1600px] mx-auto px-6 md:px-16 pb-16 md:pb-28"
      >
        {/* Small label */}
        <div className="overflow-hidden mb-12 md:mb-20">
          <motion.p
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-sans text-[9px] md:text-[10px] font-light tracking-[0.5em] uppercase text-cream/35"
          >
            Евгения Оленич · Дизайн интерьера · Москва
          </motion.p>
        </div>

        {/* Massive typography */}
        <div className="overflow-hidden">
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-[clamp(3.5rem,13vw,13rem)] font-light leading-[0.85] tracking-[-0.04em] text-cream"
          >
            Пространства,
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-[-0.02em]">
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-serif text-[clamp(3.5rem,13vw,13rem)] font-light leading-[0.85] tracking-[-0.04em] text-cream/70 italic"
          >
            в которых
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-[-0.02em]">
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={3}
            className="font-serif text-[clamp(3.5rem,13vw,13rem)] font-light leading-[0.85] tracking-[-0.04em] text-cream"
          >
            живут
          </motion.h1>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mt-16 md:mt-28 pt-6 md:pt-8 border-t border-cream/8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <p className="font-sans text-[11px] md:text-[12px] font-light leading-[1.8] text-cream/30 max-w-[380px]">
            Интерьеры, которые меняют вашу жизнь каждый&nbsp;день —
            и&nbsp;повышают стоимость вашей недвижимости на&nbsp;15–30%
          </p>
          <motion.a
            href="#contact"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="group inline-flex items-center gap-5 font-sans text-[9px] md:text-[10px] font-light tracking-[0.4em] uppercase text-cream/30 hover:text-cream/70 transition-colors duration-700"
          >
            <span>Обсудить проект</span>
            <span className="block w-10 h-[0.5px] bg-cream/15 group-hover:w-16 transition-all duration-1000 ease-out" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
