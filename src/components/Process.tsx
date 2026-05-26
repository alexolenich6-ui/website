"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const steps = [
  {
    n: "01",
    title: "Знакомство",
    text: "Обсуждаем ожидания, образ жизни, бюджет. Я задаю вопросы, которые не задаёт никто.",
  },
  {
    n: "02",
    title: "Концепция",
    text: "Планировка, стилистика, мудборд. Утверждаем направление до старта рабочей фазы.",
  },
  {
    n: "03",
    title: "3D-визуализация",
    text: "Фотореалистичные рендеры каждой комнаты. Видите интерьер до первого мазка краски.",
  },
  {
    n: "04",
    title: "Рабочие чертежи",
    text: "Полный комплект документации. Электрика, сантехника, спецификации — без вопросов для прораба.",
  },
  {
    n: "05",
    title: "Реализация",
    text: "Авторский надзор на каждом этапе. Подрядчики, закупки, контроль качества.",
  },
  {
    n: "06",
    title: "Сдача и стайлинг",
    text: "Финальная комплектация: текстиль, свет, декор. Вы получаете готовый дом — не стройку.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-32 md:py-56 px-6 md:px-16 bg-cream overflow-hidden"
    >
      {/* Pagination marker */}
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-espresso/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/35">
          05 / Процесс
        </span>
      </div>

      <div className="max-w-[1680px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-20 md:mb-36">
            <p className="eyebrow col-span-12 md:col-span-2">Процесс</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.4rem,6.2vw,5.75rem)] leading-[0.96] tracking-[-0.03em] text-espresso">
              Шесть{" "}
              <span className="italic text-espresso/55">шагов</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-16 gap-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.9,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative py-10 md:py-14 border-t border-espresso/[0.08]"
            >
              <span className="absolute left-0 top-0 block h-px w-0 bg-espresso group-hover:w-20 transition-all duration-1000 ease-out" />

              <div className="flex items-baseline justify-between mb-5 md:mb-7">
                <span className="font-sans text-[10px] font-light tracking-[0.3em] text-espresso/35 group-hover:text-espresso transition-colors duration-700">
                  {step.n}
                </span>
                <span className="font-sans text-[9px] font-light tracking-[0.35em] uppercase text-espresso/25">
                  Этап
                </span>
              </div>

              <h3 className="font-serif font-light text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.1] tracking-[-0.015em] text-espresso mb-4">
                {step.title}
              </h3>

              <p className="font-sans text-[13px] font-light leading-[1.85] text-espresso/55 max-w-[340px]">
                {step.text}
              </p>
            </motion.div>
          ))}
          <div className="hidden md:block border-t border-espresso/[0.08]" />
          <div className="hidden md:block border-t border-espresso/[0.08]" />
          <div className="hidden lg:block border-t border-espresso/[0.08]" />
        </div>
      </div>
    </section>
  );
}
