"use client";

import AnimateIn from "./AnimateIn";
import CtaButton from "./CtaButton";

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
          <div className="grid grid-cols-12 gap-4 mb-16 md:mb-28">
            <p className="eyebrow col-span-12 md:col-span-2">Как я работаю</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.2rem,6vw,5.25rem)] leading-[0.98] tracking-[-0.03em] text-paper">
              Не починить, <span className="italic text-gold">а пройти</span>.
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/[0.08] border border-paper/[0.08]">
          {points.map((p, i) => (
            <AnimateIn
              key={p.n}
              delay={i * 0.1}
              className="bg-deep p-8 md:p-12"
            >
              <span className="font-serif font-light text-[clamp(1.6rem,2.4vw,2.2rem)] text-gold/70">
                {p.n}
              </span>
              <h3 className="mt-5 mb-5 font-serif font-light text-[clamp(1.3rem,2vw,1.7rem)] leading-[1.2] text-paper">
                {p.title}
              </h3>
              <p className="font-sans text-[14px] font-light leading-[1.85] text-paper/60">
                {p.body}
              </p>
            </AnimateIn>
          ))}
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
