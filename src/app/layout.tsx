import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
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
    "Проектирую пространства, в которых живут лучше — и которые растут в цене на 15–30%. 20+ лет опыта, 150+ проектов, прямой доступ к итальянским фабрикам.",
  keywords: [
    "дизайн интерьера Москва",
    "премиум интерьер",
    "дизайнер интерьера",
    "Евгения Оленич",
    "luxury interior design",
    "итальянская мебель",
  ],
  openGraph: {
    title: "Евгения Оленич — Дизайн интерьера премиум-класса",
    description:
      "Пространства, в которых живут лучше. 20+ лет, 150+ проектов.",
    type: "website",
    locale: "ru_RU",
    siteName: "Olenich Interior",
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F2EB",
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
      <body>{children}</body>
    </html>
  );
}
