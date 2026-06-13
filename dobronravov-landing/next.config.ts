import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Этот проект самодостаточен и живёт в подпапке монорепо — фиксируем корень,
  // чтобы Next не подхватывал внешний lockfile.
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
