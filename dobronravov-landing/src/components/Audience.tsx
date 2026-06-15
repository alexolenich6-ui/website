"use client";

import AnimateIn from "./AnimateIn";

// Секция 6 — Для кого / не для кого (фильтр).
// Притягивает готовых к длительной работе, мягко отсеивает ждущих «чуда».
export default function Audience() {
  return (
    <section
      id="audience"
      className="relative bg-deep px-6 md:px-16 lg:px-24 py-32 md:py-52 overflow-hidden"
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
              Для каждого, у кого{" "}
              <span className="italic text-gold">душа не на месте</span>
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="font-serif font-light text-[clamp(1.5rem,3.5vw,2.6rem)] leading-[1.35] tracking-[-0.02em] text-paper/85 max-w-[820px]">
            Если вы живёте не своей жизнью. Если запутались и не знаете,
            куда идти. Если внутри — тревога, пустота или боль. Если вам
            просто нужно, чтобы кто-то выслушал, — приходите.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
