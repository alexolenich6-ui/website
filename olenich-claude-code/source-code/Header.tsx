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
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-veil/92 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 flex items-center justify-between h-14 md:h-[72px]">
          <a
            href="#hero"
            className={`font-serif text-sm md:text-base font-light tracking-[0.3em] uppercase transition-colors duration-500 ${
              scrolled ? "text-espresso" : "text-cream/80"
            }`}
          >
            Olenich
          </a>

          <nav className="hidden lg:flex items-center gap-14">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans text-[9px] font-light tracking-[0.35em] uppercase transition-colors duration-500 ${
                  scrolled
                    ? "text-shadow/40 hover:text-espresso"
                    : "text-cream/30 hover:text-cream/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className={`hidden lg:inline-flex group items-center gap-4 font-sans text-[9px] font-light tracking-[0.35em] uppercase transition-colors duration-500 ${
              scrolled
                ? "text-shadow/40 hover:text-espresso"
                : "text-cream/30 hover:text-cream/70"
            }`}
          >
            <span>Записаться</span>
            <span
              className={`w-5 h-[0.5px] group-hover:w-8 transition-all duration-700 ${
                scrolled ? "bg-oat/30" : "bg-cream/15"
              }`}
            />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Меню"
          >
            <span
              className={`w-5 h-[0.5px] transition-all duration-500 origin-center ${
                mobileOpen
                  ? "rotate-45 translate-y-[3px] bg-espresso"
                  : scrolled
                    ? "bg-espresso"
                    : "bg-cream/60"
              }`}
            />
            <span
              className={`w-5 h-[0.5px] transition-all duration-500 origin-center ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[3px] bg-espresso"
                  : scrolled
                    ? "bg-espresso"
                    : "bg-cream/60"
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
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-veil/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[clamp(1.8rem,5vw,2.5rem)] font-light text-espresso"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-8 font-sans text-[9px] font-light tracking-[0.4em] uppercase text-shadow/30 border-b border-espresso/10 pb-2"
            >
              Записаться на консультацию
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
