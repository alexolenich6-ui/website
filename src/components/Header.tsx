"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "О себе", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Услуги", href: "#services" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const onLight = scrolled || mobileOpen;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,border] duration-700 ${
          onLight
            ? "bg-veil/85 backdrop-blur-xl border-b border-espresso/[0.06]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-14 md:h-[76px]">
          <a
            href="#hero"
            className={`font-serif text-[15px] md:text-[17px] font-light tracking-[0.32em] uppercase transition-colors duration-500 ${
              onLight ? "text-espresso" : "text-cream"
            }`}
          >
            Olenich
          </a>

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative font-sans text-[10px] font-light tracking-[0.38em] uppercase transition-colors duration-500 ${
                  onLight
                    ? "text-espresso/55 hover:text-espresso"
                    : "text-cream/55 hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ease-out ${
                    onLight ? "bg-espresso/40" : "bg-cream/40"
                  }`}
                />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className={`hidden lg:inline-flex items-center gap-3 group font-sans text-[10px] font-light tracking-[0.38em] uppercase transition-colors duration-500 ${
              onLight ? "text-espresso hover:text-espresso/60" : "text-cream hover:text-cream/70"
            }`}
          >
            <span>Записаться</span>
            <span
              className={`block h-px w-6 group-hover:w-10 transition-all duration-700 ${
                onLight ? "bg-espresso/35" : "bg-cream/45"
              }`}
            />
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            className="lg:hidden -mr-2 p-2 flex flex-col gap-[5px]"
          >
            <span
              className={`block w-5 h-px origin-center transition-all duration-500 ${
                mobileOpen
                  ? "rotate-45 translate-y-[3px] bg-espresso"
                  : onLight
                    ? "bg-espresso"
                    : "bg-cream/80"
              }`}
            />
            <span
              className={`block w-5 h-px origin-center transition-all duration-500 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[3px] bg-espresso"
                  : onLight
                    ? "bg-espresso"
                    : "bg-cream/80"
              }`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-veil flex flex-col items-center justify-center gap-8 px-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.07,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-serif text-[clamp(2rem,8vw,3rem)] font-light text-espresso"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-6 font-sans text-[10px] font-light tracking-[0.4em] uppercase text-espresso/60 border-b border-espresso/15 pb-2"
            >
              Записаться на консультацию
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
