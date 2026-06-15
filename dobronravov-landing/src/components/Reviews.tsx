"use client";

import AnimateIn from "./AnimateIn";

// Секция 7 — Истории и отзывы.
// Реальные слова клиентов со скринов: живой голос сохранён, лишь лёгкая правка.
// Обезличено (без имён/аватаров/телефонов). Медицинские формулировки
// («лечение», «схема лечения», «наркология») сняты — Давид психолог, не врач.
const pullQuotes = [
  "Появилось желание жить, а не существовать.",
  "«Самый Добрый Доктор» — так он записан у меня в телефоне.",
];

const cards = [
  "Сложно оценить работу психолога — её будто и не видно сразу. Но с Давидом по-другому. Он считывает то, что происходит, прямо в моменте. Разговоры — безоценочно, но с присутствием. А потом его фразы сами всплывают в памяти в нужную минуту.",
  "Год мы бились с моей тьмой-зависимостью — и он вытащил меня из пучины, где я был овощем, и поднял до трона здравомыслия. Слушатель тонкий, боль чувствует глубже многих.",
  "Пришла с алкогольной зависимостью. Благодаря нашей работе я уже два года живу трезвой. Жизнь изменилась в лучшую сторону. Даже очень. Каждый день просыпаюсь с благодарностью, что избавилась от этого ада. Давид записан у меня в телефоне как «Самый Добрый Доктор».",
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative bg-ink px-6 md:px-16 lg:px-24 py-32 md:py-52 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          08 / Отзывы
        </span>
      </div>

      <div className="max-w-[1240px] mx-auto">
        <AnimateIn>
          <p className="eyebrow mb-16 md:mb-24">Истории и отзывы</p>
        </AnimateIn>

        {/* Large pull-quotes */}
        <div className="space-y-16 md:space-y-28">
          {pullQuotes.map((q, i) => (
            <AnimateIn key={q} delay={i * 0.08}>
              <figure
                className={`max-w-[920px] ${
                  i % 2 === 1 ? "md:ml-auto md:text-right" : ""
                }`}
              >
                <blockquote className="font-serif italic font-light text-[clamp(1.8rem,4.6vw,3.4rem)] leading-[1.22] tracking-[-0.02em] text-paper">
                  {q}
                </blockquote>
                <figcaption className="mt-6 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-gold/60">
                  из переписки
                </figcaption>
              </figure>
            </AnimateIn>
          ))}
        </div>

        {/* Quote grid */}
        <div className="mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/[0.08] border border-paper/[0.08]">
          {cards.map((c, i) => (
            <AnimateIn key={i} delay={(i % 3) * 0.08} className="bg-deep p-8 md:p-10">
              <span className="block font-serif text-[2rem] leading-none text-gold/40 mb-5">
                “
              </span>
              <p className="font-sans text-[14px] md:text-[15px] font-light leading-[1.85] text-paper/75">
                {c}
              </p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.1}>
          <p className="mt-12 font-sans text-[11px] font-light tracking-[0.25em] uppercase text-paper/35">
            Отзывы публикуются обезличенно, с согласия клиентов.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
