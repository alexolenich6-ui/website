"use client";

import AnimateIn from "./AnimateIn";

// Секция 2 — Узнавание. Голосом клиента, тихо, без давления.
// Формулировки — из VOC-банка (документ, п. 5.5) + метафора «пассажир» (арка 6.2).
const lines = [
  "Снаружи всё нормально — работа, семья, дела.",
  "А внутри разваливается.",
  "Живёшь будто не свою жизнь. Пассажиром.",
  "Заглушаешь — лишь бы не чувствовать.",
  "И кажется, что ты один на дне.",
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="relative bg-deep px-6 md:px-16 lg:px-24 py-32 md:py-52 overflow-hidden"
    >
      <SectionIndex n="02" label="Узнавание" />

      <div className="max-w-[1240px] mx-auto">
        <AnimateIn>
          <p className="eyebrow mb-12 md:mb-20">Тебе знакомо?</p>
        </AnimateIn>

        <div className="space-y-3 md:space-y-5">
          {lines.map((line, i) => (
            <AnimateIn key={line} delay={i * 0.08} margin="-60px">
              <p className="font-serif font-light text-[clamp(1.7rem,4.4vw,3.4rem)] leading-[1.22] tracking-[-0.02em] text-paper/85">
                {line}
              </p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.2}>
          <p className="mt-14 md:mt-20 font-serif italic font-light text-[clamp(1.7rem,4.4vw,3.4rem)] leading-[1.2] tracking-[-0.02em] text-gold">
            Если узнал себя — значит, ты&nbsp;по&nbsp;адресу.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function SectionIndex({ n, label }: { n: string; label: string }) {
  return (
    <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
      <span className="block w-10 h-px bg-paper/15" />
      <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-paper/35">
        {n} / {label}
      </span>
    </div>
  );
}
