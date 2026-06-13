"use client";

import AnimateIn from "./AnimateIn";

// Секция 7 — Истории и отзывы.
// Подача — анонимные текстовые цитаты в журнальном стиле (§7):
// без имён, аватаров и телефонов; медицинские формулировки («лечение»,
// «схема лечения», «наркология») не выносим — Давид психолог, не врач.
const pullQuotes = [
  "Появилось желание жить, а не существовать.",
  "«Самый Добрый Доктор» — так он записан у меня в телефоне.",
  "Зеркало, в которое можно посмотреть и увидеть себя настоящего.",
];

const cards = [
  "Разговоры безоценочно, но с присутствием. Он видит и считывает события прямо в моменте — и его фразы всплывают в памяти в нужный момент.",
  "Деликатный подход помог заново встать на ноги после сильнейших кризисов и увидеть корень проблемы. Сейчас чувствую себя гораздо сильнее.",
  "Начал замечать свои убеждения и паттерны — и переписывать опыт на новое. Сессия как срез: помогает ясно понять, что со мной происходит.",
  "Год мы бились с моей зависимостью — и он меня вытащил. Тонкий слушатель, понимает боль глубже многих.",
  "Человек с огромным жизненным опытом и добрым сердцем — для тех, кто запутался и ищет точку опоры.",
  "Научился сам справляться со стрессом и вовремя брать себя в руки. Грамотно, человечно, без давления.",
];

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
