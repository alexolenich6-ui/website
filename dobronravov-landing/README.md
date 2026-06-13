# Давид Добронравов — лендинг

**Превью:** https://alexolenich6-ui.github.io/website/ (GitHub Pages, `noindex` на черновике)

Одностраничный лендинг для клинического психолога Давида Добронравова.
Единственное целевое действие — **переход в личку Telegram** на бесплатный
разговор-знакомство. Собран по брифу «Бриф для Claude Code — лендинг Давида
Добронравова».

## Стек

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (через `@tailwindcss/postcss`, токены в `globals.css`)
- **Framer Motion** — scroll-reveal, parallax, аккордеон (только fade / плавно)
- **Lenis** — smooth scroll (отключается при `prefers-reduced-motion`)
- **Шрифты:** Cormorant Garamond (заголовки) + Inter (текст), кириллица

## Запуск

```bash
cd dobronravov-landing
npm install
npm run dev      # http://localhost:3000
npm run build    # прод-сборка
```

## Структура секций (`src/app/page.tsx`)

1. **Hero** — «Вернуться к себе» + CTA
2. **Recognition** — «тебе знакомо?»
3. **BigIdea** — переобрамление симптома
4. **About** — путь, регалии, глубина (⏳ ждёт портреты)
5. **Approach** — как работаю + CTA
6. **Audience** — для кого / не для кого (фильтр)
7. **Reviews** — цитаты + сетка скринов (⏳ ждёт скрины)
8. **Faq** — возражения + цена + границы «психолог ≠ врач»
9. **FinalCta** — финальная кнопка → Telegram

## ⚠️ Перед публикацией — заполнить (§9 брифа)

Все плейсхолдеры помечены `TODO` в коде. Главные точки:

- [ ] **Telegram username** Давида → `src/lib/contacts.ts` (`telegramDmUrl`, `telegramHandle`).
- [ ] Telegram-канал и Instagram → `src/lib/contacts.ts`.
- [ ] Формулировка стажа (§9.3) → `src/components/Hero.tsx`.
- [ ] Соц-доказательство (§9.2) — добавить, если согласовано (сейчас намеренно без числа, этика §7).
- [ ] Текст кнопки (§9.4) → `src/lib/contacts.ts` (`CTA_LABEL`).
- [ ] Юр.инфо для футера (§9.5) → `src/lib/contacts.ts` (`legalNote`).
- [ ] Фото и скрины отзывов → см. **ASSETS.md**.
- [ ] Яндекс.Метрика → `src/app/layout.tsx` (заглушка готова).
- [ ] OG-обложка `public/og/cover.jpg` → раскомментировать в `layout.tsx`.

## Этика (соблюдено в текстах, §7)

Психолог, а не врач — нигде не обещается медицинское лечение. Отзывы —
обезличенно. Без гарантий результата, без срочности и манипуляций. Вера — как
часть пути, без проповеди.
