"use client";

import AnimateIn from "./AnimateIn";

// Секция 7 — Для кого (фильтр). Притягивает готовых, мягко отсеивает ждущих чуда.
// Важно для Давида: цена 20 000 ₽ — нецелевой клиент дорого обходится обоим.
export default function Audience() {
  return (
    <section
      id="audience"
      className="relative bg-deep px-6 md:px-16 lg:px-24 py-28 md:py-44 overflow-hidden"
    >
      <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
        <span className="block w-10 h-px bg-paper/15" />
        <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
          07 / Для кого
        </span>
      </div>

      <div className="max-w-[1240px] mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
            <p className="eyebrow col-span-12 md:col-span-2">Для кого</p>
            <h2 className="col-span-12 md:col-span-10 md:col-start-3 font-serif font-light text-[clamp(2.2rem,6vw,5.25rem)] leading-[0.98] tracking-[-0.03em] text-paper">
              Для каждого, у кого{" "}
              <span className="italic text-gold">душа не на месте</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          <AnimateIn>
            <div className="border border-paper/[0.1] rounded-sm p-8 md:p-10 h-full bg-paper/[0.03]">
              <div className="flex items-center gap-3 mb-7">
                <span className="font-serif text-[1.4rem] text-gold leading-none">+</span>
                <p className="eyebrow !text-gold/70">Приходите, если</p>
              </div>
              <p className="font-sans text-[14px] md:text-[15px] font-light leading-[1.9] text-paper/65">
                Если вы живёте не&nbsp;своей жизнью. Если запутались
                и&nbsp;не знаете, куда идти. Если внутри — тревога,
                пустота или боль. Если просто нужно, чтобы кто-то
                выслушал без осуждения.
              </p>
              <p className="mt-6 font-sans text-[14px] font-light leading-[1.9] text-paper/65">
                Или если вы дошли до точки, где дальше так нельзя —
                и&nbsp;готовы не&nbsp;на&nbsp;чудо, а&nbsp;на&nbsp;настоящую
                работу над собой.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="border border-paper/[0.06] rounded-sm p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-7">
                <span className="font-serif text-[1.4rem] text-paper/25 leading-none">—</span>
                <p className="eyebrow !text-paper/35">Возможно, я не ваш специалист</p>
              </div>
              <p className="font-sans text-[14px] md:text-[15px] font-light leading-[1.9] text-paper/40">
                Если вы ищете быстрый совет или «волшебную таблетку»
                за&nbsp;одну встречу. Я&nbsp;работаю в&nbsp;длительной
                терапии — симптом уходит через корень, а&nbsp;не
                по&nbsp;поверхности.
              </p>
              <p className="mt-6 font-sans text-[14px] font-light leading-[1.9] text-paper/40">
                Это честно — так мы&nbsp;оба сэкономим время.
              </p>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.15}>
          <p className="font-serif italic font-light text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.3] tracking-[-0.02em] text-paper/70 max-w-[640px]">
            Самый трудный шаг — признать, что что-то идёт не так.
            Если вы уже здесь — значит, вы его уже сделали.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
