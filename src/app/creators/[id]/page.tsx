"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SlidersHorizontal,
  ChevronDown,
  UserCheck,
  UserPlus,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { coursesData } from "@/data/courses";

export default function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(12);
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedSort, setSelectedSort] = useState("Most relevant");

  const creatorCourses = coursesData.slice(0, 6);

  const filteredCourses = creatorCourses.filter((course) => {
    if (selectedLevel === "All Levels") return true;
    return course.level === selectedLevel;
  });

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#161718] flex flex-col justify-between">
      <div>
        {/* Creator Banner with Persian Blue Grid */}
        <section className="relative w-full bg-grid-blue text-white pb-16">
          <Navbar variant="light" />

          <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-8">
            <div className="max-w-4xl space-y-6">
              {/* Avatar + Name + Creator Badge */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-lg bg-neutral-200 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                    alt="PurePearl Studio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-white">
                      PurePearl Studio
                    </h1>
                    <span className="bg-[#CBFC01] text-[#161718] text-xs font-semibold px-3 py-0.5 rounded-full">
                      Creator
                    </span>
                  </div>
                  <p className="text-sm text-white/80 mt-1">
                    Passionate UI/UX, Web designer
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-3xl">
                Welcome to the creative world of PurePearl Studio. Here,
                you&apos;ll discover the passion, expertise, and inspiration that
                drive my creative journey. Let&apos;s explore and learn together!
                Dive into my creative portfolio, showcasing a glimpse of my
                artistic endeavors. From digital designs to multimedia projects,
                each piece tells a unique story. Explore the world of creativity
                with me.
              </p>

              {/* Stats Pills & Follow Button */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    <strong className="font-bold text-white mr-1">3</strong>{" "}
                    Products
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    <strong className="font-bold text-white mr-1">
                      {followerCount}
                    </strong>{" "}
                    Followers
                  </span>
                </div>

                <button
                  onClick={handleFollowToggle}
                  className={`inline-flex items-center gap-2 px-8 py-2.5 rounded-full font-poppins font-semibold text-sm transition-all cursor-pointer shadow-md ${
                    isFollowing
                      ? "bg-white text-[#003BE2]"
                      : "bg-[#CBFC01] text-[#161718] hover:brightness-95"
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <UserCheck className="w-4 h-4" />
                      Following
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4" />
                      Follow
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Courses Grid Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#ECEFF2]">
              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DAE0E5] text-sm font-medium text-[#4B4C53] hover:border-[#003BE2]">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter
                </button>

                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-2 rounded-full border border-[#DAE0E5] text-sm font-medium text-[#4B4C53] bg-white outline-none cursor-pointer"
                >
                  <option value="All Levels">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>

                <div className="px-4 py-2 rounded-full border border-[#DAE0E5] text-sm font-medium text-[#4B4C53] flex items-center gap-1.5 cursor-pointer">
                  <span>Category</span>
                  <ChevronDown className="w-4 h-4 text-[#82868E]" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#82868E]">Sort by:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="px-4 py-2 rounded-full border border-[#DAE0E5] text-sm font-medium text-[#4B4C53] bg-white outline-none cursor-pointer"
                >
                  <option value="Most relevant">Most relevant</option>
                  <option value="Highest rated">Highest rated</option>
                  <option value="Newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Courses 3x2 Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
