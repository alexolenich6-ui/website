"use client";

import AnimateIn from "./AnimateIn";

// Секция 7 — Истории и отзывы.
// Сильные цитаты — крупно, текстом, в стиле журнала (обезличенно, §7).
// Оригинальные скрины — ниже, сеткой; ASSET PENDING (согласия получены).
const pullQuotes = [
  {
    quote: "Появилось желание жить, а не существовать.",
    meta: "из переписки",
  },
  {
    quote: "Разговоры безоценочно, но с присутствием.",
    meta: "из переписки",
  },
  {
    quote: "«Самый Добрый Доктор» — так записал меня клиент в телефоне.",
    meta: "со слов клиента",
  },
];

// 10 реальных отзывов (скрины), согласия получены — §6.
// Подаём обезличенно: скрыть имена, аватары, телефоны.
const reviewSlots = Array.from({ length: 6 });

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative bg-deep px-6 md:px-16 lg:px-24 py-32 md:py-52 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          07 / Истории
        </span>
      </div>

      <div className="max-w-[1240px] mx-auto">
        <AnimateIn>
          <p className="eyebrow mb-16 md:mb-24">Истории и отзывы</p>
        </AnimateIn>

        {/* Pull-quotes */}
        <div className="space-y-16 md:space-y-28">
          {pullQuotes.map((q, i) => (
            <AnimateIn key={q.quote} delay={i * 0.08}>
              <figure
                className={`max-w-[920px] ${
                  i % 2 === 1 ? "md:ml-auto md:text-right" : ""
                }`}
              >
                <blockquote className="font-serif italic font-light text-[clamp(1.8rem,4.6vw,3.4rem)] leading-[1.22] tracking-[-0.02em] text-paper">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-6 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-gold/60">
                  {q.meta}
                </figcaption>
              </figure>
            </AnimateIn>
          ))}
        </div>

        {/* Screenshot grid — ASSET PENDING.
            §6: d9b890c9, 332b322d, 65fb1d06, 7198b877, 86facc8e, 0c4d764c,
            01324055, 4020ec75, 1a47b7f6 — скрины переписок (обезличить).
            ⚠️ 1a47b7f6 и др. со словами «лечение/схема лечения» — не акцентировать,
            оригиналы не редактировать (§7). Положить в public/reviews/, заменить
            .asset-slot на <Image>. См. ASSETS.md */}
        <AnimateIn delay={0.1}>
          <div className="mt-24 md:mt-36 pt-12 border-t border-paper/[0.08]">
            <p className="font-sans text-[11px] font-light tracking-[0.3em] uppercase text-paper/40 mb-10">
              Скриншоты отзывов · согласия получены
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {reviewSlots.map((_, i) => (
                <div
                  key={i}
                  className="asset-slot aspect-[3/4]"
                  data-label="Отзыв · скрин"
                />
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
