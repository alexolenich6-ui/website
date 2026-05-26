"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

const projects = [
  {
    title: "Софа Новочеремушкинская",
    category: "Квартира",
    area: "85 м²",
    image: "/portfolio/sofa_1.jpg",
  },
  {
    title: "Новогорск",
    category: "Загородный дом",
    area: "220 м²",
    image: "/portfolio/novogorsk_1.jpg",
  },
  {
    title: "ЖК Лица",
    category: "Квартира",
    area: "62 м²",
    image: "/portfolio/lica_1.jpg",
  },
  {
    title: "Офис ВТБ Арена",
    category: "Коммерческий",
    area: "120 м²",
    image: "/portfolio/vtb_1.jpg",
  },
  {
    title: "Фитнесс Harmony",
    category: "Коммерческий",
    area: "350 м²",
    image: "/portfolio/harmony_1.jpg",
  },
  {
    title: "Ак. Пилюгина",
    category: "Квартира",
    area: "110 м²",
    image: "/portfolio/pilyugina_1.jpg",
  },
] as const;

interface ProjectMediaProps {
  src: string;
  alt: string;
  aspect: string;
  sizes?: string;
  priority?: boolean;
}

function ProjectMedia({ src, alt, aspect, sizes, priority }: ProjectMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-silk ${aspect}`}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-[filter] duration-1000 group-hover:brightness-105"
          sizes={sizes ?? "(max-width: 768px) 100vw, 60vw"}
          quality={86}
          priority={priority}
        />
      </motion.div>
      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/[0.04] transition-colors duration-700" />
    </div>
  );
}

interface CaptionProps {
  index: string;
  title: string;
  category: string;
  area: string;
  align?: "left" | "right";
}

function Caption({ index, title, category, area, align = "left" }: CaptionProps) {
  return (
    <div
      className={`mt-5 md:mt-6 flex items-end justify-between gap-4 ${
        align === "right" ? "md:flex-row-reverse md:text-right" : ""
      }`}
    >
      <div className={align === "right" ? "md:order-2" : ""}>
        <h3 className="font-serif font-light text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.1] text-espresso tracking-[-0.015em]">
          {title}
        </h3>
        <p className="mt-1.5 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/45">
          {category} · {area}
        </p>
      </div>
      <span
        className={`font-sans text-[10px] font-light tracking-[0.3em] text-espresso/30 shrink-0 ${
          align === "right" ? "md:order-1" : ""
        }`}
      >
        {index}
      </span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-32 md:py-56 px-6 md:px-16 bg-veil overflow-hidden"
    >
      {/* Pagination marker */}
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-espresso/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/35">
          04 / Портфолио
        </span>
      </div>

      <div className="max-w-[1680px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-20 md:mb-36">
            <p className="eyebrow col-span-12 md:col-span-2">Портфолио</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.4rem,6.2vw,5.75rem)] leading-[0.96] tracking-[-0.03em] text-espresso">
              Избранные{" "}
              <span className="italic text-espresso/55">проекты</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Row 1 — full-width hero (21:9) */}
        <AnimateIn>
          <div className="mb-20 md:mb-36">
            <ProjectMedia
              src={projects[0].image}
              alt={projects[0].title}
              aspect="aspect-[16/10] md:aspect-[21/9]"
              sizes="100vw"
              priority
            />
            <Caption
              index="01 / 06"
              title={projects[0].title}
              category={projects[0].category}
              area={projects[0].area}
            />
          </div>
        </AnimateIn>

        {/* Row 2 — asymmetric pair with offset */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-36">
          <AnimateIn className="col-span-12 md:col-span-5">
            <ProjectMedia
              src={projects[1].image}
              alt={projects[1].title}
              aspect="aspect-[3/4]"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <Caption
              index="02 / 06"
              title={projects[1].title}
              category={projects[1].category}
              area={projects[1].area}
            />
          </AnimateIn>
          <AnimateIn
            delay={0.15}
            className="col-span-12 md:col-span-6 md:col-start-7 md:pt-40"
          >
            <ProjectMedia
              src={projects[2].image}
              alt={projects[2].title}
              aspect="aspect-[4/3]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Caption
              index="03 / 06"
              title={projects[2].title}
              category={projects[2].category}
              area={projects[2].area}
              align="right"
            />
          </AnimateIn>
        </div>

        {/* Row 3 — wide+narrow */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-36">
          <AnimateIn className="col-span-12 md:col-span-4 md:pt-32">
            <ProjectMedia
              src={projects[3].image}
              alt={projects[3].title}
              aspect="aspect-[3/4]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <Caption
              index="04 / 06"
              title={projects[3].title}
              category={projects[3].category}
              area={projects[3].area}
            />
          </AnimateIn>
          <AnimateIn
            delay={0.1}
            className="col-span-12 md:col-span-7 md:col-start-6"
          >
            <ProjectMedia
              src={projects[4].image}
              alt={projects[4].title}
              aspect="aspect-[16/10]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <Caption
              index="05 / 06"
              title={projects[4].title}
              category={projects[4].category}
              area={projects[4].area}
              align="right"
            />
          </AnimateIn>
        </div>

        {/* Row 4 — single centered */}
        <AnimateIn>
          <div className="max-w-[1080px] mx-auto">
            <ProjectMedia
              src={projects[5].image}
              alt={projects[5].title}
              aspect="aspect-[16/10]"
              sizes="(max-width: 768px) 100vw, 75vw"
            />
            <Caption
              index="06 / 06"
              title={projects[5].title}
              category={projects[5].category}
              area={projects[5].area}
            />
          </div>
        </AnimateIn>

        {/* CTA footer */}
        <AnimateIn>
          <div className="mt-24 md:mt-40 pt-10 md:pt-14 border-t border-espresso/[0.08] flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <p className="font-serif font-light text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.4] text-espresso/70 max-w-[560px]">
              За 20+ лет — более 150 реализованных проектов
              <span className="italic text-espresso/50">
                {" "}в&nbsp;Москве и&nbsp;области.
              </span>
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso hover:text-oat transition-colors duration-700"
            >
              <span>Обсудить ваш&nbsp;проект</span>
              <span className="block h-px w-10 bg-espresso group-hover:w-16 group-hover:bg-oat transition-all duration-700 ease-out" />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
