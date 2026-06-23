"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";
import CtaButton from "./CtaButton";
import { asset } from "@/lib/asset";

const points = [
  {
    n: "01",
    title: "Вы расскажете о своей жизни",
    body: "Столько, сколько захотите и что готовы будете открыть.",
  },
  {
    n: "02",
    title: "Наметим путь вместе",
    body: "Когда будете готовы, мы вместе наметим, куда идти и что менять. Я поделюсь своей точкой зрения — как я вижу ситуацию.",
  },
  {
    n: "03",
    title: "Объясню, зачем и как",
    body: "Прежде чем что-то предложить, я объясню, зачем это и как работает. Никаких шагов вслепую.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative bg-ink px-6 md:px-16 lg:px-24 py-28 md:py-44 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          06 / Как я работаю
        </span>
      </div>

      <div className="max-w-[1680px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
            <p className="eyebrow col-span-12 md:col-span-2">Как я работаю</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.2rem,6vw,5.25rem)] leading-[0.98] tracking-[-0.03em] text-paper">
              Встреча-<span className="italic text-gold">знакомство</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-12 gap-8 md:gap-16 items-stretch">
          <AnimateIn className="col-span-12 lg:col-span-5">
            <div className="relative h-full min-h-[360px] aspect-[4/5] lg:aspect-auto w-full overflow-hidden bg-ink">
              <Image
                src={asset("/portrait/approach.jpg")}
                alt="Давид Добронравов"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </AnimateIn>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center divide-y divide-paper/[0.1]">
            {points.map((p, i) => (
              <AnimateIn key={p.n} delay={i * 0.1} className="py-8 first:pt-0 last:pb-0">
                <div className="flex items-baseline gap-5">
                  <span className="font-serif font-light text-[clamp(1.4rem,2.2vw,2rem)] text-gold/60 shrink-0">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="mb-3 font-serif font-light text-[clamp(1.2rem,1.8vw,1.65rem)] leading-[1.2] text-paper">
                      {p.title}
                    </h3>
                    <p className="font-sans text-[14px] font-light leading-[1.85] text-paper/55 max-w-[440px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}

            {/* First meeting callout */}
            <AnimateIn delay={0.3} className="pt-10">
              <div className="border border-paper/[0.1] rounded-sm p-7 md:p-8 bg-paper/[0.03]">
                <p className="eyebrow mb-4 !text-gold/60">Начнём с разговора</p>
                <p className="font-sans text-[14px] font-light leading-[1.85] text-paper/60 mb-7">
                  Первая встреча — бесплатная. Вы расскажете о&nbsp;своей
                  жизни столько, сколько захотите. Я&nbsp;поделюсь
                  своей точкой зрения. Вместе поймём, есть ли смысл
                  работать дальше.
                </p>
                <CtaButton variant="ghost" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
