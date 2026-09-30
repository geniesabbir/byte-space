"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  CheckCircle2,
  Paintbrush,
  Code,
  Server,
  Briefcase,
  Megaphone,
  Camera,
  Star,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import CategoryPills from "@/components/CategoryPills";
import PartnerLogos from "@/components/PartnerLogos";
import {
  LimeTorus,
  WhiteTorus,
  LimePyramid,
  WhiteSpring,
  LimeWavyPill,
  LimeCylinder,
} from "@/components/Abstract3DShapes";
import { coursesData, categoriesList } from "@/data/courses";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/search");
    }
  };

  // Filter courses for "Discover Your Passion, Build Your Skills" section
  const filteredCourses =
    selectedCategory === "Featured"
      ? coursesData.slice(0, 6)
      : coursesData.filter((c) => c.category === selectedCategory).length > 0
      ? coursesData.filter((c) => c.category === selectedCategory).slice(0, 6)
      : coursesData.slice(0, 6);

  const learningPaths = [
    { name: "Design", icon: Paintbrush, count: "48 Courses" },
    { name: "Development", icon: Code, count: "82 Courses" },
    { name: "IT & Software", icon: Server, count: "35 Courses" },
    { name: "Business", icon: Briefcase, count: "54 Courses" },
    { name: "Marketing", icon: Megaphone, count: "29 Courses" },
    { name: "Photography", icon: Camera, count: "22 Courses" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      content:
        "ByteSpace has completely transformed my approach to learning. The diverse range of courses and interactive lessons made complex topics easy to grasp. The community support is incredible!",
    },
    {
      id: 2,
      name: "James L.",
      role: "Marketing Specialist",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is intuitive, and the platform's reach has helped me connect with learners worldwide. Truly empowering!",
    },
    {
      id: 3,
      name: "Alex R.",
      role: "Full-Stack Developer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      content:
        "The quality of instruction and practical projects on ByteSpace exceeded my expectations. It helped me advance my career and build real-world applications with confidence.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#161718] flex flex-col">
      {/* 1. HERO SECTION (Persian Blue Grid Texture + Direct Figma Exported Assets) */}
      <section className="relative w-full bg-[#003BE2] text-white overflow-hidden">
        {/* Background Grid Texture directly from Figma (Group 4) */}
        <div className="absolute inset-0 w-full h-[1024px] pointer-events-none select-none z-0">
          <Image
            src="/assets/hero/hero-grid.png"
            alt=""
            fill
            priority
            className="object-cover object-top opacity-30"
          />
        </div>

        {/* 3D Ornaments directly exported from Figma (3d ornament) */}
        <div className="absolute top-[220px] left-1/2 -translate-x-1/2 w-[1440px] h-[804px] pointer-events-none select-none z-10 hidden lg:block">
          <Image
            src="/assets/hero/hero-3d-ornaments.png"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Top Navbar */}
        <Navbar variant="light" />

        {/* Hero Content Container */}
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-2 md:pt-4 flex flex-col items-center text-center z-20">
          {/* Main Headline */}
          <h1 className="font-poppins font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.2] tracking-[-0.01em] max-w-[935px] text-white">
            Get Access to Hundreds <br className="hidden sm:inline" />Courses Available
          </h1>

          {/* Subheading */}
          <p className="mt-4 sm:mt-5 font-normal text-base sm:text-lg md:text-[18px] md:leading-[1.6] text-[#E5E6E8] max-w-[819px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search Bar Input */}
          <form
            onSubmit={handleSearch}
            className="mt-6 md:mt-8 w-full max-w-[581px] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <div className="w-full sm:w-[461px] h-[52px] bg-white rounded-full px-6 flex items-center gap-3 shadow-lg">
              <Search className="w-5 h-5 text-[#82868E] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-[#161718] placeholder:text-[#82868E] text-[15px] outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-[104px] h-[52px] sm:h-[46px] rounded-full bg-[#D4FB20] text-[#161718] font-poppins font-semibold text-sm hover:brightness-95 transition-all shadow-md flex items-center justify-center shrink-0 cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Center Visual: Exact Figma Student + Lime Ring + 3 Floating Cards */}
          <div className="relative mt-2 md:mt-4 w-full max-w-[1440px] h-[480px] sm:h-[520px] md:h-[540px] flex justify-center items-end mx-auto">
            {/* Electric Lime Ring (Ellipse 7) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] md:w-[1149px] h-[270px] sm:h-[350px] md:h-[442px] pointer-events-none z-10">
              <Image
                src="/assets/hero/hero-lime-ring.png"
                alt=""
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>

            {/* Student Image */}
            <div className="relative z-20 w-[380px] sm:w-[480px] md:w-[578px] h-[360px] sm:h-[460px] md:h-[541px] pointer-events-none">
              <Image
                src="/assets/hero/hero-student.png"
                alt="Student holding laptop with headphones"
                fill
                priority
                className="object-contain object-bottom filter drop-shadow-2xl"
              />
            </div>

            {/* Floating Card: UI/UX Design (Left) */}
            <div className="absolute top-[120px] left-[4%] lg:left-[calc(50%-316px)] z-30 w-[180px] sm:w-[208px] h-auto drop-shadow-2xl hidden sm:block hover:-translate-y-1 transition-transform">
              <Image
                src="/assets/hero/card-ui-ux.png"
                alt="UI/UX Design - 200 Courses, 1000+ Students"
                width={208}
                height={70}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Floating Card: Happy Students (Bottom-Left) */}
            <div className="absolute bottom-[20px] left-[2%] lg:left-[calc(50%-392px)] z-30 w-[220px] sm:w-[258px] h-auto drop-shadow-2xl hover:-translate-y-1 transition-transform">
              <Image
                src="/assets/hero/card-happy-students.png"
                alt="Happy Students 4.5 (240)"
                width={258}
                height={121}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Floating Card: Learning Progress (Right) */}
            <div className="absolute top-[135px] right-[4%] lg:right-auto lg:left-[calc(50%+122px)] z-30 w-[190px] sm:w-[232px] h-auto drop-shadow-2xl hidden sm:block hover:-translate-y-1 transition-transform">
              <Image
                src="/assets/hero/card-learning-progress.png"
                alt="Learning Progress 55%"
                width={232}
                height={131}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGOIPSUM PARTNERS BAR */}
      <PartnerLogos />

      {/* 3. DISCOVER YOUR PASSION, BUILD YOUR SKILLS */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
          {/* Section Header (Frame 3 in Figma) */}
          <div className="text-center max-w-[917px] mx-auto">
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[44px] leading-[120%] tracking-[-0.01em] text-[#040819]">
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>
            <p className="mt-4 font-satoshi font-normal text-base sm:text-[18px] leading-[160%] text-[#82868E] max-w-[917px] mx-auto">
              At Bytespace Courses, we bring you closer to life-changing
              knowledge. Explore a variety of courses across different fields,
              from technology to the arts, and make a difference in your career
              and life.
            </p>
          </div>

          {/* Category Pills Navigation (Tab_Categories in Figma: 3 Rows) */}
          <div className="mt-10 flex justify-center w-full">
            <CategoryPills
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* 3x2 Course Cards Grid (Frame 8 in Figma: Width 1,199px, Gap 40px) */}
          <div className="mt-12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPLORE DIVERSE LEARNING PATHS */}
      <section className="py-20 lg:py-24 bg-[#F5F6F7]/60 border-y border-[#ECEFF2]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[44px] text-[#161718] leading-tight">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="mt-4 text-[#585A62] text-sm sm:text-base leading-relaxed">
              At Bytespace, we believe in empowering individuals through
              knowledge. Our vibrant online learning platform offers a wide
              array of courses, designed to ignite your passion and fuel your
              personal and professional growth.
            </p>
          </div>

          {/* Category Icons Row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {learningPaths.map((path) => {
              const Icon = path.icon;
              return (
                <Link
                  key={path.name}
                  href={`/search?category=${encodeURIComponent(path.name)}`}
                  className="bg-white rounded-2xl p-6 border border-[#ECEFF2] flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#CBFC01]/40 flex items-center justify-center text-[#161718] group-hover:bg-[#CBFC01] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-poppins font-semibold text-base text-[#161718]">
                    {path.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#82868E]">{path.count}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. YOUR PATH TO PROFESSIONAL GROWTH STARTS HERE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[44px] text-[#161718] leading-tight">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>

              {/* Stats Numbers */}
              <div className="pt-6 grid grid-cols-3 gap-6">
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-[#003BE2]">
                    12K
                  </p>
                  <p className="text-sm text-[#585A62] mt-1 font-medium">
                    Students
                  </p>
                </div>
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-[#003BE2]">
                    70+
                  </p>
                  <p className="text-sm text-[#585A62] mt-1 font-medium">
                    Courses
                  </p>
                </div>
                <div>
                  <p className="font-poppins font-bold text-3xl sm:text-4xl text-[#003BE2]">
                    16
                  </p>
                  <p className="text-sm text-[#585A62] mt-1 font-medium">
                    Creators
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-6 relative flex justify-center items-center min-h-[440px]">
              {/* Soft Lime Glow & Abstract Shape Behind */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-48 h-48 opacity-90 pointer-events-none z-0">
                <LimeWavyPill className="w-full h-auto drop-shadow-xl" />
              </div>

              {/* Student Person visual */}
              <div className="relative z-10 w-[300px] sm:w-[360px] md:w-[400px] h-[380px] sm:h-[440px]">
                <Image
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85"
                  alt="Student with headphones and laptop"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Floating Course Card Overlay (Left) */}
              <div className="absolute top-10 -left-2 sm:left-2 md:left-6 z-20 bg-white rounded-2xl p-3.5 shadow-2xl border border-gray-100 max-w-[260px]">
                <div className="relative w-full h-[100px] rounded-xl overflow-hidden mb-2.5">
                  <Image
                    src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80"
                    alt="Course preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[9px] px-2 py-0.5 rounded-full font-medium">
                      17 Lessons
                    </span>
                    <span className="bg-black/60 backdrop-blur-md text-white text-[9px] px-2 py-0.5 rounded-full font-medium">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>
                <h4 className="font-poppins font-bold text-xs text-[#161718] truncate">
                  Learn Figma from Basic
                </h4>
                <p className="text-[10px] text-[#585A62] mt-0.5">
                  by <span className="text-[#003BE2] font-medium">purepearl studio</span>
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1 text-[10px] bg-[#ECEFF2] text-[#585A62] px-2 py-0.5 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#003BE2]" />
                    Beginner
                  </span>
                  <p className="font-poppins font-bold text-sm text-[#003BE2]">
                    $25<span className="text-[9px] text-[#82868E] font-normal">/lifetime</span>
                  </p>
                </div>
              </div>

              {/* Floating Progress Card Overlay (Right) */}
              <div className="absolute bottom-12 -right-2 sm:right-2 md:right-4 z-20 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 min-w-[170px]">
                <p className="text-xs text-[#585A62] font-medium">Learning Progress</p>
                <p className="font-poppins font-bold text-2xl text-[#161718] mt-1">55%</p>
                <div className="w-full bg-[#ECEFF2] h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CREATE & MANAGE COURSES EASILY */}
      <section className="py-20 lg:py-28 bg-[#F5F6F7]/60 border-t border-[#ECEFF2]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual Frame with Earnings cards */}
            <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-md h-[440px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Creator presenting online course"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Earning Card 1 */}
                <div className="absolute top-8 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60">
                  <p className="text-xs text-[#585A62] font-medium">Daily Revenue</p>
                  <p className="font-poppins font-bold text-xl text-[#003BE2] mt-0.5">
                    $100.29
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-green-600 font-semibold mt-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +18.4% this week
                  </div>
                </div>

                {/* Floating Earning Card 2 */}
                <div className="absolute bottom-8 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60">
                  <p className="text-xs text-[#585A62] font-medium">Monthly Payout</p>
                  <p className="font-poppins font-bold text-2xl text-[#161718] mt-0.5">
                    $2,000.00
                  </p>
                  <p className="text-[11px] text-[#82868E] mt-1">
                    Direct bank transfer enabled
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[44px] text-[#161718] leading-tight">
                Create &amp; Manage Courses Easily.
              </h2>
              <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
                Experience seamless course management with features designed for
                effortless creation, publication, and optimization of
                educational content.
              </p>

              {/* Bullet points */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#003BE2] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-[#161718]">
                      Share Your Expertise
                    </h4>
                    <p className="text-sm text-[#585A62] mt-0.5">
                      Publish video modules, quizzes, and project files with a
                      streamlined drag-and-drop course builder.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#003BE2] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-[#161718]">
                      Monetize Your Passion
                    </h4>
                    <p className="text-sm text-[#585A62] mt-0.5">
                      Set flexible pricing, lifetime access packages, and retain
                      industry-leading creator earnings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#003BE2] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-[#161718]">
                      Flexibility and Autonomy
                    </h4>
                    <p className="text-sm text-[#585A62] mt-0.5">
                      Teach on your own schedule with complete freedom over
                      curriculum design and student interactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#003BE2] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-[#161718]">
                      Build a Community
                    </h4>
                    <p className="text-sm text-[#585A62] mt-0.5">
                      Engage with dedicated students through live Q&amp;A sessions,
                      discussions, and peer reviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UNLOCK YOUR POTENTIAL AS A CREATOR (CTA Banner) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="relative rounded-[32px] bg-grid-blue p-8 sm:p-12 md:p-16 lg:p-20 text-center text-white overflow-hidden shadow-2xl">
            {/* 3D Floating Accents */}
            <div className="absolute top-6 left-6 w-16 opacity-80 pointer-events-none">
              <LimeTorus className="w-full h-auto" />
            </div>
            <div className="absolute bottom-6 right-8 w-16 opacity-80 pointer-events-none">
              <WhiteSpring className="w-full h-auto" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[40px] leading-tight text-white">
                Unlock Your Potential as a Creator with ByteSpace
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                Experience the collaborative environment and extensive
                potential as a Creator. Register now and become a part of a
                community empowering learners with fresh insights. Unleash your
                expertise and empower learners with your expertise by publishing
                your first course on the ByteSpace Course Library.
              </p>
              <div className="pt-2">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#CBFC01] text-[#161718] font-poppins font-semibold text-sm hover:brightness-95 transition-all shadow-md"
                >
                  Join as Creator
                  <Sparkles className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DISCOVER WHAT OUR COMMUNITY IS SAYING (Testimonials) */}
      <section className="py-20 lg:py-28 bg-[#F5F6F7]/60 border-t border-[#ECEFF2]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[44px] text-[#161718] leading-tight">
                Discover What Our Community is Saying
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
                At ByteSpace, our vibrant community of learners and creators is
                at the heart of all we do. Hear directly from those who have
                experienced the transformative power of learning and sharing on
                our platform. Explore testimonials that reflect the diverse
                perspectives and enthusiastic reviews of our community.
              </p>
            </div>
          </div>

          {/* 3 Testimonials Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[24px] border border-[#ECEFF2] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#CBFC01] text-[#8CB400]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mt-6 text-[#4B4C53] text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-[#ECEFF2] flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-[#161718]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#82868E]">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <Footer />
    </div>
  );
}
