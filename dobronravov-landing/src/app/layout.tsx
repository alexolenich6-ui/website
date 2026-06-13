import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Давид Добронравов — клинический психолог | Вернуться к себе",
  description:
    "Зависимость, тревога, кризис, потеря — это про то, что человек потерял контакт с собой. Клинический психолог с опытом психиатрии помогает его восстановить. Бесплатный разговор-знакомство.",
  keywords: [
    "клинический психолог",
    "психолог зависимости",
    "созависимость",
    "кризисный психолог",
    "Давид Добронравов",
    "терапия тревоги",
  ],
  openGraph: {
    title: "Давид Добронравов — клинический психолог",
    description:
      "Вернуться к себе. Помогаю пройти через тёмное, чтобы снова жить. Бесплатный разговор-знакомство.",
    type: "website",
    locale: "ru_RU",
    siteName: "Давид Добронравов",
    // TODO: добавить /og/cover.jpg (1200×630) после загрузки фото.
    // images: [{ url: "/og/cover.jpg", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1F2328",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body>
        {children}
        {/* ──────────────────────────────────────────────────────────────
            Яндекс.Метрика — ЗАГЛУШКА под вставку (§8 ТЗ).
            Перед публикацией: получить номер счётчика и подключить через
            next/script, например:

            import Script from "next/script";
            <Script id="ym" strategy="afterInteractive">{`
              (function(m,e,t,r,i,k,a){...ym(XXXXXXX,"init",{...})});
            `}</Script>

            Важно: счётчик не должен использовать localStorage/sessionStorage
            сверх необходимого (§8 — без локального хранилища на стороне сайта).
            ────────────────────────────────────────────────────────────── */}
      </body>
    </html>
  );
}
