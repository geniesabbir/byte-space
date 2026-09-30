import Image from "next/image";
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
      className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
    >
      <Image
        src={isLight ? "/assets/logo.png" : "/assets/logo-dark.png"}
        alt="ByteSpace"
        width={171}
        height={37}
        priority
        className="h-9 w-auto object-contain"
      />
    </Link>
  );
}
