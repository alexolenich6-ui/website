"use client";

import AnimateIn from "./AnimateIn";

// Секция 4 — Кейсы. Реальные истории клиентов (обезличенно, с согласия).
const cases = [
  {
    name: "Сергей, 41 год",
    story:
      "Пил с 14 до 38 лет. Боялся, что без алкоголя жизнь станет серой и безрадостной. Сомневался, что справится. Работали долго: разбирали убеждения, привычки, страхи.",
    result:
      "«Это лучшее, что я сделал для себя и своей семьи.» Три года трезвости.",
  },
  {
    name: "Женщина, 34 года",
    story:
      "Алкогольная зависимость. Стыд, вина, ощущение тупика. Разбирались не только с зависимостью, но и с тем, что за ней стояло — какие эмоции она пыталась заглушить.",
    result:
      "Два года трезвости. В её телефоне я записан как «Самый Добрый Доктор».",
  },
  {
    name: "Мужчина, 45 лет",
    story:
      "7 кодировок. Бесчисленные клиники. После каждого срыва: «Всё, это последний». Пришёл с чувством, что безнадёжен. Работали не с силой воли, а с тем, что стояло за зависимостью: напряжение, неумение сказать «нет», потеря себя.",
    result:
      "«Впервые понимаю, что со мной происходит. И не боюсь будущего.» Два года трезвости.",
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      className="relative bg-ink px-6 md:px-16 lg:px-24 py-28 md:py-44 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          04 / Истории
        </span>
      </div>

      <div className="max-w-[1240px] mx-auto">
        <AnimateIn>
          <p className="eyebrow mb-16 md:mb-24">Истории</p>
        </AnimateIn>

        <div className="divide-y divide-paper/[0.07]">
          {cases.map((c, i) => (
            <AnimateIn key={c.name} delay={i * 0.1} className="py-12 md:py-16 first:pt-0 last:pb-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-3">
                  <p className="font-serif font-light text-[clamp(1rem,1.8vw,1.35rem)] text-gold/80 leading-snug">
                    {c.name}
                  </p>
                </div>
                <div className="md:col-span-9 space-y-5">
                  <p className="font-sans text-[14px] md:text-[15px] font-light leading-[1.9] text-paper/55">
                    {c.story}
                  </p>
                  <p className="font-serif italic font-light text-[clamp(1.15rem,2.2vw,1.55rem)] leading-[1.4] tracking-[-0.01em] text-paper/85">
                    {c.result}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
