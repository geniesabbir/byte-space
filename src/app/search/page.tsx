"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import CategoryPills from "@/components/CategoryPills";
import { coursesData, categoriesList, Course } from "@/data/courses";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "Featured";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");
  const [selectedSort, setSelectedSort] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);

  // Generate 18 items by expanding coursesData for a rich 3x6 grid
  const allSearchCourses = useMemo(() => {
    const list: Course[] = [];
    for (let i = 0; i < 3; i++) {
      coursesData.forEach((c) => {
        list.push({
          ...c,
          id: `${c.id}-${i}`,
          title: i === 0 ? c.title : `${c.title} (Vol ${i + 1})`,
        });
      });
    }
    return list;
  }, []);

  const filteredCourses = useMemo(() => {
    return allSearchCourses.filter((course) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "Featured" ||
        course.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesLevel =
        selectedLevel === "All Levels" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [allSearchCourses, searchQuery, selectedCategory, selectedLevel]);

  const itemsPerPage = 18;
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage) || 1;
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-white text-[#161718] flex flex-col justify-between">
      <div>
        {/* Header Hero Section */}
        <section className="relative w-full bg-grid-blue text-white pb-16">
          <Navbar variant="light" />

          <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-8 flex flex-col items-center text-center">
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white">
              Find Your Next Course
            </h1>

            {/* Main Search Bar with dropdown & button */}
            <div className="mt-8 w-full max-w-2xl bg-white rounded-full p-2 pl-6 flex items-center shadow-2xl">
              <Search className="w-5 h-5 text-[#82868E] shrink-0 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search courses, keywords, instructors"
                className="w-full bg-transparent text-[#161718] placeholder:text-[#82868E] text-sm md:text-base outline-none pr-3"
              />

              <div className="hidden sm:flex items-center gap-1.5 px-4 py-2 border-l border-[#DAE0E5] text-sm text-[#4B4C53] font-medium whitespace-nowrap cursor-pointer">
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 text-[#82868E]" />
              </div>

              <button
                type="button"
                className="px-6 md:px-8 py-3 rounded-full bg-[#CBFC01] text-[#161718] font-poppins font-semibold text-sm hover:brightness-95 transition-all cursor-pointer shrink-0"
              >
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
            {/* Filter Controls Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#ECEFF2]">
              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DAE0E5] text-sm font-medium text-[#4B4C53] hover:border-[#003BE2]">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter
                </button>

                <select
                  value={selectedLevel}
                  onChange={(e) => {
                    setSelectedLevel(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="px-4 py-2 rounded-full border border-[#DAE0E5] text-sm font-medium text-[#4B4C53] bg-white outline-none cursor-pointer"
                >
                  <option value="All Levels">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>

                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="px-4 py-2 rounded-full border border-[#DAE0E5] text-sm font-medium text-[#4B4C53] bg-white outline-none cursor-pointer"
                >
                  <option value="Featured">All Categories</option>
                  {categoriesList
                    .filter((c) => c !== "Featured")
                    .map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                </select>
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

            {/* Category Pills Navigation */}
            <div className="pt-6">
              <CategoryPills
                categories={categoriesList}
                selectedCategory={selectedCategory}
                onSelectCategory={(cat) => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
              />
            </div>

            {/* 3x6 Courses Grid */}
            <div className="mt-8">
              {paginatedCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center">
                  <h3 className="font-poppins font-bold text-xl text-[#161718]">
                    No courses found
                  </h3>
                  <p className="mt-2 text-sm text-[#82868E]">
                    Try adjusting your search filters or category selections.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("Featured");
                      setSelectedLevel("All Levels");
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#CBFC01] text-black font-semibold text-sm"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-full border border-[#DAE0E5] flex items-center justify-center text-[#4B4C53] hover:border-[#003BE2] hover:text-[#003BE2] disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {[...Array(Math.min(totalPages, 5))].map((_, idx) => {
                  const pageNum = idx + 1;
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[#CBFC01] text-[#161718]"
                          : "border border-[#DAE0E5] text-[#4B4C53] hover:border-[#003BE2] hover:text-[#003BE2]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-full border border-[#DAE0E5] flex items-center justify-center text-[#4B4C53] hover:border-[#003BE2] hover:text-[#003BE2] disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <SearchPageContent />
    </Suspense>
  );
}
