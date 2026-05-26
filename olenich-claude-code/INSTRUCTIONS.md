# OLENICH INTERIOR — ИНСТРУКЦИЯ ДЛЯ CLAUDE CODE

## ЗАДАЧА

Создать premium editorial website для дизайнера интерьера Евгении Оленич.
Стек: **Next.js + Tailwind CSS v4 + Framer Motion + TypeScript + Lenis (smooth scroll)**

Сайт должен выглядеть как **Awwwards-level premium editorial experience** — концепция «дорогая тишина» (expensive silence).

---

## БЫСТРЫЙ СТАРТ

```bash
npx create-next-app@latest olenich-interior --typescript --tailwind --app --src-dir
cd olenich-interior
npm install framer-motion lenis
```

Затем:
1. Скопировать изображения из `images/portfolio/` → `public/portfolio/`
2. Скопировать изображения из `images/about/` → `public/about/`
3. Заменить исходные файлы компонентами из `source-code/`

---

## СТЕК

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (`@tailwindcss/postcss`, конфиг через `@theme inline` в globals.css)
- **Framer Motion** (scroll-triggered animations, parallax, text-reveal)
- **Lenis** (smooth scroll — обёртка SmoothScroll.tsx)
- **Шрифты Google:** Cormorant Garamond (serif) + Inter (sans-serif)

---

## ЦВЕТОВАЯ ПАЛИТРА

```css
--color-espresso: #5B4A3E;  /* основной тёмный */
--color-shadow: #8A8077;     /* средний тон / текст */
--color-oat: #CBBFAF;        /* тёплый акцент */
--color-silk: #E8DED4;       /* светлый фон секций */
--color-veil: #F6F2EB;       /* основной фон body */
--color-cream: #FAF8F5;      /* самый светлый */
```

---

## ТИПОГРАФИКА

| Роль | Шрифт | Вес | Пример |
|------|-------|-----|--------|
| Hero-заголовки | Cormorant Garamond | 300 (light) | `text-[clamp(3.5rem,13vw,13rem)]` |
| Секционные заголовки | Cormorant Garamond | 300 | `text-[clamp(2.4rem,6vw,5.5rem)]` |
| Метки секций | Inter | 300 | `text-[9px] tracking-[0.6em] uppercase` |
| Body text | Inter | 300 | `text-[13px] leading-[1.9]` |
| Статистика | Cormorant Garamond | 300 | `text-[clamp(2rem,4vw,3.5rem)]` |

**Правила:**
- Hero — 13vw (clamp 3.5rem–13rem), leading-[0.85], tracking-[-0.04em]
- Метки — 9-10px, tracking-[0.5-0.6em], uppercase, opacity 30%
- Много воздуха: py-40 md:py-60 между секциями
- Линии-разделители: 0.5px, opacity 6%

---

## СТРУКТУРА СТРАНИЦЫ (page.tsx)

```
SmoothScroll wrapper
  Header (fixed, color-adaptive)
  Hero (110vh, fullscreen photo + massive typography + parallax)
  Manifesto (fullscreen centered quote + stats)
  ParallaxImage divider
  WhyMe (editorial index rows: 01-04)
  Portfolio (asymmetric gallery + parallax images)
  ParallaxImage divider
  Process (3-column grid on cream bg)
  Services (full-width rows, featured dark section)
  About (editorial spread: portrait + bio)
  Contact (split dark/light full-width)
  Footer (ultra-minimal single row)
```

---

## ОПИСАНИЕ КАЖДОЙ СЕКЦИИ

### 1. Header
- Fixed, тонкий (h-14 md:h-[72px])
- **Цвет-адаптивный:** cream text на hero → dark при скролле (scrollY > 60)
- Blur backdrop при скролле: `bg-veil/92 backdrop-blur-lg`
- Навигация: О себе, Портфолио, Услуги, Контакты + кнопка «Записаться»
- Мобильное меню: fullscreen overlay с stagger-анимацией

### 2. Hero
- `h-[110vh]`, полноэкранное фото (`/portfolio/sofa_3.jpg`)
- Scroll-linked parallax: scale 1→1.15, opacity 1→0.3
- Градиент: `bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent`
- Text-reveal анимация (y: "120%" → 0) для каждой строки:
  - «Пространства,» (основной цвет cream)
  - «в которых» (italic, cream/70)
  - «живут» (основной цвет cream)
- Внизу: подпись + CTA «Обсудить проект →»

### 3. Manifesto
- `min-h-screen`, центрировано
- Scroll-linked opacity (0→1→1→0) и y-сдвиг
- Цитата: «Я проектирую пространство, в котором вы живёте лучше — и которое стоит дороже»
- Статистика: 20+ лет | 150+ проектов | 15–30% рост

### 4. ParallaxImage (divider)
- `h-[50vh] md:h-[70vh]`
- Parallax: y -10%→10%, scale 1.1→1→1.05
- Overlay: `bg-espresso/15`

### 5. WhyMe
- Заголовок: «Почему выбирают *меня*»
- 4 editorial rows (border-t, grid 12-col):
  - 01 Психолог — «Два образования в психологии...»
  - 02 Юрист — «11 лет юридической практики...»
  - 03 Италия — «15 лет прямых отношений...»
  - 04 Инвестиция — «Правильный интерьер повышает стоимость на 15–30%»
- Hover: цвет текста меняется (shadow→espresso)

### 6. Portfolio
- Заголовок: «Избранные *проекты*»
- **Асимметричная сетка** (каждый ряд уникальный):
  - Row 1: Full-width hero (21:9)
  - Row 2: 5-col (3:4) + 7-col (4:3) со сдвигом md:pt-32
  - Row 3: 4-col (3:4) + 7-col (16:9)
  - Row 4: Centered 900px (16:10)
- Каждое изображение — ParallaxImg компонент (y: -5%→5%, scale: 1.08→1→1.03)
- Проекты:
  1. Софа Новочеремушкинская — Квартира · 85 м²
  2. Новогорск — Загородный дом · 220 м²
  3. ЖК Лица — Квартира · 62 м²
  4. Офис ВТБ Арена — Коммерческий · 120 м²
  5. Фитнесс Harmony — Коммерческий · 350 м²
  6. Ак. Пилюгина — Квартира · 110 м²

### 7. Process
- Фон: `bg-cream`
- Заголовок: «Шесть *шагов*»
- 3-column grid (md:grid-cols-2 lg:grid-cols-3)
- 6 шагов: Знакомство → Концепция → 3D → Чертежи → Реализация → Сдача

### 8. Services
- Заголовок: «Что я *предлагаю*»
- Full-width rows (grid 12-col):
  - Консультация — от 10 000 ₽
  - **Дизайн-проект** (featured, тёмный фон) — от 7 000 ₽/м²
  - Реализация под ключ — индивидуально
- Featured: `-mx-6 md:-mx-16 px-6 md:px-16 bg-espresso` с инвертированными цветами

### 9. About
- Заголовок: «Евгения *Оленич*»
- Grid: portrait 6-col (grayscale, parallax) + bio 5-col
- Биография 3 абзаца + статистика (20+ / 150+ / 3 образования)
- Ссылка: @olenich.interior

### 10. Contact
- Split layout: dark (espresso) + light (cream), `min-h-screen`
- Dark side: «Давайте *обсудим*» + контакты (телефон, email, город)
- Light side: форма (имя, телефон, о проекте) + кнопка + WhatsApp/Telegram

### 11. Footer
- Ultra-minimal single row
- Olenich | Instagram · Telegram · WhatsApp | © 2026

---

## АНИМАЦИИ

- **Text-reveal:** `y: "120%" → 0`, duration 1.4s, ease [0.16, 1, 0.3, 1]
- **Fade-up:** `opacity: 0, y: 40 → opacity: 1, y: 0`, viewport once
- **Scroll-linked parallax:** useScroll + useTransform (Framer Motion)
- **Lenis smooth scroll:** duration 1.4, easing `1.001 - 2^(-10t)`
- **Hover transitions:** duration-500 to duration-700, colors only

---

## АНТИ-ПАТТЕРНЫ (НЕЛЬЗЯ)

- Canva aesthetic, generic webflow style
- Карточки с рамками, box-heavy design
- Яркие акценты, золото, gradient'ы
- Aggressive animations, flashy transitions
- Одинаковые секции, повторяющиеся layout patterns
- Слишком много текста в одном блоке
- Startup UI, инфобизнес стиль

---

## ФАЙЛЫ ИЗОБРАЖЕНИЙ

### portfolio/
- sofa_1.jpg, sofa_2.jpg, sofa_3.jpg, sofa_4.jpg (Софа Новочеремушкинская)
- novogorsk_1.jpg, novogorsk_2.jpg, novogorsk_3.jpg, novogorsk_4.jpg (Новогорск)
- lica_1.jpg, lica_2.jpg, lica_3.jpg, lica_4.jpg (ЖК Лица)
- vtb_1.jpg, vtb_2.jpg, vtb_3.jpg, vtb_4.jpg (Офис ВТБ Арена)
- harmony_1.jpg, harmony_2.jpg, harmony_3.jpg, harmony_4.jpg (Фитнесс Harmony)
- pilyugina_1.jpg, pilyugina_2.jpg, pilyugina_3.jpg, pilyugina_4.jpg (Ак. Пилюгина)

### about/
- evgenia-portrait.png (основной портрет, используется в About секции)
- evgenia-casual.png
- evgenia-full.png

---

## КОНТАКТЫ (ЗАГЛУШКИ — ЗАМЕНИТЬ)

- Телефон: +7 (900) 123-45-67
- Email: info@olenich-interior.ru
- WhatsApp: wa.me/79001234567
- Telegram: t.me/olenich_interior
- Instagram: @olenich.interior

---

## ФИНАЛЬНАЯ ПРОВЕРКА

Перед завершением убедиться:
- Выглядит ли как premium editorial experience?
- Есть ли ощущение «дорогой тишины»?
- Каждая секция имеет УНИКАЛЬНЫЙ layout?
- Typography system как у luxury бренда?
- Мобильная версия — premium, а не «урезанная»?
- Хочется ли доверить этому бренду объект за десятки миллионов?
