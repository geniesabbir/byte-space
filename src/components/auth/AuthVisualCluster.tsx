"use client";

import Image from "next/image";
import CourseCard from "@/components/CourseCard";
import { HappyStudentsCard } from "@/components/home/HeroCards";
import { coursesData } from "@/data/courses";

interface AuthVisualClusterProps {
  className?: string;
}

/**
 * Reusable, industry-standard AuthVisualCluster component.
 * Replaces the monolithic auth-visual image with real, accessible DOM elements
 * matching Figma Group 8 (Login) & Group 7 (Register):
 * - Back Course Card: "Build Digital Asset" (CourseCard, 373x384)
 * - Front Course Card: "the Power of Big Data" (CourseCard, 373x384 with yellow star)
 * - Happy Students Card: Lime variant with live AvatarStack (258px width)
 * - 3D Ornaments: Individual floating 3D assets (torus, pyramid, spring)
 */
export default function AuthVisualCluster({ className = "" }: AuthVisualClusterProps) {
  // Course 2: "Build Digital Asset", Course 3: "the Power of Big Data"
  const backCourse = coursesData.find((c) => c.id === "2") || coursesData[1];
  const frontCourse = coursesData.find((c) => c.id === "3") || coursesData[2];

  return (
    <div
      className={`relative w-full max-w-[548px] h-[380px] sm:h-[490px] lg:h-[585px] flex items-start justify-center select-none ${className}`}
    >
      {/* Scaled canvas to ensure responsiveness on small screens while maintaining 100% Figma pixel accuracy */}
      <div className="relative w-[548px] h-[585px] origin-top scale-[0.65] sm:scale-[0.84] lg:scale-100 shrink-0 pointer-events-auto">
        {/* 1. Back Course Card ("Build Digital Asset") */}
        {/* Figma: left 25px (122-97), top 89px (394-305), w 373px, h 384px, z-10 */}
        <div className="absolute left-[25px] top-[89px] w-[373px] z-10 pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.18)] rounded-[24px]">
          <CourseCard
            course={backCourse}
            className="w-[373px] h-[384px] shadow-none"
          />
        </div>

        {/* 2. Lime Torus 3D Ornament */}
        {/* Figma: left 54px (151-97), top 15px (320-305), w 146px, h 146px, z-25 */}
        <div className="absolute left-[54px] top-[15px] w-[146px] h-[146px] z-25 pointer-events-none transition-transform duration-700 hover:rotate-12">
          <Image
            src="/assets/auth/lime-torus.png"
            alt="Lime Torus 3D shape"
            width={146}
            height={146}
            className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
          />
        </div>

        {/* 3. Front Course Card ("the Power of Big Data") */}
        {/* Figma: left 136px (233-97), top 0px (305-305), w 373px, h 384px, z-20 */}
        <div className="absolute left-[136px] top-0 w-[373px] z-20 pointer-events-auto shadow-[0_25px_60px_rgba(0,0,0,0.25)] rounded-[24px]">
          <CourseCard
            course={frontCourse}
            starColor="#FFC107"
            className="w-[373px] h-[384px] shadow-none"
          />
        </div>

        {/* 4. White Spring 3D Ribbon */}
        {/* Figma: left 373px (470-97), top 315px (626-305), w 165px, h 215px, z-25 */}
        <div className="absolute left-[360px] top-[305px] w-[165px] h-[215px] z-25 pointer-events-none transition-transform duration-700 hover:-rotate-12">
          <Image
            src="/assets/auth/white-spring.png"
            alt="White Spring 3D shape"
            width={165}
            height={215}
            className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* 5. Happy Students Card (Lime Green Variant) */}
        {/* Figma: left 251px (348-97), top 435px (740-305), w 258px, hug h, z-30 */}
        <div className="absolute left-[251px] top-[435px] w-[258px] z-30 pointer-events-auto">
          <HappyStudentsCard
            variant="lime"
            className="w-[258px] shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
          />
        </div>

        {/* 6. Lime Pyramid 3D Ornament */}
        {/* Figma: left 0px (97-97), top 397px (702-305), w 188px, h 188px, z-35 */}
        <div className="absolute left-0 top-[397px] w-[188px] h-[188px] z-35 pointer-events-none transition-transform duration-700 hover:rotate-6">
          <Image
            src="/assets/auth/lime-pyramid.png"
            alt="Lime Pyramid 3D shape"
            width={188}
            height={188}
            className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </div>
  );
}
