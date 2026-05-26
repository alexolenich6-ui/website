"use client";

import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Dark side */}
      <div className="bg-espresso px-8 md:px-16 lg:px-24 py-24 md:py-40 flex flex-col justify-center">
        <AnimateIn direction="left">
          <p className="font-sans text-[9px] font-light tracking-[0.6em] uppercase text-oat/20 mb-12">
            Контакты
          </p>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-light leading-[1] text-cream/90 mb-8">
            Давайте
          </h2>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-light leading-[1] text-cream/50 italic mb-16">
            обсудим
          </h2>
          <p className="font-sans text-[12px] font-light leading-[2] text-silk/25 max-w-[340px] mb-20">
            Расскажите о вашем проекте — я свяжусь с&nbsp;вами лично.
            Первая консультация бесплатная.
          </p>

          <div className="space-y-10">
            <a
              href="tel:+79001234567"
              className="block font-serif text-[clamp(1.2rem,2vw,1.6rem)] font-light text-cream/40 hover:text-cream/80 transition-colors duration-500"
            >
              +7 (900) 123-45-67
            </a>
            <a
              href="mailto:info@olenich-interior.ru"
              className="block font-serif text-[clamp(1.2rem,2vw,1.6rem)] font-light text-cream/40 hover:text-cream/80 transition-colors duration-500"
            >
              info@olenich-interior.ru
            </a>
            <p className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-oat/15">
              Москва
            </p>
          </div>
        </AnimateIn>
      </div>

      {/* Light side — form */}
      <div className="bg-cream px-8 md:px-16 lg:px-24 py-24 md:py-40 flex flex-col justify-center">
        <AnimateIn direction="right">
          <form onSubmit={(e) => e.preventDefault()} className="max-w-[440px]">
            <div className="space-y-12">
              <div>
                <label className="block font-sans text-[9px] font-light tracking-[0.4em] uppercase text-shadow/25 mb-5">
                  Имя
                </label>
                <input
                  type="text"
                  placeholder="Как к вам обращаться"
                  className="w-full bg-transparent border-b border-oat/30 pb-4 font-sans text-[14px] font-light text-espresso placeholder:text-oat/40 focus:border-espresso/40 outline-none transition-colors duration-500"
                />
              </div>

              <div>
                <label className="block font-sans text-[9px] font-light tracking-[0.4em] uppercase text-shadow/25 mb-5">
                  Телефон
                </label>
                <input
                  type="tel"
                  placeholder="+7"
                  className="w-full bg-transparent border-b border-oat/30 pb-4 font-sans text-[14px] font-light text-espresso placeholder:text-oat/40 focus:border-espresso/40 outline-none transition-colors duration-500"
                />
              </div>

              <div>
                <label className="block font-sans text-[9px] font-light tracking-[0.4em] uppercase text-shadow/25 mb-5">
                  О проекте
                </label>
                <textarea
                  rows={2}
                  placeholder="Тип объекта, площадь"
                  className="w-full bg-transparent border-b border-oat/30 pb-4 font-sans text-[14px] font-light text-espresso placeholder:text-oat/40 focus:border-espresso/40 outline-none transition-colors duration-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full font-sans text-[9px] font-light tracking-[0.4em] uppercase text-cream bg-espresso py-6 hover:bg-shadow transition-colors duration-700"
              >
                Отправить
              </button>
            </div>

            <div className="mt-12 flex gap-8">
              <a
                href="https://wa.me/79001234567"
                className="font-sans text-[10px] font-light text-shadow/20 hover:text-espresso transition-colors duration-500 underline underline-offset-4 decoration-oat/20"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/olenich_interior"
                className="font-sans text-[10px] font-light text-shadow/20 hover:text-espresso transition-colors duration-500 underline underline-offset-4 decoration-oat/20"
              >
                Telegram
              </a>
            </div>
          </form>
        </AnimateIn>
      </div>
    </section>
  );
}
