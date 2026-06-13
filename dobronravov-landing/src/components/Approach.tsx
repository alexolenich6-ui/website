"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";
import CtaButton from "./CtaButton";
import { asset } from "@/lib/asset";

// Секция 5 — Как я работаю. Завершается повтором CTA.
const points = [
  {
    n: "01",
    title: "Разговор с собой",
    body: "Сессия — это не «разбор полётов». Это возможность по-настоящему поговорить с собой.",
  },
  {
    n: "02",
    title: "До корня, не по поверхности",
    body: "Я работаю не быстрыми приёмами, а в длительной терапии — чтобы пройти к корню: убеждения, паттерны, то, что под симптомом.",
  },
  {
    n: "03",
    title: "Чтобы справляться самому",
    body: "Моя цель — не сделать тебя зависимым от терапии, а научить справляться самому.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative bg-deep px-6 md:px-16 lg:px-24 py-32 md:py-52 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          05 / Как я работаю
        </span>
      </div>

      <div className="max-w-[1680px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
            <p className="eyebrow col-span-12 md:col-span-2">Как я работаю</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.2rem,6vw,5.25rem)] leading-[0.98] tracking-[-0.03em] text-paper">
              Не починить, <span className="italic text-gold">а пройти</span>.
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-12 gap-8 md:gap-16 items-stretch">
          {/* In-session portrait */}
          <AnimateIn className="col-span-12 lg:col-span-5">
            <div className="relative h-full min-h-[360px] aspect-[4/5] lg:aspect-auto w-full overflow-hidden bg-ink">
              <Image
                src={asset("/portrait/approach.jpg")}
                alt="Давид Добронравов на сессии"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </AnimateIn>

          {/* Points */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center divide-y divide-paper/[0.1]">
            {points.map((p, i) => (
              <AnimateIn key={p.n} delay={i * 0.1} className="py-8 first:pt-0 last:pb-0">
                <div className="flex items-baseline gap-5">
                  <span className="font-serif font-light text-[clamp(1.4rem,2.2vw,2rem)] text-gold/70 shrink-0">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="mb-3 font-serif font-light text-[clamp(1.3rem,2vw,1.8rem)] leading-[1.2] text-paper">
                      {p.title}
                    </h3>
                    <p className="font-sans text-[14px] font-light leading-[1.85] text-paper/60 max-w-[460px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={0.2}>
          <div className="mt-16 md:mt-24 flex justify-center">
            <CtaButton />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
