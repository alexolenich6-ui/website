"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const services = [
  {
    n: "01",
    title: "Консультация",
    price: "от 10 000 ₽",
    text: "Анализ пространства, рекомендации по планировке и стилю. Конкретный план действий — даже если вы не возьмёте меня дальше.",
    includes: ["Аудит планировки", "Стилистическое направление", "План действий"],
  },
  {
    n: "02",
    title: "Дизайн-проект",
    price: "от 7 000 ₽/м²",
    text: "Полный дизайн-проект: планировка, фотореалистичная 3D-визуализация, рабочие чертежи, подбор материалов и мебели.",
    includes: [
      "3D-визуализация каждой комнаты",
      "Чертежи для прораба",
      "Спецификация материалов и мебели",
    ],
    featured: true,
  },
  {
    n: "03",
    title: "Реализация под ключ",
    price: "индивидуально",
    text: "От идеи до заселения. Дизайн, подрядчики, закупки, авторский надзор и юридическое сопровождение. Один человек — один результат.",
    includes: [
      "Подбор и контроль подрядчиков",
      "Авторский надзор",
      "Юридическое сопровождение договоров",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 md:py-56 px-6 md:px-16 bg-veil overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-espresso/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/35">
          06 / Услуги
        </span>
      </div>

      <div className="max-w-[1680px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-20 md:mb-36">
            <p className="eyebrow col-span-12 md:col-span-2">Услуги</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.4rem,6.2vw,5.75rem)] leading-[0.96] tracking-[-0.03em] text-espresso">
              Что я{" "}
              <span className="italic text-espresso/55">предлагаю</span>
            </h2>
          </div>
        </AnimateIn>

        <div>
          {services.map((s, i) => {
            const featured = s.featured;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <article
                  className={`group relative grid grid-cols-12 gap-6 md:gap-10 border-t transition-colors duration-700 ${
                    featured
                      ? "py-14 md:py-24 -mx-6 md:-mx-16 px-6 md:px-16 bg-espresso text-cream border-espresso"
                      : "py-12 md:py-20 border-espresso/[0.08] text-espresso"
                  }`}
                >
                  {/* Index */}
                  <div className="col-span-3 md:col-span-1">
                    <span
                      className={`font-sans text-[11px] font-light tracking-[0.3em] ${
                        featured ? "text-cream/40" : "text-espresso/35"
                      }`}
                    >
                      {s.n}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-9 md:col-span-4">
                    <h3
                      className={`font-serif font-light text-[clamp(1.8rem,3.6vw,3.1rem)] leading-[1.05] tracking-[-0.02em] ${
                        featured ? "text-cream" : "text-espresso"
                      }`}
                    >
                      {s.title}
                    </h3>
                    {featured && (
                      <p className="mt-4 font-sans text-[9px] font-light tracking-[0.45em] uppercase text-oat/70">
                        Основная услуга
                      </p>
                    )}
                  </div>

                  {/* Description + Includes */}
                  <div className="col-span-12 md:col-span-4">
                    <p
                      className={`font-sans text-[13px] md:text-[14px] font-light leading-[1.85] max-w-[420px] ${
                        featured ? "text-cream/65" : "text-espresso/55"
                      }`}
                    >
                      {s.text}
                    </p>
                    <ul className="mt-5 md:mt-7 space-y-2">
                      {s.includes.map((line) => (
                        <li
                          key={line}
                          className={`flex items-start gap-3 font-sans text-[11px] md:text-[12px] font-light leading-[1.7] ${
                            featured ? "text-cream/55" : "text-espresso/55"
                          }`}
                        >
                          <span
                            className={`mt-[7px] block h-px w-3 shrink-0 ${
                              featured ? "bg-oat/60" : "bg-espresso/35"
                            }`}
                          />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price + CTA */}
                  <div className="col-span-12 md:col-span-3 flex flex-col items-start md:items-end justify-between gap-6 md:gap-10">
                    <span
                      className={`font-serif font-light text-[clamp(1.3rem,2.2vw,1.8rem)] leading-none tracking-[-0.015em] ${
                        featured ? "text-oat" : "text-espresso/80"
                      }`}
                    >
                      {s.price}
                    </span>
                    <a
                      href="#contact"
                      className={`group/cta inline-flex items-center gap-4 font-sans text-[10px] font-light tracking-[0.4em] uppercase transition-colors duration-700 ${
                        featured
                          ? "text-cream hover:text-oat"
                          : "text-espresso hover:text-espresso/60"
                      }`}
                    >
                      <span>Обсудить</span>
                      <span
                        className={`block h-px w-8 group-hover/cta:w-14 transition-all duration-700 ${
                          featured ? "bg-cream/70 group-hover/cta:bg-oat" : "bg-espresso/40"
                        }`}
                      />
                    </a>
                  </div>
                </article>
              </motion.div>
            );
          })}
          <div className="border-t border-espresso/[0.08]" />
        </div>
      </div>
    </section>
  );
}
