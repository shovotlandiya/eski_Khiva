export default function LogoIcon({ className = 'h-7 w-7' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 20V11a8 8 0 0 1 16 0v9" />
      <path d="M9 20v-6a3 3 0 0 1 6 0v6" />
      <path d="M3 20h18" />
      <path d="M12 3v1.5" />
    </svg>
  )
}