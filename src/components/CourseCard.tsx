import Link from "next/link";
import Image from "next/image";
import AvatarStack from "@/components/ui/AvatarStack";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="w-full max-w-[373px] bg-white rounded-[24px] border border-[#CED0D3] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div>
        {/* Course Thumbnail with exact Figma chips baked in */}
        <Link
          href={`/courses/${course.id}`}
          className="block relative w-full h-[195px] rounded-[12px] overflow-hidden bg-[#F5F5F6]"
        >
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
          />
        </Link>

        {/* Course Details */}
        <div className="mt-4 flex flex-col">
          {/* Row 1: Title and Star Rating */}
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/courses/${course.id}`}
              className="font-poppins font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-black flex-1 min-w-0 truncate hover:text-[#003BE2] transition-colors"
              title={course.title}
            >
              {course.title}
            </Link>
            <div className="flex items-center gap-1 shrink-0 pt-0.5">
              <span className="font-satoshi text-[18px] leading-[160%] text-[#4F4F4F]">
                {course.rating.toFixed(1)}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#CED0D3"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>

          {/* Row 2: Author */}
          <p className="mt-1 font-satoshi text-[12px] leading-[160%]">
            <span className="text-[#82868E]">by </span>
            <Link
              href="/creators/1"
              className="text-[#003BE2] hover:underline transition-colors"
            >
              {course.instructor}
            </Link>
          </p>

          {/* Row 3: Beginner Badge & Student Avatars Stack */}
          <div className="mt-4 flex items-center justify-between">
            {/* Beginner Level Pill */}
            <span className="h-[32px] px-3 py-1.5 rounded-full bg-[#F5F5F6] inline-flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 2.5V11.5M7 5.5V11.5M3.5 8.5V11.5"
                  stroke="#4B4C53"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-satoshi font-medium text-[12px] leading-[120%] text-[#4B4C53]">
                {course.level}
              </span>
            </span>

            {/* Reusable AvatarStack Component */}
            <AvatarStack
              avatars={[
                "/assets/avatars/avatar-1.jpg",
                "/assets/avatars/avatar-2.jpg",
                "/assets/avatars/avatar-3.jpg",
                "/assets/avatars/avatar-4.jpg",
              ]}
              badge="26+"
              size="sm"
            />
          </div>
        </div>
      </div>

      {/* Row 4: Pricing (Directly below without separator line, exactly as Figma) */}
      <div className="mt-4 flex items-baseline">
        <span className="font-poppins font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#003BE2]">
          ${course.price}
        </span>
        <span className="font-satoshi text-[12px] leading-[160%] text-[#4F4F4F]">
          /lifetime
        </span>
      </div>
    </div>
  );
}

