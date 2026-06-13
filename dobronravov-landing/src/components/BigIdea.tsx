"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { asset } from "@/lib/asset";

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

      <div className="max-w-[1680px] mx-auto grid grid-cols-12 gap-y-12 md:gap-16 items-center">
        <div className="col-span-12 lg:col-span-7 space-y-10 md:space-y-14">
          <AnimateIn>
            <p className="eyebrow mb-8">Переобрамление</p>
            <p className="font-serif font-light text-[clamp(1.9rem,4.4vw,3.8rem)] leading-[1.16] tracking-[-0.025em] text-paper">
              Тревога, зависимость, апатия — не&nbsp;приговор. Это{" "}
              <span className="italic text-gold">сигнал</span>: ты потерял
              связь с&nbsp;собой.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.12}>
            <div className="flex items-start gap-5">
              <span className="mt-4 hidden md:block h-px w-16 shrink-0 bg-gold/40" />
              <p className="font-sans text-[15px] md:text-[17px] font-light leading-[1.95] text-paper/65 max-w-[560px]">
                Я не&nbsp;латаю симптом. Мы&nbsp;идём к&nbsp;корню — и&nbsp;ты
                снова становишься автором своей жизни, а&nbsp;не&nbsp;пассажиром.
              </p>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.15} className="col-span-12 lg:col-span-4 lg:col-start-9">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink">
            <Image
              src={asset("/portrait/band.jpg")}
              alt="Давид Добронравов"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
