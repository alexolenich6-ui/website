import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Евгения Оленич — Дизайн интерьера премиум-класса | Москва",
  description:
    "Создаю пространства, в которых хочется жить — и которые растут в цене. 20+ лет опыта, 150+ проектов. Психолог, юрист, дизайнер.",
  keywords: [
    "дизайн интерьера",
    "премиум интерьер",
    "дизайнер интерьера Москва",
    "Евгения Оленич",
    "luxury interior design",
  ],
  openGraph: {
    title: "Евгения Оленич — Дизайн интерьера премиум-класса",
    description:
      "Создаю пространства, в которых хочется жить — и которые растут в цене.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
