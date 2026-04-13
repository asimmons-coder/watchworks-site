interface Props {
  className?: string
}

export function Logo({ className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-brand-blue"
      >
        <circle cx="6" cy="10" r="2" fill="currentColor" />
        <circle cx="16" cy="10" r="2" fill="currentColor" />
        <circle cx="26" cy="10" r="2" fill="currentColor" />
        <circle cx="11" cy="22" r="2" fill="currentColor" />
        <circle cx="21" cy="22" r="2" fill="currentColor" />
        <path
          d="M6 10L11 22M11 22L16 10M16 10L21 22M21 22L26 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        />
      </svg>
      <div className="flex items-baseline font-display">
        <span className="text-2xl font-bold text-white">watchworks</span>
        <span className="text-2xl font-normal text-white/40 ml-1">ai</span>
      </div>
    </div>
  )
}
