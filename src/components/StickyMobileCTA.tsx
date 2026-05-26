"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACTS } from "@/lib/contacts";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const contactTop = contact?.getBoundingClientRect().top ?? Infinity;
      const inMiddle = heroBottom < 80 && contactTop > window.innerHeight * 0.6;
      setVisible(inMiddle);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden fixed bottom-4 inset-x-4 z-30"
        >
          <div className="flex gap-2.5 items-stretch">
            <a
              href="#contact"
              className="flex-1 inline-flex items-center justify-center gap-3 bg-espresso text-cream rounded-full py-4 font-sans text-[10px] font-light tracking-[0.4em] uppercase shadow-[0_18px_60px_-12px_rgba(91,74,62,0.55)] backdrop-blur"
            >
              <span>Записаться</span>
              <span className="block h-px w-6 bg-cream/70" />
            </a>
            <a
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Telegram"
              className="inline-flex items-center justify-center w-14 bg-cream text-espresso rounded-full font-sans text-[10px] font-light tracking-[0.3em] uppercase shadow-[0_18px_60px_-12px_rgba(91,74,62,0.35)]"
            >
              TG
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
