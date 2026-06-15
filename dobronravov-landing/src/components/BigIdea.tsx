"use client";

import AnimateIn from "./AnimateIn";

const cases = [
  {
    name: "Сергей, 41 год",
    story:
      "Пил с 14 до 38 лет. Боялся, что без алкоголя жизнь станет серой и безрадостной. Сомневался, что справится. Работали долго. Разбирали убеждения, привычки, страхи.",
    result: "Три года трезвости. Говорит: «Это лучшее, что я сделал для себя и своей семьи».",
  },
  {
    name: "Женщина, 34 года",
    story:
      "Алкогольная зависимость. Стыд, вина, ощущение тупика. Разбирались не только с зависимостью, но и с тем, что за ней стояло — какие эмоции она пыталась заглушить.",
    result: "Два года трезвости. В её телефоне я записан как «Самый Добрый Доктор».",
  },
  {
    name: "Мужчина, 45 лет",
    story:
      "7 кодировок. Бесконечное число клиник. После каждого срыва: «Всё, это последний». И снова срыв. Пришёл с чувством, что безнадёжен. Разбирались не с силой воли, а с тем, что стояло за зависимостью: напряжение, неумение сказать «нет», потеря себя.",
    result: "Два года трезвости. Говорит: «Впервые понимаю, что со мной происходит. И не боюсь будущего».",
  },
];

export default function BigIdea() {
  return (
    <section
      id="cases"
      className="relative bg-ink px-6 md:px-16 lg:px-24 py-32 md:py-52 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          03 / Истории
        </span>
      </div>

      <div className="max-w-[1240px] mx-auto">
        <AnimateIn>
          <p className="eyebrow mb-16 md:mb-24">Истории</p>
        </AnimateIn>

        <div className="divide-y divide-paper/[0.08]">
          {cases.map((c, i) => (
            <AnimateIn key={c.name} delay={i * 0.1} className="py-12 md:py-16 first:pt-0">
              <div className="grid grid-cols-12 gap-6 md:gap-16">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-serif font-light text-[clamp(1.1rem,2vw,1.4rem)] text-gold leading-snug">
                    {c.name}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9 space-y-5">
                  <p className="font-sans text-[14px] md:text-[16px] font-light leading-[1.9] text-paper/65">
                    {c.story}
                  </p>
                  <p className="font-serif italic font-light text-[clamp(1.1rem,2vw,1.4rem)] leading-[1.45] tracking-[-0.01em] text-paper/90">
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
