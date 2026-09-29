"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  BarChart2,
  Users,
  Share2,
  Play,
  CheckCircle2,
  BookOpen,
  Video,
  Award,
  MessageSquare,
  Lock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { coursesData, Course } from "@/data/courses";

interface CourseDetailViewProps {
  initialCourseId: string;
  initialTab?: "about" | "lessons" | "reviews";
}

export default function CourseDetailView({
  initialCourseId,
  initialTab = "about",
}: CourseDetailViewProps) {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">(
    initialTab
  );
  const [selectedStarFilter, setSelectedStarFilter] = useState<number | null>(
    null
  );
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Find course or default to Course 2 ("Build Digital Asset")
  const course: Course =
    coursesData.find((c) => c.id === initialCourseId) || coursesData[1];

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      alert("Course link copied to clipboard!");
    }
  };

  const sneakPeakImages = [
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80",
  ];

  const filteredReviews =
    course.reviews?.filter((r) =>
      selectedStarFilter === null ? true : r.rating === selectedStarFilter
    ) || [];

  return (
    <div className="min-h-screen bg-white text-[#161718] flex flex-col justify-between">
      <div>
        {/* Header Hero Section (Persian Blue Grid) */}
        <section className="relative w-full bg-grid-blue text-white pb-16">
          <Navbar variant="light" />

          <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-8">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="max-w-3xl space-y-4">
                <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[44px] text-white leading-tight">
                  {course.title}
                </h1>
                <p className="text-white/85 text-base sm:text-lg">
                  {course.subtitle ||
                    "Unlock the Power of Digital Creation with Expert Guidance"}
                </p>

                <p className="text-sm text-white/70">
                  by{" "}
                  <Link
                    href="/creators/1"
                    className="text-white font-medium hover:underline"
                  >
                    {course.instructor}
                  </Link>
                </p>

                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    <BarChart2 className="w-3.5 h-3.5 text-[#CBFC01]" />
                    {course.level}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    <Star className="w-3.5 h-3.5 fill-[#CBFC01] text-[#CBFC01]" />
                    {course.rating.toFixed(1)} ({course.reviewCount || 172} reviews)
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    <Users className="w-3.5 h-3.5 text-[#CBFC01]" />
                    {course.studentCount || 199} Students
                  </span>
                </div>
              </div>

              {/* Share button */}
              <button
                onClick={handleShare}
                className="self-start inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#CBFC01] text-[#161718] font-poppins font-semibold text-sm hover:brightness-95 transition-all shadow-md cursor-pointer shrink-0"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Video Player Preview Frame */}
            <div className="mt-12 relative w-full h-[320px] sm:h-[440px] md:h-[520px] rounded-[32px] overflow-hidden bg-black shadow-2xl border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=85"
                alt="Course preview video"
                fill
                priority
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#003BE2] shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Play video preview"
                >
                  <Play className="w-10 h-10 fill-current ml-1" />
                </button>
              </div>

              {isPlayingVideo && (
                <div className="absolute inset-0 bg-black/95 z-30 flex flex-col items-center justify-center p-6 text-center text-white">
                  <p className="text-xl font-poppins font-bold">
                    Now Playing: Introduction to {course.title}
                  </p>
                  <p className="text-sm text-neutral-400 mt-2">
                    High Definition 1080p Stream
                  </p>
                  <button
                    onClick={() => setIsPlayingVideo(false)}
                    className="mt-6 px-6 py-2 rounded-full bg-[#CBFC01] text-black font-semibold text-sm"
                  >
                    Close Preview
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content & Sticky Sidebar Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column (Tabs & Details) */}
              <div className="lg:col-span-8">
                {/* Tab Pill Buttons */}
                <div className="flex items-center gap-3 border-b border-[#ECEFF2] pb-6">
                  <button
                    onClick={() => setActiveTab("about")}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                      activeTab === "about"
                        ? "bg-[#CBFC01] text-[#161718]"
                        : "bg-white border border-[#DAE0E5] text-[#585A62] hover:border-[#003BE2]"
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => setActiveTab("lessons")}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                      activeTab === "lessons"
                        ? "bg-[#CBFC01] text-[#161718]"
                        : "bg-white border border-[#DAE0E5] text-[#585A62] hover:border-[#003BE2]"
                    }`}
                  >
                    Lesson
                  </button>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                      activeTab === "reviews"
                        ? "bg-[#CBFC01] text-[#161718]"
                        : "bg-white border border-[#DAE0E5] text-[#585A62] hover:border-[#003BE2]"
                    }`}
                  >
                    Reviews
                  </button>
                </div>

                {/* TAB 1: ABOUT */}
                {activeTab === "about" && (
                  <div className="mt-8 space-y-10">
                    {/* Description */}
                    <div>
                      <h3 className="font-poppins font-bold text-2xl text-[#161718]">
                        Description
                      </h3>
                      <div className="mt-4 space-y-4 text-[#585A62] text-sm sm:text-base leading-relaxed">
                        {course.description ? (
                          course.description.map((p, idx) => (
                            <p key={idx}>{p}</p>
                          ))
                        ) : (
                          <>
                            <p>
                              Embark on an enlightening exploration into the
                              world of digital creation with our comprehensive
                              course. This transformative learning experience
                              invites you to delve deep into the intricacies of
                              crafting impactful digital content.
                            </p>
                            <p>
                              In the initial modules, you&apos;ll establish a
                              solid foundation by immersing yourself in the
                              foundational concepts that form the backbone of
                              digital asset creation.
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Sneak Peak Gallery */}
                    <div>
                      <h3 className="font-poppins font-bold text-2xl text-[#161718]">
                        Sneak Peak
                      </h3>
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {sneakPeakImages.map((src, i) => (
                          <div
                            key={i}
                            className="relative h-28 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm border border-[#ECEFF2]"
                          >
                            <Image
                              src={src}
                              alt={`Sneak peak preview ${i + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Points */}
                    <div>
                      <h3 className="font-poppins font-bold text-2xl text-[#161718]">
                        Key Points
                      </h3>
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(course.keyPoints || [
                          "Foundational Concepts",
                          "Design Principles Mastery",
                          "Advanced Techniques in Digital Creation",
                          "Project Showcase and Critique",
                          "Optimizing for Various Platforms",
                          "Digital Asset Management Best Practices",
                          "Monetization Strategies",
                          "Capstone Project: Building Your Portfolio",
                        ]).map((pt, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#003BE2] text-white flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm font-medium text-[#161718]">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: LESSONS */}
                {activeTab === "lessons" && (
                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-poppins font-bold text-2xl text-[#161718]">
                        Explore the Modules
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-[#585A62]">
                        Immerse yourself in the course content as we break down
                        each module into comprehensive lessons, providing
                        practical insights and hands-on experiences.
                      </p>
                    </div>

                    {/* Lesson Modules List */}
                    <div className="space-y-4">
                      <h4 className="font-poppins font-bold text-lg text-[#161718]">
                        Lesson List
                      </h4>
                      {(
                        course.modules || [
                          {
                            id: 1,
                            title: "Module 1: Introduction to Digital Assets",
                            duration: "12 mins",
                            description:
                              "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation.",
                          },
                          {
                            id: 2,
                            title: "Module 2: Design Principles for Impact",
                            duration: "21 mins",
                            description:
                              "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills.",
                          },
                          {
                            id: 4,
                            title: "Module 4: User-Centric Design Strategies",
                            duration: "28 mins",
                            description:
                              "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
                          },
                          {
                            id: 5,
                            title: "Module 5: Interactive Media and Engagement",
                            duration: "34 mins",
                            description:
                              "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
                          },
                          {
                            id: 6,
                            title: "Module 6: Project Showcase and Critique",
                            duration: "45 mins",
                            description:
                              "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
                          },
                          {
                            id: 7,
                            title:
                              "Module 7: Optimizing Digital Assets for Various Platforms",
                            duration: "30 mins",
                            description:
                              "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
                          },
                        ]
                      ).map((m) => (
                        <div
                          key={m.id}
                          className="bg-white rounded-2xl border border-[#ECEFF2] p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                        >
                          <div className="w-12 h-12 rounded-xl bg-[#CBFC01] flex items-center justify-center text-[#161718] shrink-0 mt-0.5">
                            <Video className="w-6 h-6" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <h5 className="font-poppins font-semibold text-base text-[#161718]">
                                {m.title}
                              </h5>
                              <span className="text-xs text-[#82868E] ml-2 shrink-0">
                                {m.duration}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#585A62] leading-relaxed">
                              {m.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Lesson Content Notice */}
                    <div className="pt-6 border-t border-[#ECEFF2] space-y-2">
                      <h4 className="font-poppins font-bold text-lg text-[#161718]">
                        Lesson Content
                      </h4>
                      <p className="text-sm text-[#585A62] leading-relaxed">
                        Engage with each lesson through captivating video
                        content, detailed textual explanations, and interactive
                        elements. Download resources, complete assignments, and
                        test your understanding with quizzes.
                      </p>
                    </div>

                    {/* Lesson Progress Tracking */}
                    <div className="pt-6 border-t border-[#ECEFF2] space-y-4">
                      <h4 className="font-poppins font-bold text-lg text-[#161718]">
                        Lesson Progress Tracking
                      </h4>
                      <p className="text-sm text-[#585A62] leading-relaxed">
                        Witness your growth as you complete lessons, with an
                        intuitive progress tracking feature guiding you through
                        your learning journey.
                      </p>

                      <div className="bg-[#F5F6F7] rounded-2xl p-6 border border-[#ECEFF2] max-w-md">
                        <p className="text-xs text-[#585A62] font-medium">
                          Learning Progress
                        </p>
                        <p className="font-poppins font-bold text-2xl text-[#161718] mt-1">
                          55%
                        </p>
                        <div className="w-full bg-[#DAE0E5] h-2.5 rounded-full mt-3 overflow-hidden">
                          <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: REVIEWS */}
                {activeTab === "reviews" && (
                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-poppins font-bold text-2xl text-[#161718]">
                        What Learners Are Saying
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-[#585A62] leading-relaxed">
                        Discover what our learners have to say about their
                        experience with &apos;{course.title}&apos;. Read reviews
                        and ratings from individuals who have embarked on the
                        transformative journey of mastering digital asset
                        creation.
                      </p>
                    </div>

                    {/* Ratings Summary Card */}
                    <div className="bg-white rounded-2xl border border-[#ECEFF2] p-6 shadow-sm flex flex-col sm:flex-row items-center gap-8">
                      {/* Lime Rating Square */}
                      <div className="w-32 h-32 rounded-2xl bg-[#CBFC01] flex flex-col items-center justify-center shrink-0">
                        <span className="text-xs font-semibold text-black uppercase tracking-wider">
                          Ratings
                        </span>
                        <span className="font-poppins font-bold text-4xl text-black mt-1">
                          4.7
                        </span>
                      </div>

                      {/* Star Breakdown Bars */}
                      <div className="w-full space-y-2">
                        {[
                          { star: 5, count: 720, pct: "85%" },
                          { star: 4, count: 120, pct: "15%" },
                          { star: 3, count: 21, pct: "5%" },
                          { star: 2, count: 12, pct: "2%" },
                          { star: 1, count: 16, pct: "3%" },
                        ].map((row) => (
                          <div
                            key={row.star}
                            className="flex items-center gap-3 text-xs text-[#585A62]"
                          >
                            <div className="flex items-center gap-0.5 w-16">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < row.star
                                      ? "fill-[#161718] text-[#161718]"
                                      : "text-neutral-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="flex-1 bg-[#ECEFF2] h-2 rounded-full overflow-hidden">
                              <div
                                className="bg-[#161718] h-full rounded-full"
                                style={{ width: row.pct }}
                              />
                            </div>
                            <span className="w-8 text-right font-medium">
                              {row.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Individual Reviews Filter */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-poppins font-bold text-lg text-[#161718]">
                          Individual Reviews:
                        </h4>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => setSelectedStarFilter(null)}
                          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            selectedStarFilter === null
                              ? "bg-[#CBFC01] text-[#161718]"
                              : "bg-white border border-[#DAE0E5] text-[#585A62]"
                          }`}
                        >
                          All rating
                        </button>
                        {[5, 4, 3, 2, 1].map((s) => (
                          <button
                            key={s}
                            onClick={() => setSelectedStarFilter(s)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                              selectedStarFilter === s
                                ? "bg-[#CBFC01] text-[#161718]"
                                : "bg-white border border-[#DAE0E5] text-[#585A62]"
                            }`}
                          >
                            <Star className="w-3 h-3 fill-current" />
                            {s}
                          </button>
                        ))}
                      </div>

                      {/* Review Cards */}
                      <div className="space-y-4 mt-6">
                        {filteredReviews.map((rev) => (
                          <div
                            key={rev.id}
                            className="bg-white rounded-2xl border border-[#ECEFF2] p-6 shadow-sm space-y-3"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
                                  <Image
                                    src={rev.avatar}
                                    alt={rev.author}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="font-poppins font-semibold text-sm text-[#161718]">
                                    {rev.author}
                                  </p>
                                  <p className="text-xs text-[#82868E]">
                                    {rev.role}
                                  </p>
                                </div>
                              </div>
                              <span className="text-xs text-[#82868E]">
                                {rev.date}
                              </span>
                            </div>

                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3.5 h-3.5 ${
                                    i < rev.rating
                                      ? "fill-[#CBFC01] text-[#8CB400]"
                                      : "text-neutral-300"
                                  }`}
                                />
                              ))}
                            </div>

                            <p className="text-sm text-[#4B4C53] leading-relaxed">
                              &ldquo;{rev.content}&rdquo;
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Sticky Enrollment Sidebar Card */}
              <div className="lg:col-span-4 sticky top-8 space-y-6">
                <div className="bg-white rounded-[28px] border border-[#ECEFF2] p-6 shadow-xl space-y-6">
                  {/* Lessons & Duration info */}
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-[#161718]">
                      112 Lessons (24 hours)
                    </h3>

                    {/* Preview Lessons list */}
                    <div className="mt-4 space-y-3 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-[#ECEFF2]">
                        <span className="text-[#161718] font-medium">
                          01 Introduction to Digital Assets
                        </span>
                        <span className="text-[#003BE2] font-semibold">
                          12 mins
                        </span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-[#ECEFF2]">
                        <span className="text-[#161718] font-medium">
                          02 Design Principles for Impacts
                        </span>
                        <span className="text-[#003BE2] font-semibold">
                          21 mins
                        </span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-[#ECEFF2]">
                        <span className="text-[#161718] font-medium">
                          03 Advanced Techniques in Digital Creation
                        </span>
                        <span className="text-[#003BE2] font-semibold">
                          16 mins
                        </span>
                      </div>
                      <p className="text-xs text-[#82868E] italic pt-1">
                        99 more videos
                      </p>
                    </div>
                  </div>

                  {/* Ready to dive in prompt */}
                  <p className="text-xs text-[#585A62] leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital
                    Future!
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="font-poppins font-bold text-3xl text-[#003BE2]">
                      ${course.price}
                    </span>
                    <span className="text-sm text-[#82868E]">/lifetime</span>
                  </div>

                  {/* Enroll button */}
                  <button
                    onClick={() =>
                      alert("Enrolled successfully! Welcome to the course.")
                    }
                    className="w-full py-4 rounded-full bg-[#CBFC01] text-[#161718] font-poppins font-bold text-base hover:brightness-95 transition-all shadow-md cursor-pointer"
                  >
                    Enroll Now
                  </button>

                  {/* This course include */}
                  <div className="pt-4 border-t border-[#ECEFF2] space-y-3">
                    <h4 className="font-poppins font-bold text-sm text-[#161718]">
                      This course include
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#4B4C53]">
                      <li className="flex items-center gap-2.5">
                        <BookOpen className="w-4 h-4 text-[#003BE2]" />
                        <span>Learning Resources</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Video className="w-4 h-4 text-[#003BE2]" />
                        <span>Quality Lesson Videos</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Award className="w-4 h-4 text-[#003BE2]" />
                        <span>Certificate of Completion</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <MessageSquare className="w-4 h-4 text-[#003BE2]" />
                        <span>Private Consultation</span>
                      </li>
                    </ul>
                  </div>

                  {/* Creator Card */}
                  <div className="pt-4 border-t border-[#ECEFF2] flex items-start gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200 shrink-0">
                      <Image
                        src={course.instructorAvatar}
                        alt={course.instructor}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-sm text-[#161718]">
                        PurePearl Studio
                      </h4>
                      <p className="text-xs text-[#82868E]">
                        Professional Creator
                      </p>
                      <p className="text-[11px] text-[#585A62] mt-1 leading-snug">
                        Ready to Dive In? Enroll Now and Start Building Your
                        Digital Future!
                      </p>
                      <Link
                        href="/creators/1"
                        className="inline-block mt-2 text-xs font-semibold text-[#003BE2] hover:underline"
                      >
                        See Full Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
