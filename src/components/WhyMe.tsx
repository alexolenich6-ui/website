"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const reasons = [
  {
    number: "01",
    title: "Психолог",
    keyword: "Понимание",
    text: "Два образования в психологии. Я не спрашиваю, какой стиль вам нравится — я спрашиваю, как вы живёте, просыпаетесь, работаете, отдыхаете.",
  },
  {
    number: "02",
    title: "Юрист",
    keyword: "Защита",
    text: "11 лет юридической практики. Лично проверяю каждый договор с подрядчиком. Ни один клиент не потерял деньги на ремонте.",
  },
  {
    number: "03",
    title: "Италия",
    keyword: "Цена фабрики",
    text: "15 лет прямых отношений с итальянскими фабриками. Свой шоурум в прошлом. Мебель по ценам производителя, а не московских салонов.",
  },
  {
    number: "04",
    title: "Инвестиция",
    keyword: "+15–30%",
    text: "Грамотный интерьер — это не расход, а вложение. Правильное решение повышает стоимость недвижимости на 15–30%.",
  },
];

export default function WhyMe() {
  return (
    <section
      id="why"
      className="relative py-32 md:py-56 px-6 md:px-16 bg-veil overflow-hidden"
    >
      {/* Pagination marker */}
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-espresso/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/35">
          03 / Почему
        </span>
      </div>

      <div className="max-w-[1680px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-20 md:mb-32">
            <p className="eyebrow col-span-12 md:col-span-2">Почему</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.4rem,6.2vw,5.75rem)] leading-[0.96] tracking-[-0.03em] text-espresso">
              Почему выбирают{" "}
              <span className="italic text-espresso/55">меня</span>
            </h2>
          </div>
        </AnimateIn>

        <div>
          {reasons.map((r, i) => (
            <motion.div
              key={r.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <article className="group relative border-t border-espresso/[0.08] py-10 md:py-16 cursor-default">
                {/* Hover-grown left rail */}
                <span className="absolute left-0 top-0 block h-px w-0 bg-espresso group-hover:w-24 transition-all duration-1000 ease-out" />

                <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                  <span className="col-span-3 md:col-span-1 font-sans text-[11px] font-light tracking-[0.3em] text-espresso/35 group-hover:text-espresso transition-colors duration-700 pt-2">
                    {r.number}
                  </span>

                  <div className="col-span-9 md:col-span-4">
                    <h3 className="font-serif font-light text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.02em] text-espresso">
                      {r.title}
                    </h3>
                    <p className="mt-3 md:mt-4 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/40 group-hover:text-espresso/70 transition-colors duration-700">
                      {r.keyword}
                    </p>
                  </div>

                  <p className="col-span-12 md:col-span-6 md:col-start-7 font-sans text-[13px] md:text-[14px] font-light leading-[1.85] text-espresso/55 group-hover:text-espresso/85 transition-colors duration-700 mt-4 md:mt-2 max-w-[480px]">
                    {r.text}
                  </p>
                </div>
              </article>
            </motion.div>
          ))}
          <div className="border-t border-espresso/[0.08]" />
        </div>
      </div>
    </section>
  );
}
