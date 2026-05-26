"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const services = [
  {
    title: "Консультация",
    price: "от 10 000 ₽",
    text: "Анализ пространства, рекомендации по планировке и стилю. Конкретный план действий.",
  },
  {
    title: "Дизайн-проект",
    price: "от 7 000 ₽/м²",
    text: "Полный дизайн-проект: планировка, 3D-визуализация, рабочие чертежи, подбор материалов и мебели.",
    featured: true,
  },
  {
    title: "Реализация под ключ",
    price: "индивидуально",
    text: "От идеи до заселения. Дизайн, подрядчики, закупки, авторский надзор, юридическое сопровождение.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 md:py-60 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-24 md:mb-40">
            <p className="col-span-12 md:col-span-2 font-sans text-[9px] font-light tracking-[0.6em] uppercase text-shadow/30">
              Услуги
            </p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.03em] text-espresso">
              Что я <span className="italic text-shadow/60">предлагаю</span>
            </h2>
          </div>
        </AnimateIn>

        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={`group grid grid-cols-12 gap-6 md:gap-8 border-t border-espresso/6 transition-all duration-700 ${
                  s.featured
                    ? "py-16 md:py-24 -mx-6 md:-mx-16 px-6 md:px-16 bg-espresso"
                    : "py-14 md:py-20"
                }`}
              >
                <div className="col-span-12 md:col-span-5">
                  <h3
                    className={`font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-none ${
                      s.featured ? "text-cream" : "text-espresso"
                    }`}
                  >
                    {s.title}
                  </h3>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <p
                    className={`font-sans text-[13px] font-light leading-[1.9] ${
                      s.featured ? "text-silk/35" : "text-shadow/40"
                    }`}
                  >
                    {s.text}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-3 flex flex-col items-start md:items-end justify-between gap-6">
                  <span
                    className={`font-serif text-[clamp(1.2rem,2vw,1.6rem)] font-light ${
                      s.featured ? "text-oat/50" : "text-shadow/40"
                    }`}
                  >
                    {s.price}
                  </span>
                  <a
                    href="#contact"
                    className={`group/link inline-flex items-center gap-4 font-sans text-[9px] font-light tracking-[0.4em] uppercase transition-colors duration-700 ${
                      s.featured
                        ? "text-cream/25 hover:text-cream/60"
                        : "text-shadow/25 hover:text-espresso"
                    }`}
                  >
                    <span>Обсудить</span>
                    <span
                      className={`w-6 h-[0.5px] group-hover/link:w-10 transition-all duration-700 ${
                        s.featured ? "bg-cream/15" : "bg-espresso/15"
                      }`}
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-espresso/6" />
        </div>
      </div>
    </section>
  );
}
