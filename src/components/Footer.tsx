"use client";

import { CONTACTS } from "@/lib/contacts";

const socials = [
  { name: "Instagram", href: CONTACTS.instagramUrl },
  { name: "Telegram", href: CONTACTS.telegramUrl },
  { name: "WhatsApp", href: CONTACTS.whatsappUrl },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-16 pb-10 pt-20 md:pt-28">
      <div className="max-w-[1680px] mx-auto">
        <div className="border-t border-espresso/[0.08] pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <a
            href="#hero"
            className="font-serif text-[15px] font-light tracking-[0.3em] text-espresso uppercase"
          >
            Olenich
          </a>

          <nav className="flex items-center gap-7 md:gap-10">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] font-light tracking-[0.32em] uppercase text-espresso/55 hover:text-espresso transition-colors duration-500"
              >
                {s.name}
              </a>
            ))}
          </nav>

          <p className="font-sans text-[10px] font-light tracking-[0.3em] uppercase text-espresso/40">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
