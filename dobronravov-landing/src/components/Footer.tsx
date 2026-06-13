"use client";

import { CONTACTS } from "@/lib/contacts";
import LighthouseMark from "./LighthouseMark";

export default function Footer() {
  // Социальные ссылки. Telegram-канал показываем, только если задан (§9).
  const socials = [
    { name: "Telegram", href: CONTACTS.telegramDmUrl, show: true },
    {
      name: "Telegram-канал",
      href: CONTACTS.telegramChannelUrl,
      show: Boolean(CONTACTS.telegramChannelUrl),
    },
    { name: "Instagram", href: CONTACTS.instagramUrl, show: true },
  ].filter((s) => s.show);

  return (
    <footer className="bg-ink px-6 md:px-12 lg:px-16 pb-10 pt-20 md:pt-28">
      <div className="max-w-[1680px] mx-auto">
        <div className="border-t border-paper/[0.1] pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <a href="#hero" className="flex items-center gap-3">
            <LighthouseMark className="w-6 h-6 text-gold/70" />
            <span className="font-serif text-[14px] font-light tracking-[0.3em] text-paper uppercase">
              {CONTACTS.name}
            </span>
          </a>

          <nav className="flex items-center gap-7 md:gap-10">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] font-light tracking-[0.32em] uppercase text-paper/55 hover:text-gold transition-colors duration-500"
              >
                {s.name}
              </a>
            ))}
          </nav>

          <p className="font-sans text-[10px] font-light tracking-[0.3em] uppercase text-paper/40">
            © {new Date().getFullYear()} · {CONTACTS.role}
          </p>
        </div>

        {/* TODO(§9.5): юр.инфо (самозанятость / ИНН) для приёма оплат. */}
        {CONTACTS.legalNote && (
          <p className="mt-6 font-sans text-[10px] font-light leading-[1.7] text-paper/30">
            {CONTACTS.legalNote}
          </p>
        )}
      </div>
    </footer>
  );
}
