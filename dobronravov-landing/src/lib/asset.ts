// На GitHub Pages сайт отдаётся под /website, но next/image с unoptimized
// не добавляет basePath к src — поэтому префикс подставляем вручную.
// Локально NEXT_PUBLIC_BASE_PATH пуст, на Pages — "/website".
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
