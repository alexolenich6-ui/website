"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

// Секция 8 — FAQ. Снятие возражений + цена (§2, §7).
// Цена показывается здесь, в рамке «длительная работа, процесс» — не на первом экране.
const faqs = [
  {
    q: "Сколько стоит и как устроена работа?",
    a: "Я работаю не разовыми консультациями, а в длительной терапии. Стоимость сессии — 20 000 ₽. На бесплатном разговоре-знакомстве поймём, подходим ли друг другу и есть ли смысл начинать.",
  },
  {
    q: "Онлайн или очно?",
    a: "Работаю и онлайн, и очно. Формат подберём на знакомстве — исходя из того, что удобнее и безопаснее для вас.",
  },
  {
    q: "Это конфиденциально?",
    a: "Да. Всё, что происходит в терапии, остаётся между нами. Это базовое условие работы — без него глубокий разговор невозможен.",
  },
  {
    q: "А вдруг мне не поможет?",
    a: "Поэтому первый шаг — бесплатный разговор, ни к чему не обязывающий. Мы вместе честно посмотрим на запрос. Если я не тот специалист — скажу об этом прямо.",
  },
  {
    q: "Чем психолог отличается от психиатра?",
    a: "Я психолог, не врач: не ставлю диагнозов и не назначаю лечение. Благодаря опыту в психиатрической клинике я вижу, где заканчивается психологический кризис и нужен врач — и тогда направляю к психиатру.",
  },
  {
    q: "А как же вера? Это религиозный приём?",
    a: "Годы служения — часть моего пути и источник глубины. Но в работе я не проповедую и с уважением отношусь к вашей свободе. Терапия остаётся терапией.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-ink px-6 md:px-16 lg:px-24 py-32 md:py-52 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          08 / Вопросы
        </span>
      </div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-y-12 md:gap-16">
        <AnimateIn className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-6">Вопросы</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.03em] text-paper">
            Честно <span className="italic text-gold">о главном</span>
          </h2>
        </AnimateIn>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="border-b border-paper/[0.1] first:border-t"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                >
                  <span className="font-serif font-light text-[clamp(1.15rem,2vw,1.5rem)] leading-[1.3] text-paper group-hover:text-gold transition-colors duration-500">
                    {item.q}
                  </span>
                  <span className="relative mt-2 shrink-0 w-4 h-4">
                    <span className="absolute top-1/2 left-0 w-4 h-px bg-gold" />
                    <span
                      className={`absolute top-1/2 left-0 w-4 h-px bg-gold transition-transform duration-500 ${
                        isOpen ? "rotate-0" : "rotate-90"
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-10 font-sans text-[14px] md:text-[15px] font-light leading-[1.9] text-paper/60 max-w-[600px]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
