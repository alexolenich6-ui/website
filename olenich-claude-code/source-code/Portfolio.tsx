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
    images: ["/portfolio/sofa_1.jpg", "/portfolio/sofa_2.jpg", "/portfolio/sofa_3.jpg"],
  },
  {
    title: "Новогорск",
    category: "Загородный дом",
    area: "220 м²",
    images: ["/portfolio/novogorsk_1.jpg", "/portfolio/novogorsk_2.jpg"],
  },
  {
    title: "ЖК Лица",
    category: "Квартира",
    area: "62 м²",
    images: ["/portfolio/lica_1.jpg", "/portfolio/lica_2.jpg"],
  },
  {
    title: "Офис ВТБ Арена",
    category: "Коммерческий",
    area: "120 м²",
    images: ["/portfolio/vtb_1.jpg"],
  },
  {
    title: "Фитнесс Harmony",
    category: "Коммерческий",
    area: "350 м²",
    images: ["/portfolio/harmony_1.jpg", "/portfolio/harmony_2.jpg"],
  },
  {
    title: "Ак. Пилюгина",
    category: "Квартира",
    area: "110 м²",
    images: ["/portfolio/pilyugina_1.jpg", "/portfolio/pilyugina_2.jpg"],
  },
];

function ParallaxImg({
  src,
  alt,
  className,
  aspect,
}: {
  src: string;
  alt: string;
  className?: string;
  aspect: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.03]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${aspect} ${className || ""}`}>
      <motion.div style={{ y, scale }} className="absolute inset-[-10%] w-[120%] h-[120%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-40 md:py-60 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-24 md:mb-40">
            <p className="col-span-12 md:col-span-2 font-sans text-[9px] font-light tracking-[0.6em] uppercase text-shadow/30">
              Портфолио
            </p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.03em] text-espresso">
              Избранные <span className="italic text-shadow/60">проекты</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Hero image — full width */}
        <AnimateIn>
          <div className="mb-4">
            <ParallaxImg
              src={projects[0].images[0]}
              alt={projects[0].title}
              aspect="aspect-[21/9]"
            />
            <div className="flex justify-between items-end mt-6 mb-20 md:mb-32">
              <div>
                <h3 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-light text-espresso">
                  {projects[0].title}
                </h3>
                <p className="mt-1 font-sans text-[10px] font-light tracking-[0.3em] uppercase text-shadow/30">
                  {projects[0].category} · {projects[0].area}
                </p>
              </div>
              <span className="font-sans text-[10px] font-light tracking-[0.2em] text-oat/40">
                01 / 06
              </span>
            </div>
          </div>
        </AnimateIn>

        {/* Row 2: asymmetric pair */}
        <div className="grid grid-cols-12 gap-4 mb-20 md:mb-32">
          <AnimateIn className="col-span-12 md:col-span-5">
            <ParallaxImg
              src={projects[1].images[0]}
              alt={projects[1].title}
              aspect="aspect-[3/4]"
            />
            <h3 className="mt-5 font-serif text-lg font-light text-espresso">
              {projects[1].title}
            </h3>
            <p className="mt-1 font-sans text-[10px] font-light tracking-[0.3em] uppercase text-shadow/30">
              {projects[1].category} · {projects[1].area}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15} className="col-span-12 md:col-span-6 md:col-start-7 md:pt-32">
            <ParallaxImg
              src={projects[2].images[0]}
              alt={projects[2].title}
              aspect="aspect-[4/3]"
            />
            <h3 className="mt-5 font-serif text-lg font-light text-espresso">
              {projects[2].title}
            </h3>
            <p className="mt-1 font-sans text-[10px] font-light tracking-[0.3em] uppercase text-shadow/30">
              {projects[2].category} · {projects[2].area}
            </p>
          </AnimateIn>
        </div>

        {/* Row 3: wide right */}
        <div className="grid grid-cols-12 gap-4 mb-20 md:mb-32">
          <AnimateIn className="col-span-12 md:col-span-4">
            <ParallaxImg
              src={projects[3].images[0]}
              alt={projects[3].title}
              aspect="aspect-[3/4]"
            />
            <h3 className="mt-5 font-serif text-lg font-light text-espresso">
              {projects[3].title}
            </h3>
            <p className="mt-1 font-sans text-[10px] font-light tracking-[0.3em] uppercase text-shadow/30">
              {projects[3].category} · {projects[3].area}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1} className="col-span-12 md:col-span-7 md:col-start-6">
            <ParallaxImg
              src={projects[4].images[0]}
              alt={projects[4].title}
              aspect="aspect-[16/9]"
            />
            <h3 className="mt-5 font-serif text-lg font-light text-espresso">
              {projects[4].title}
            </h3>
            <p className="mt-1 font-sans text-[10px] font-light tracking-[0.3em] uppercase text-shadow/30">
              {projects[4].category} · {projects[4].area}
            </p>
          </AnimateIn>
        </div>

        {/* Row 4: single centered */}
        <AnimateIn>
          <div className="max-w-[900px] mx-auto">
            <ParallaxImg
              src={projects[5].images[0]}
              alt={projects[5].title}
              aspect="aspect-[16/10]"
            />
            <div className="flex justify-between items-end mt-5">
              <div>
                <h3 className="font-serif text-lg font-light text-espresso">
                  {projects[5].title}
                </h3>
                <p className="mt-1 font-sans text-[10px] font-light tracking-[0.3em] uppercase text-shadow/30">
                  {projects[5].category} · {projects[5].area}
                </p>
              </div>
              <span className="font-sans text-[10px] font-light tracking-[0.2em] text-oat/40">
                06 / 06
              </span>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
