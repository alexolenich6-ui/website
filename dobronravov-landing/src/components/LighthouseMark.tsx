/**
 * Монограмма-маяк — упрощённая интерпретация знака из брендбука.
 * Маяк = свет из тьмы, ложится в метафору «проводник через тёмное».
 * Тонкие линии, тёплое золото. Декоративный — aria-hidden.
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
    >
      <circle
        cx="24"
        cy="24"
        r="22.5"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      {/* Tower */}
      <path
        d="M21 33 L20 18 L28 18 L27 33 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Lantern room */}
      <path
        d="M20 18 L19 14 L29 14 L28 18 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M22 14 L22 11 L26 11 L26 14" stroke="currentColor" strokeWidth="1" />
      {/* Light beams */}
      <path
        d="M18 12 L13 10 M30 12 L35 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Ground / shore line */}
      <path
        d="M14 34 C18 35.5 30 35.5 34 34"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
