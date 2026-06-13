"use client";

import { CONTACTS, CTA_LABEL } from "@/lib/contacts";

type Variant = "solid" | "ghost" | "line";

interface CtaButtonProps {
  label?: string;
  variant?: Variant;
  className?: string;
}

/**
 * Единственное целевое действие лендинга — переход в личку Telegram.
 * Кнопка повторяется в hero, после блока «Как работаю» и в финале (§2 брифа).
 * Никаких форм — меньше трения для напуганного человека.
 */
export default function CtaButton({
  label = CTA_LABEL,
  variant = "solid",
  className = "",
}: CtaButtonProps) {
  const base =
    "group inline-flex items-center gap-5 font-sans font-light tracking-[0.32em] uppercase transition-colors duration-500";

  const styles: Record<Variant, string> = {
    solid:
      "bg-gold text-ink px-9 py-5 text-[11px] hover:bg-gold/90 rounded-full shadow-[0_24px_60px_-20px_rgba(165,138,88,0.6)]",
    ghost:
      "border border-paper/20 text-paper px-9 py-5 text-[11px] hover:border-gold hover:text-gold rounded-full",
    line: "text-paper text-[11px] hover:text-gold",
  };

  return (
    <a
      href={CONTACTS.telegramDmUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="telegram"
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`relative block h-px transition-all duration-700 ease-out ${
          variant === "solid"
            ? "w-7 bg-ink/50 group-hover:w-11"
            : "w-7 bg-current/50 group-hover:w-11"
        }`}
      >
        <span className="absolute -right-[2px] -top-[3px] block w-1.5 h-1.5 border-t border-r border-current rotate-45" />
      </span>
    </a>
  );
}
