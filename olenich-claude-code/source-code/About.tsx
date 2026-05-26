"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function About() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" className="py-40 md:py-60">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-24 md:mb-40">
            <p className="col-span-12 md:col-span-2 font-sans text-[9px] font-light tracking-[0.6em] uppercase text-shadow/30">
              Обо мне
            </p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.03em] text-espresso">
              Евгения <span className="italic text-shadow/60">Оленич</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Large portrait */}
          <AnimateIn className="col-span-12 lg:col-span-6">
            <div ref={imgRef} className="relative aspect-[3/4] overflow-hidden">
              <motion.div style={{ y: imgY }} className="absolute inset-[-12%] w-[124%] h-[124%]">
                <Image
                  src="/about/evgenia-portrait.png"
                  alt="Евгения Оленич"
                  fill
                  className="object-cover object-top grayscale"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </AnimateIn>

          {/* Bio text */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            <AnimateIn delay={0.15}>
              <p className="font-sans text-[14px] font-light leading-[2] text-shadow/50 mb-8">
                Я начинала как юрист. Одиннадцать лет в юриспруденции
                дали мне системность, внимание к деталям и понимание
                того, что каждый документ — это защита.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="font-sans text-[14px] font-light leading-[2] text-shadow/50 mb-8">
                Потом получила два образования в психологии. И только
                после этого пришла в дизайн. Этот путь дал мне то,
                чего нет у большинства: умение слышать людей и создавать
                пространства, которые работают на уровне ощущений.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <p className="font-sans text-[14px] font-light leading-[2] text-shadow/50 mb-16">
                За 20+ лет — более 150 проектов. Каждый — не набор
                красивых картинок, а система, которая делает жизнь
                удобнее и повышает стоимость недвижимости.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="border-t border-espresso/6 pt-12 flex gap-16 md:gap-20">
                {[
                  { n: "20+", l: "лет" },
                  { n: "150+", l: "проектов" },
                  { n: "3", l: "образования" },
                ].map((s) => (
                  <div key={s.l}>
                    <span className="block font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light text-espresso leading-none">
                      {s.n}
                    </span>
                    <p className="mt-3 font-sans text-[9px] font-light tracking-[0.4em] uppercase text-shadow/25">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.35}>
              <a
                href="https://instagram.com/olenich.interior"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 inline-flex items-center gap-4 font-sans text-[9px] font-light tracking-[0.4em] uppercase text-shadow/25 hover:text-espresso transition-colors duration-700"
              >
                <span>@olenich.interior</span>
                <span className="w-6 h-[0.5px] bg-espresso/10 group-hover:w-10 transition-all duration-700" />
              </a>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
