"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import AnimateIn from "./AnimateIn";
import { CONTACTS } from "@/lib/contacts";

function maskPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  const normalized = digits[0] === "8" ? "7" + digits.slice(1) : digits;
  const d = normalized.padEnd(11, "·").slice(0, 11);
  // Format: +7 (XXX) XXX-XX-XX
  let out = "+7";
  if (digits.length > 1) out += ` (${d.slice(1, 4).replace(/·/g, "")}`;
  if (digits.length > 4) out += `) ${d.slice(4, 7).replace(/·/g, "")}`;
  if (digits.length > 7) out += `-${d.slice(7, 9).replace(/·/g, "")}`;
  if (digits.length > 9) out += `-${d.slice(9, 11).replace(/·/g, "")}`;
  return out;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onPhone = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, phone: maskPhone(e.target.value) }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen overflow-hidden"
    >
      {/* Dark side */}
      <div className="relative bg-espresso text-cream px-6 md:px-16 lg:px-24 py-24 md:py-40 flex flex-col justify-center">
        <div className="absolute top-10 md:top-16 right-6 md:right-16 flex items-center gap-3">
          <span className="block w-10 h-px bg-cream/15" />
          <span className="font-sans text-[10px] font-light tracking-[0.4em] uppercase text-cream/35">
            08 / Контакты
          </span>
        </div>

        <AnimateIn direction="left">
          <p className="font-sans text-[10px] font-light tracking-[0.45em] uppercase text-oat/55 mb-10 md:mb-14">
            Контакты
          </p>
        </AnimateIn>

        <AnimateIn delay={0.05} direction="left">
          <h2 className="font-serif font-light leading-[0.96] tracking-[-0.025em] text-[clamp(2.5rem,5.5vw,5rem)]">
            <span className="block text-cream">Давайте</span>
            <span className="block italic text-cream/55 pl-[0.1em] mt-2">
              обсудим
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15} direction="left">
          <p className="mt-10 md:mt-14 font-sans text-[13px] md:text-[14px] font-light leading-[1.85] text-cream/55 max-w-[420px]">
            Расскажите о&nbsp;вашем проекте — я&nbsp;свяжусь с&nbsp;вами лично.
            Первая консультация бесплатная.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2} direction="left">
          <div className="mt-14 md:mt-20 space-y-7">
            <a
              href={`tel:${CONTACTS.phoneTel}`}
              className="group block w-fit"
            >
              <span className="font-sans text-[9px] font-light tracking-[0.45em] uppercase text-cream/30 block mb-2">
                Телефон
              </span>
              <span className="font-serif font-light text-[clamp(1.4rem,2.2vw,1.9rem)] text-cream/90 group-hover:text-oat transition-colors duration-500">
                {CONTACTS.phoneDisplay}
              </span>
            </a>
            <a
              href={`mailto:${CONTACTS.email}`}
              className="group block w-fit"
            >
              <span className="font-sans text-[9px] font-light tracking-[0.45em] uppercase text-cream/30 block mb-2">
                Email
              </span>
              <span className="font-serif font-light text-[clamp(1.2rem,2vw,1.7rem)] text-cream/90 group-hover:text-oat transition-colors duration-500 lowercase">
                {CONTACTS.email}
              </span>
            </a>
            <div>
              <span className="font-sans text-[9px] font-light tracking-[0.45em] uppercase text-cream/30 block mb-2">
                Город
              </span>
              <span className="font-serif font-light text-[clamp(1.2rem,2vw,1.7rem)] text-cream/80">
                {CONTACTS.city}
              </span>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3} direction="left">
          <div className="mt-14 md:mt-20 pt-10 border-t border-cream/10 flex gap-8 md:gap-10">
            <a
              href={CONTACTS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-cream/55 hover:text-cream transition-colors duration-500"
            >
              <span>WhatsApp</span>
              <span className="block h-px w-6 bg-cream/30 group-hover:w-10 transition-all duration-700" />
            </a>
            <a
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-cream/55 hover:text-cream transition-colors duration-500"
            >
              <span>Telegram</span>
              <span className="block h-px w-6 bg-cream/30 group-hover:w-10 transition-all duration-700" />
            </a>
          </div>
        </AnimateIn>
      </div>

      {/* Light side — form */}
      <div className="bg-cream px-6 md:px-16 lg:px-24 py-24 md:py-40 flex flex-col justify-center">
        <AnimateIn direction="right">
          <p className="eyebrow mb-10">Заявка</p>
          <h3 className="font-serif font-light text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.2] tracking-[-0.015em] text-espresso mb-10 max-w-[460px]">
            Оставьте контакты — отвечу в&nbsp;течение
            <span className="italic text-espresso/60"> рабочего дня.</span>
          </h3>
        </AnimateIn>

        <AnimateIn delay={0.1} direction="right">
          <form onSubmit={onSubmit} className="max-w-[480px] w-full">
            <div className="space-y-10">
              <Field
                id="name"
                label="Имя"
                placeholder="Как к вам обращаться"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                autoComplete="name"
                required
              />
              <Field
                id="phone"
                label="Телефон"
                placeholder="+7"
                value={form.phone}
                onChange={onPhone}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
              />
              <Field
                id="message"
                label="О проекте"
                placeholder="Тип объекта, площадь, ваши пожелания"
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                multiline
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="group mt-12 w-full inline-flex items-center justify-center gap-4 bg-espresso text-cream py-5 md:py-6 font-sans text-[10px] font-light tracking-[0.45em] uppercase hover:bg-espresso/85 transition-colors duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>
                {status === "sending"
                  ? "Отправляю…"
                  : status === "sent"
                  ? "Заявка принята"
                  : status === "error"
                  ? "Ошибка — попробуйте ещё"
                  : "Отправить"}
              </span>
              <span className="block h-px w-6 bg-cream/60 group-hover:w-10 transition-all duration-700" />
            </button>

            <p className="mt-6 font-sans text-[10px] font-light leading-[1.7] text-espresso/40 max-w-[420px]">
              Отправляя форму, вы&nbsp;соглашаетесь с&nbsp;обработкой
              персональных данных. Я&nbsp;не&nbsp;передаю их&nbsp;третьим
              лицам.
            </p>
          </form>
        </AnimateIn>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  multiline?: boolean;
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  inputMode,
  multiline,
}: FieldProps) {
  const base =
    "w-full bg-transparent border-b border-espresso/15 pb-3 font-sans text-[14px] font-light text-espresso placeholder:text-espresso/30 focus:border-espresso outline-none transition-colors duration-500";
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/45 mb-4"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={2}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
          className={base}
        />
      )}
    </div>
  );
}
