import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-bold font-poppins text-2xl tracking-tight transition-opacity hover:opacity-90 ${className}`}
    >
      {/* ByteSpace Logo Mark */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          {/* Custom lowercase 'b' brand mark in electric lime */}
          <rect width="32" height="32" rx="8" fill="#CBFC01" />
          <path
            d="M10 8V24H16C19.3137 24 22 21.3137 22 18C22 14.6863 19.3137 12 16 12H14V8H10Z"
            fill="#003BE2"
          />
          <circle cx="16" cy="18" r="2.5" fill="#CBFC01" />
        </svg>
      </div>

      <span className={isLight ? "text-white" : "text-[#161718]"}>
        ByteSpace
      </span>
    </Link>
  );
}
