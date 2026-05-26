"use client";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="border-t border-espresso/4 pt-10 md:pt-14 flex flex-col md:flex-row justify-between items-center gap-6">
          <a
            href="#hero"
            className="font-serif text-base font-light tracking-[0.25em] text-espresso/40 uppercase hover:text-espresso transition-colors duration-500"
          >
            Olenich
          </a>

          <nav className="flex items-center gap-10">
            {["Instagram", "Telegram", "WhatsApp"].map((name) => (
              <a
                key={name}
                href={
                  name === "Instagram"
                    ? "https://instagram.com/olenich.interior"
                    : name === "Telegram"
                      ? "https://t.me/olenich_interior"
                      : "https://wa.me/79001234567"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] font-light text-shadow/20 hover:text-espresso transition-colors duration-500"
              >
                {name}
              </a>
            ))}
          </nav>

          <p className="font-sans text-[9px] font-light tracking-[0.2em] text-oat/30">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
