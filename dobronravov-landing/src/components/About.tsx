"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { asset } from "@/lib/asset";

// Секция 4 — Обо мне (главный блок доверия).
// Путь как источник глубины. Священство — второй слой, без проповеди (§7).
const credentials = [
  "Клинический психолог — Кировский ГМУ",
  "Аддиктолог — Прикладная аддиктология и реабилитация зависимых",
  "Опыт психиатрической клиники «Медси», Москва (2022–2025)",
  "Руководитель постлечебной программы реабилитационного центра (с 2018)",
  "Методы: КПТ, ЛОРП, краткосрочная динамическая и экзистенциальная терапия, кризисное консультирование",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-ink px-6 md:px-16 lg:px-24 py-32 md:py-52 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          04 / Обо мне
        </span>
      </div>

      <div className="max-w-[1680px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-16 md:mb-28">
            <p className="eyebrow col-span-12 md:col-span-2">Обо мне</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.2rem,6vw,5.25rem)] leading-[0.98] tracking-[-0.03em] text-paper">
              Я был там, где <span className="italic text-gold">темно</span>.
              <br className="hidden md:block" /> И не отворачиваюсь.
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <AnimateIn className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-deep">
              <Image
                src={asset("/portrait/about.jpg")}
                alt="Давид Добронравов — клинический психолог"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/80">
                  Давид Добронравов
                </span>
                <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/50">
                  Москва
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Bio */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <AnimateIn delay={0.1}>
              <p className="eyebrow mb-8">Путь</p>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <p className="font-sans text-[15px] md:text-[16px] font-light leading-[1.95] text-paper/70 mb-7">
                Я пришёл в&nbsp;психологию не&nbsp;как в&nbsp;профессию. Сначала
                было служение — годы рядом с&nbsp;людьми в&nbsp;самом тяжёлом:
                горе, утрата, зависимость, болезнь, вопросы, на&nbsp;которые
                нет простых ответов.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="font-sans text-[15px] md:text-[16px] font-light leading-[1.95] text-paper/70 mb-7">
                Потом — клиническая психология и&nbsp;психиатрическая клиника,
                где я&nbsp;научился различать, где кризис, а&nbsp;где болезнь,
                и&nbsp;где нужен психиатр.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <p className="font-sans text-[15px] md:text-[16px] font-light leading-[1.95] text-paper/70 mb-12">
                Так появился специалист, которого не&nbsp;напугать симптомом
                и&nbsp;не&nbsp;шокировать признанием. Я&nbsp;был там, где темно.
                И&nbsp;не&nbsp;отворачиваюсь.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <ul className="space-y-3 border-t border-paper/[0.08] pt-10">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 font-sans text-[13px] md:text-[14px] font-light leading-[1.7] text-paper/60"
                  >
                    <span className="mt-[9px] block h-px w-3 shrink-0 bg-gold/60" />
                    {c}
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>

        {/* Second layer — служение как биография и глубина, без проповеди. */}
        <div className="grid grid-cols-12 gap-8 md:gap-16 mt-20 md:mt-36 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <AnimateIn>
              <p className="eyebrow mb-8">Откуда глубина</p>
              <p className="font-serif font-light text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.3] tracking-[-0.02em] text-paper/85 max-w-[560px]">
                Четырнадцать лет служения — рядом с&nbsp;людьми в&nbsp;горе,
                утрате, зависимости. Это не&nbsp;строчка в&nbsp;резюме,
                а&nbsp;<span className="italic text-gold">объёмное зрение</span>,
                которое не&nbsp;купить за&nbsp;партой.
              </p>
            </AnimateIn>
          </div>

          <AnimateIn className="col-span-12 lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-deep">
              <Image
                src={asset("/portrait/path.jpg")}
                alt="Служение — годы рядом с людьми в самом тяжёлом"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
