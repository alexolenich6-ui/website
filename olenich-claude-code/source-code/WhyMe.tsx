"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const reasons = [
  {
    number: "01",
    title: "Психолог",
    text: "Два образования в психологии. Я не спрашиваю, какой стиль вам нравится — я спрашиваю, как вы живёте.",
  },
  {
    number: "02",
    title: "Юрист",
    text: "11 лет юридической практики. Каждый договор проверяю лично. Ни один клиент не потерял деньги.",
  },
  {
    number: "03",
    title: "Италия",
    text: "15 лет прямых отношений с итальянскими фабриками. Мебель по ценам производителя.",
  },
  {
    number: "04",
    title: "Инвестиция",
    text: "Правильный интерьер повышает стоимость недвижимости на 15–30%.",
  },
];

export default function WhyMe() {
  return (
    <section className="py-40 md:py-60 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-24 md:mb-40">
            <p className="col-span-12 md:col-span-2 font-sans text-[9px] font-light tracking-[0.6em] uppercase text-shadow/30">
              Почему
            </p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.03em] text-espresso">
              Почему выбирают <span className="italic text-shadow/60">меня</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="space-y-0">
          {reasons.map((r, i) => (
            <motion.div
              key={r.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group grid grid-cols-12 gap-4 md:gap-6 py-12 md:py-16 border-t border-espresso/6 cursor-default">
                <span className="col-span-3 md:col-span-1 font-sans text-[11px] font-light tracking-[0.2em] text-oat/50 group-hover:text-oat transition-colors duration-700">
                  {r.number}
                </span>
                <h3 className="col-span-9 md:col-span-3 font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] font-light text-espresso leading-none group-hover:text-shadow transition-colors duration-700">
                  {r.title}
                </h3>
                <p className="col-span-12 md:col-span-5 md:col-start-6 font-sans text-[13px] font-light leading-[1.9] text-shadow/50 group-hover:text-shadow/80 transition-colors duration-700 mt-4 md:mt-0">
                  {r.text}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-espresso/6" />
        </div>
      </div>
    </section>
  );
}
