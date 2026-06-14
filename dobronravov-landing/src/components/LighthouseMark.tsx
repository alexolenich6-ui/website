/**
 * Монограмма-маяк — по брендбуку (раздел 09): тонкая линия, маяк на скале
 * с вьющейся дорогой к нему внутри кольца, свет наверху. Тёплое золото.
 * Декоративный — aria-hidden.
 */
export default function LighthouseMark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Кольцо */}
      <circle cx="24" cy="24" r="21.5" strokeOpacity="0.55" />

      {/* Свет наверху */}
      <circle cx="24" cy="13.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M24 9.4V8M19.6 11.6l-1.3-.7M28.4 11.6l1.3-.7" strokeOpacity="0.7" />

      {/* Крыша фонаря */}
      <path d="M21.2 14.2 24 10.8l2.8 3.4" />
      {/* Фонарная комната */}
      <path d="M21.2 14.2h5.6l-.5 3h-4.6z" />
      {/* Галерея */}
      <path d="M20.6 17.2h6.8" />
      {/* Башня, сужается кверху */}
      <path d="M21.4 17.2 20 30h8l-1.4-12.8" />
      {/* Поясок на башне */}
      <path d="M20.7 23.6h6.6" strokeOpacity="0.6" />

      {/* Скала / основание */}
      <path d="M12 30.5c4 2.2 20 2.2 24 0" strokeOpacity="0.7" />

      {/* Вьющаяся дорога к маяку (расширяется к низу) */}
      <path d="M22.8 30.5C21 34 15.5 35.5 13 41.5" />
      <path d="M25.2 30.5C26.5 35 22.5 37.5 20.5 42" />
    </svg>
  );
}
