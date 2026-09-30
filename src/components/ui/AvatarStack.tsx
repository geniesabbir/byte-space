import Image from "next/image";

export interface AvatarItem {
  src: string;
  alt?: string;
  name?: string;
}

export interface AvatarStackProps {
  /**
   * Array of avatar image paths or AvatarItem objects
   */
  avatars: (string | AvatarItem)[];
  /**
   * Optional badge count or text at the end (e.g. "26+", "2K+")
   */
  badge?: string | number;
  /**
   * Size variant following standard design system scale:
   * - xs: 20x20px
   * - sm: 28x28px (default for Course Cards)
   * - md: 30x30px (default for Hero Happy Students)
   * - lg: 36x36px
   */
  size?: "xs" | "sm" | "md" | "lg";
  /**
   * Maximum number of avatars to display before truncating
   */
  max?: number;
  /**
   * Background color of the badge counter (defaults to brand Electric Lime #D4FB20)
   */
  badgeBg?: string;
  /**
   * Text color of the badge counter (defaults to #161718)
   */
  badgeTextColor?: string;
  /**
   * Border ring color between overlapping avatars (defaults to white)
   */
  ringColor?: string;
  /**
   * Optional additional container class names
   */
  className?: string;
}

const sizeConfig = {
  xs: {
    avatar: "w-5 h-5",
    badgeText: "text-[8px]",
    overlap: "-space-x-1",
    border: "border",
  },
  sm: {
    avatar: "w-[28px] h-[28px]",
    badgeText: "text-[10px]",
    overlap: "-space-x-2",
    border: "border-2",
  },
  md: {
    avatar: "w-[30px] h-[30px]",
    badgeText: "text-[10px]",
    overlap: "-space-x-1.5",
    border: "border-2",
  },
  lg: {
    avatar: "w-9 h-9",
    badgeText: "text-[11px]",
    overlap: "-space-x-2.5",
    border: "border-2",
  },
};

/**
 * Industry-standard reusable AvatarStack / AvatarGroup component
 * Replaces hardcoded static images with real, accessible DOM elements.
 */
export default function AvatarStack({
  avatars,
  badge,
  size = "sm",
  max,
  badgeBg = "#D4FB20",
  badgeTextColor = "#161718",
  ringColor = "border-white",
  className = "",
}: AvatarStackProps) {
  const config = sizeConfig[size] || sizeConfig.sm;
  const visibleAvatars = typeof max === "number" ? avatars.slice(0, max) : avatars;

  return (
    <div
      role="group"
      aria-label="Student avatars"
      className={`flex items-center ${config.overlap} ${className}`}
    >
      {visibleAvatars.map((item, index) => {
        const src = typeof item === "string" ? item : item.src;
        const alt =
          typeof item === "string"
            ? `Student avatar ${index + 1}`
            : item.alt || item.name || `Student avatar ${index + 1}`;

        return (
          <div
            key={index}
            style={{ zIndex: index + 1 }}
            className={`relative ${config.avatar} rounded-full ${config.border} ${ringColor} overflow-hidden shrink-0 shadow-xs bg-[#E5E6E8] transition-transform duration-200 hover:scale-110 hover:z-40`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
        );
      })}

      {badge !== undefined && badge !== null && (
        <div
          style={{
            zIndex: visibleAvatars.length + 1,
            backgroundColor: badgeBg,
            color: badgeTextColor,
          }}
          className={`relative ${config.avatar} rounded-full ${config.border} ${ringColor} flex items-center justify-center font-bold ${config.badgeText} shrink-0 shadow-xs select-none transition-transform duration-200 hover:scale-110 hover:z-40`}
        >
          <span>{badge}</span>
        </div>
      )}
    </div>
  );
}
