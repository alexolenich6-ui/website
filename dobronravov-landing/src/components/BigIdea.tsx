"use client";

import AnimateIn from "./AnimateIn";

// Секция 3 — Большая идея. Ключевой момент переосмысления.
// Переводит тревогу из проблемы в сигнал — открывает путь к надежде.
export default function BigIdea() {
  return (
    <section
      id="idea"
      className="relative bg-deep px-6 md:px-16 lg:px-24 py-28 md:py-44 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          03 / Большая идея
        </span>
      </div>

      <div className="max-w-[1100px] mx-auto">
        <AnimateIn>
          <p className="eyebrow mb-12 md:mb-16">Если коротко</p>
        </AnimateIn>

        <div className="space-y-10 md:space-y-14">
          <AnimateIn>
            <p className="font-serif font-light text-[clamp(2rem,5.5vw,4.6rem)] leading-[1.12] tracking-[-0.03em] text-paper">
              Тревога, зависимость, апатия —<br className="hidden md:block" />{" "}
              не&nbsp;приговор.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <p className="font-serif font-light text-[clamp(2rem,5.5vw,4.6rem)] leading-[1.12] tracking-[-0.03em] text-paper/50">
              Это{" "}
              <span className="italic text-gold text-paper/100">сигнал</span>:
              ты потерял связь с&nbsp;собой.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.16}>
            <div className="flex items-start gap-6 pt-6 md:pt-10 border-t border-paper/[0.08]">
              <span className="mt-1 hidden md:block h-px w-14 shrink-0 bg-gold/40 mt-4" />
              <p className="font-sans text-[15px] md:text-[18px] font-light leading-[1.9] text-paper/60 max-w-[600px]">
                Мы&nbsp;идём к&nbsp;корню — и&nbsp;ты снова становишься
                автором своей жизни, а&nbsp;не&nbsp;живёшь на&nbsp;автомате.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
