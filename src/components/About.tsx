"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { CONTACTS } from "@/lib/contacts";

const stats = [
  { n: "20+", l: "лет" },
  { n: "150+", l: "проектов" },
  { n: "3", l: "образования" },
];

const credentials = [
  "Юридическое образование · 11 лет практики",
  "Психология · два высших",
  "Собственный шоурум итальянской мебели в прошлом",
  "Прямые контракты с фабриками Италии — 15 лет",
];

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section
      id="about"
      className="relative py-32 md:py-56 px-6 md:px-16 bg-veil overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-espresso/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/35">
          07 / Обо мне
        </span>
      </div>

      <div className="max-w-[1680px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-20 md:mb-32">
            <p className="eyebrow col-span-12 md:col-span-2">Обо мне</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.4rem,6.2vw,5.75rem)] leading-[0.96] tracking-[-0.03em] text-espresso">
              Евгения{" "}
              <span className="italic text-espresso/55">Оленич</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-12 gap-8 md:gap-16">
          {/* Portrait */}
          <AnimateIn className="col-span-12 lg:col-span-6">
            <div
              ref={imgRef}
              className="relative aspect-[3/4] overflow-hidden bg-silk"
            >
              <motion.div
                style={{ y: imgY }}
                className="absolute inset-[-14%] w-[128%] h-[128%] will-change-transform"
              >
                <Image
                  src="/about/evgenia-portrait.png"
                  alt="Евгения Оленич — дизайнер интерьера"
                  fill
                  className="object-cover object-top grayscale"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              </motion.div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-cream/80">
                  Евгения Оленич
                </span>
                <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-cream/50">
                  Москва
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Bio */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            <AnimateIn delay={0.15}>
              <p className="eyebrow mb-8">Биография</p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="font-sans text-[14px] md:text-[15px] font-light leading-[1.9] text-espresso/70 mb-7">
                Я начинала как юрист. Одиннадцать лет в&nbsp;юриспруденции
                дали мне системность, внимание к&nbsp;деталям и&nbsp;понимание
                того, что каждый документ — это защита.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <p className="font-sans text-[14px] md:text-[15px] font-light leading-[1.9] text-espresso/70 mb-7">
                Потом получила два образования в&nbsp;психологии. И&nbsp;только
                после этого пришла в&nbsp;дизайн. Этот путь дал мне то,
                чего нет у&nbsp;большинства: умение слышать людей
                и&nbsp;создавать пространства, которые работают на&nbsp;уровне
                ощущений.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p className="font-sans text-[14px] md:text-[15px] font-light leading-[1.9] text-espresso/70 mb-12">
                За 20+ лет — более 150 проектов. Каждый — не&nbsp;набор
                красивых картинок, а&nbsp;система, которая делает жизнь
                удобнее и&nbsp;повышает стоимость недвижимости.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.35}>
              <ul className="space-y-2.5 mb-12">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 font-sans text-[12px] md:text-[13px] font-light leading-[1.75] text-espresso/60"
                  >
                    <span className="mt-[7px] block h-px w-3 shrink-0 bg-espresso/40" />
                    {c}
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <div className="border-t border-espresso/[0.08] pt-10 grid grid-cols-3 gap-3 md:gap-8">
                {stats.map((s) => (
                  <div key={s.l}>
                    <span className="block font-serif font-light leading-none text-[clamp(1.75rem,3.2vw,2.8rem)] tracking-[-0.02em] text-espresso">
                      {s.n}
                    </span>
                    <p className="mt-3 font-sans text-[9px] md:text-[10px] font-light tracking-[0.3em] md:tracking-[0.4em] uppercase text-espresso/45">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.45}>
              <a
                href={CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 inline-flex items-center gap-4 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso hover:text-espresso/60 transition-colors duration-500"
              >
                <span>{CONTACTS.instagramHandle}</span>
                <span className="block h-px w-8 bg-espresso/40 group-hover:w-14 transition-all duration-700 ease-out" />
              </a>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
