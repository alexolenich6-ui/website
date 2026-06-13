"use client";

import AnimateIn from "./AnimateIn";

// Секция 6 — Для кого / не для кого (фильтр).
// Притягивает готовых к длительной работе, мягко отсеивает ждущих «чуда».
export default function Audience() {
  return (
    <section
      id="audience"
      className="relative bg-ink px-6 md:px-16 lg:px-24 py-32 md:py-52 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          06 / Для кого
        </span>
      </div>

      <div className="max-w-[1240px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
            <p className="eyebrow col-span-12 md:col-span-2">Для кого</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.2rem,6vw,5.25rem)] leading-[0.98] tracking-[-0.03em] text-paper">
              С кем у нас <span className="italic text-gold">сложится</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <AnimateIn>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-[1.6rem] text-gold leading-none">
                +
              </span>
            <p className="eyebrow !text-gold/70">Со мной стоит работать</p>
          </div>
          <p className="font-serif font-light text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.3] tracking-[-0.02em] text-paper">
            Если ты дошёл до точки, где дальше так нельзя — и&nbsp;готов
            не&nbsp;на&nbsp;чудо за&nbsp;один раз, а&nbsp;на&nbsp;настоящую
            работу над собой.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-serif text-[1.6rem] text-paper/35 leading-none">
              —
            </span>
            <p className="eyebrow">Возможно, я не твой специалист</p>
          </div>
          <p className="font-serif font-light text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.3] tracking-[-0.02em] text-paper/55">
            Если ты ищешь быстрый совет или «волшебную таблетку»
            за&nbsp;одну встречу. Это честно — так мы&nbsp;оба сэкономим
            время.
          </p>
        </AnimateIn>
        </div>
      </div>
    </section>
  );
}
