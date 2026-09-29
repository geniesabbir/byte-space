import Link from "next/link";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-[24px] border border-[#ECEFF2] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div>
        {/* Course Thumbnail with overlaid badges */}
        <Link href={`/courses/${course.id}`} className="block relative w-full h-[180px] rounded-[18px] overflow-hidden bg-neutral-100">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Bottom badge pills overlay */}
          <div className="absolute bottom-2.5 left-2 right-2 flex items-center justify-between gap-1 text-[11px] font-medium text-white/95">
            <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full whitespace-nowrap">
              {course.lessonsCount} Lessons
            </span>
            <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full whitespace-nowrap">
              {course.duration}
            </span>
            <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full whitespace-nowrap">
              {course.commentsCount} Comments
            </span>
          </div>
        </Link>

        {/* Course Info */}
        <div className="pt-4 pb-2">
          {/* Title and Rating */}
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/courses/${course.id}`}
              className="font-poppins font-semibold text-base text-[#161718] leading-snug line-clamp-1 hover:text-[#003BE2] transition-colors"
            >
              {course.title}
            </Link>
            <div className="flex items-center gap-1 text-sm font-semibold text-[#161718] shrink-0">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="w-4 h-4 fill-[#CBFC01] text-[#8CB400]" />
            </div>
          </div>

          {/* Instructor */}
          <p className="mt-1 text-xs text-[#82868E]">
            by{" "}
            <Link
              href="/creators/1"
              className="text-[#585A62] hover:text-[#003BE2] transition-colors"
            >
              {course.instructor}
            </Link>
          </p>

          {/* Tags & Avatars */}
          <div className="mt-4 flex items-center justify-between">
            {/* Level Pill */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F6F7] text-[#4B4C53] text-xs font-medium">
              <BarChart2 className="w-3.5 h-3.5 text-[#003BE2]" />
              {course.level}
            </span>

            {/* Student Avatars Pile */}
            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-neutral-200 relative">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80"
                  alt="Student avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-neutral-200 relative">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80"
                  alt="Student avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-neutral-200 relative">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80"
                  alt="Student avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="w-6 h-6 rounded-full border-2 border-white bg-[#161718] text-white text-[9px] font-bold flex items-center justify-center">
                26+
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Footer */}
      <div className="pt-3 mt-1 border-t border-[#ECEFF2] flex items-baseline gap-1">
        <span className="font-poppins font-bold text-xl text-[#003BE2]">
          ${course.price}
        </span>
        <span className="text-xs text-[#82868E]">/lifetime</span>
      </div>
    </div>
  );
}
