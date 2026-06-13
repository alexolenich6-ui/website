import type { NextConfig } from "next";

// На GitHub Pages проект отдаётся под /<repo>/ — поэтому в CI включаем
// статический экспорт и basePath. Локально (npm run dev / build) — обычный
// рут, без basePath, чтобы ничего не менялось при разработке.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/website" : "";

const nextConfig: NextConfig = {
  // Самодостаточный проект в подпапке монорепо — фиксируем корень Turbopack,
  // чтобы Next не подхватывал внешний lockfile.
  turbopack: {
    root: __dirname,
  },
  ...(isPages ? { output: "export" as const, basePath, assetPrefix: basePath } : {}),
  // Базовый путь пробрасываем в клиент для возможных ссылок на ассеты.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    formats: ["image/avif", "image/webp"],
    // Оптимизатор Next недоступен при статическом экспорте.
    unoptimized: isPages,
  },
};

export default nextConfig;
