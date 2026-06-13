"use client";

import AnimateIn from "./AnimateIn";

// Секция 3 — Большая идея (переобрамление). Сердце позиционирования.
export default function BigIdea() {
  return (
    <section
      id="idea"
      className="relative bg-deep px-6 md:px-16 lg:px-24 py-32 md:py-52 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          03 / Большая идея
        </span>
      </div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-y-10 md:gap-16">
        <AnimateIn className="col-span-12 md:col-span-3" direction="none">
          <p className="eyebrow md:[writing-mode:vertical-rl] md:rotate-180 md:h-full">
            Переобрамление
          </p>
        </AnimateIn>

        <div className="col-span-12 md:col-span-9 space-y-10 md:space-y-14">
          <AnimateIn>
            <p className="font-serif font-light text-[clamp(1.9rem,4.8vw,4rem)] leading-[1.16] tracking-[-0.025em] text-paper">
              Тревога, зависимость, апатия — не&nbsp;приговор. Это{" "}
              <span className="italic text-gold">сигнал</span>: ты потерял
              связь с&nbsp;собой.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.12}>
            <div className="flex items-start gap-5">
              <span className="mt-4 hidden md:block h-px w-16 shrink-0 bg-gold/40" />
              <p className="font-sans text-[15px] md:text-[17px] font-light leading-[1.95] text-paper/65 max-w-[640px]">
                Я не&nbsp;«чиню» симптом. Мы&nbsp;идём глубже — к&nbsp;корню —
                и&nbsp;возвращаем тебе авторство собственной жизни.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
