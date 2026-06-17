// ──────────────────────────────────────────────────────────────────────────
// Контакты и единое целевое действие.
// ⚠️ ОТКРЫТЫЕ ВОПРОСЫ (§9 брифа) — заполнить перед публикацией:
//   1. telegramDmUrl — реальный username Давида для личной переписки.
//   2. telegramChannelUrl — ссылка на Telegram-канал (если есть).
//   3. instagram / контакты / юр.инфо в футере.
// Все плейсхолдеры помечены TODO.
// ──────────────────────────────────────────────────────────────────────────

export const CONTACTS = {
  name: "Давид Добронравов",
  role: "Клинический психолог",

  telegramDmUrl: "https://t.me/DavidDobronravov",
  telegramHandle: "@DavidDobronravov",

  // TODO(§9): ссылка на Telegram-канал (необязательно).
  telegramChannelUrl: "",

  instagramHandle: "@david.dobronravov",
  instagramUrl: "https://instagram.com/david.dobronravov",

  // TODO(§9.5): контакты / юр.инфо для футера (самозанятость / ИНН).
  legalNote: "",
} as const;

// Единственный целевой CTA. Финальная формулировка от Давида.
export const CTA_LABEL = "Поговорить";
