"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACTS, CTA_LABEL } from "@/lib/contacts";

// Sticky CTA на mobile — доступна при скролле между hero и финальным CTA.
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const contactTop = contact?.getBoundingClientRect().top ?? Infinity;
      const inMiddle =
        heroBottom < 80 && contactTop > window.innerHeight * 0.6;
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
          <a
            href={CONTACTS.telegramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="telegram"
            className="flex items-center justify-center gap-3 bg-gold text-ink rounded-full py-4 font-sans text-[10px] font-light tracking-[0.4em] uppercase shadow-[0_18px_60px_-12px_rgba(165,138,88,0.6)] backdrop-blur"
          >
            <span>{CTA_LABEL}</span>
            <span className="block h-px w-6 bg-ink/60" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
