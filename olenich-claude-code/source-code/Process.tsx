"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const steps = [
  { n: "01", title: "Знакомство", text: "Обсуждаем ожидания, образ жизни, бюджет" },
  { n: "02", title: "Концепция", text: "Планировка, стилистика, мудборд" },
  { n: "03", title: "3D", text: "Фотореалистичная визуализация каждой комнаты" },
  { n: "04", title: "Чертежи", text: "Полный комплект рабочей документации" },
  { n: "05", title: "Реализация", text: "Авторский надзор на каждом этапе" },
  { n: "06", title: "Сдача", text: "Финальная комплектация и стайлинг" },
];

export default function Process() {
  return (
    <section id="process" className="py-40 md:py-60 px-6 md:px-16 bg-cream">
      <div className="max-w-[1600px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-24 md:mb-40">
            <p className="col-span-12 md:col-span-2 font-sans text-[9px] font-light tracking-[0.6em] uppercase text-shadow/30">
              Процесс
            </p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.03em] text-espresso">
              Шесть <span className="italic text-shadow/60">шагов</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 md:py-16 border-t border-espresso/6"
            >
              <span className="block font-sans text-[10px] font-light tracking-[0.3em] text-oat/40 mb-6">
                {step.n}
              </span>
              <h3 className="font-serif text-[clamp(1.3rem,2vw,1.8rem)] font-light text-espresso mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-[12px] font-light leading-[1.8] text-shadow/40">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
