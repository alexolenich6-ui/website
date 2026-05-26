"use client";

import AnimateIn from "./AnimateIn";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
        {/* Left — brand statement */}
        <div className="lg:col-span-5">
          <AnimateIn>
            <p className="font-sans text-[11px] font-light tracking-[0.3em] uppercase text-shadow mb-8">
              О подходе
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] tracking-[-0.01em] text-espresso">
              Евгения
              <br />
              <span className="italic">Оленич</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-8 font-sans text-[15px] font-light leading-[1.8] text-shadow max-w-[420px]">
              Я не просто проектирую интерьеры — я создаю пространства, которые
              работают на вас. Каждый проект начинается с понимания того, как вы
              живёте, что чувствуете, и как ваш дом может стать лучшей версией
              вашей жизни.
            </p>
          </AnimateIn>
        </div>

        {/* Right — editorial grid with stats */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-[1px] bg-oat/30">
            {/* Stat 1 */}
            <AnimateIn delay={0.1} className="bg-veil p-8 md:p-12">
              <p className="font-sans text-[13px] font-light leading-[1.7] text-shadow mb-4">
                лет в проектировании пространств и создании интерьеров, которые
                ценятся десятилетиями
              </p>
              <span className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-light text-espresso">
                20+
              </span>
            </AnimateIn>

            {/* Stat 2 */}
            <AnimateIn delay={0.2} className="bg-veil p-8 md:p-12">
              <p className="font-sans text-[13px] font-light leading-[1.7] text-shadow mb-4">
                завершённых проектов — квартиры, дома, коммерческие пространства
              </p>
              <span className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-light text-espresso">
                150+
              </span>
            </AnimateIn>

            {/* Image cell */}
            <AnimateIn delay={0.3} className="bg-veil relative aspect-[4/3] overflow-hidden">
              <Image
                src="/portfolio/novogorsk_1.jpg"
                alt="Проект Новогорск"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 350px"
              />
            </AnimateIn>

            {/* Quote cell */}
            <AnimateIn delay={0.4} className="bg-espresso p-8 md:p-12 flex flex-col justify-between">
              <p className="font-serif text-[clamp(1rem,1.8vw,1.3rem)] font-light leading-[1.5] text-silk italic">
                &laquo;Дизайн — это не то, что вы видите. Это то, как пространство
                живёт вместе с вами&raquo;
              </p>
              <a
                href="#about"
                className="mt-6 font-sans text-[11px] font-light tracking-[0.2em] uppercase text-oat hover:text-cream transition-colors duration-300 inline-flex items-center gap-2"
              >
                Подробнее
                <span>&rarr;</span>
              </a>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
