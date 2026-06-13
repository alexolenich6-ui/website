"use client";

import AnimateIn from "./AnimateIn";
import CtaButton from "./CtaButton";
import LighthouseMark from "./LighthouseMark";

// Секция 9 — Финальный CTA.
export default function FinalCta() {
  return (
    <section
      id="contact"
      className="relative bg-ink px-6 md:px-16 lg:px-24 py-36 md:py-60 overflow-hidden"
    >
      {/* Lighthouse light — мягкое свечение снизу. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh] bg-[radial-gradient(closest-side,rgba(165,138,88,0.14),transparent)]"
        aria-hidden
      />

      <div className="relative max-w-[1100px] mx-auto text-center flex flex-col items-center">
        <AnimateIn>
          <LighthouseMark className="w-12 h-12 text-gold/70 mx-auto mb-12" />
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <h2 className="font-serif font-light text-[clamp(2.4rem,7vw,6rem)] leading-[1.02] tracking-[-0.03em] text-paper">
            Самый трудный шаг — <span className="italic text-gold">первый</span>.
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <p className="mt-10 font-sans text-[15px] md:text-[17px] font-light leading-[1.9] text-paper/65 max-w-[620px]">
            Но его не&nbsp;обязательно делать в&nbsp;одиночку. Начни
            с&nbsp;разговора — это бесплатно и&nbsp;ни&nbsp;к&nbsp;чему
            не&nbsp;обязывает. Просто расскажи, что тебя беспокоит.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-14">
            <CtaButton />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
