"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  CheckCircle2,
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
    { name: "Design", icon: "/assets/categories/cat-design.png" },
    { name: "Development", icon: "/assets/categories/cat-development.png" },
    { name: "IT & Software", icon: "/assets/categories/cat-it-software.png" },
    { name: "Business", icon: "/assets/categories/cat-business.png" },
    { name: "Marketing", icon: "/assets/categories/cat-marketing.png" },
    { name: "Photography", icon: "/assets/categories/cat-photography.png" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      avatar: "/assets/testimonials/avatar-sarah.png",
      content:
        "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
      id: 2,
      name: "James L.",
      role: "Lifelong Learner",
      avatar: "/assets/testimonials/avatar-james.png",
      content:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
      id: 3,
      name: "Alex B.",
      role: "Inspired Creator",
      avatar: "/assets/testimonials/avatar-alex.png",
      content:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-[119px]">
          {/* Section Header (Frame 9 in Figma) */}
          <div className="text-center max-w-[917px] mx-auto">
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] leading-[120%] tracking-[-0.01em] text-[#040819]">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="mt-4 font-satoshi font-normal text-base sm:text-[18px] leading-[160%] text-[#82868E] max-w-[917px] mx-auto">
              At Bytespace, we believe in empowering individuals through
              knowledge. Our diverse range of courses spans various fields,
              ensuring there&apos;s something for everyone. Unleash your
              potential and explore our carefully curated categories.
            </p>
          </div>

          {/* Category Cards (Frame 10 in Figma: Fixed 1,202px, Gap 40px) */}
          <div className="mt-12 lg:mt-[68px] max-w-[1202px] mx-auto flex flex-wrap xl:flex-nowrap justify-center gap-6 xl:gap-[40px]">
            {learningPaths.map((path) => (
              <Link
                key={path.name}
                href={`/search?category=${encodeURIComponent(path.name)}`}
                className="w-[167px] h-[167px] rounded-[24px] border border-[#CED0D3] bg-white flex flex-col items-center justify-center gap-3 p-4 hover:border-[#003BE2] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center shrink-0">
                  <Image
                    src={path.icon}
                    alt={path.name}
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-satoshi font-medium text-[20px] leading-[120%] text-[#242528] text-center">
                  {path.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL GROWTH & COURSE MANAGEMENT SHOWCASE (Frame 15 in Figma) */}
      <section className="py-20 lg:py-[120px] bg-[#FAFAFA] relative overflow-hidden">
        {/* Figma 100% Exact Ambient Background Glows (Group 5 & Ellipse 12 in Figma Frame 15) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
          <Image
            src="/assets/growth/growth-bg.webp"
            alt=""
            fill
            className="object-cover object-center pointer-events-none"
            priority
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[121px] space-y-20 lg:space-y-[72px] relative z-10">
          {/* Feature 1: Your Path to Professional Growth Starts Here! (Frame 13 in Figma) */}
          <div className="max-w-[1258px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[63px]">
            {/* Left Content (Text in Figma: Width 574px) */}
            <div className="w-full lg:max-w-[574px] space-y-6 lg:space-y-8">
              <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[44px] text-[#242528] leading-[120%] tracking-[-0.01em]">
                Your Path to Professional
                <br className="hidden sm:inline" /> Growth Starts Here!
              </h2>
              <p className="font-satoshi font-normal text-base sm:text-[18px] text-[#4B4C53] leading-[160%] max-w-[477px]">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>

              {/* Stats Row (Auto Layout Horizontal in Figma: Gap 56px) */}
              <div className="pt-2 flex items-center gap-8 sm:gap-[56px]">
                <div>
                  <p className="font-poppins font-semibold text-3xl sm:text-4xl text-[#003BE2] leading-[120%]">
                    12K
                  </p>
                  <p className="font-satoshi font-medium text-sm sm:text-base text-[#585A62] mt-1.5">
                    Students
                  </p>
                </div>
                <div>
                  <p className="font-poppins font-semibold text-3xl sm:text-4xl text-[#003BE2] leading-[120%]">
                    70+
                  </p>
                  <p className="font-satoshi font-medium text-sm sm:text-base text-[#585A62] mt-1.5">
                    Courses
                  </p>
                </div>
                <div>
                  <p className="font-poppins font-semibold text-3xl sm:text-4xl text-[#003BE2] leading-[120%]">
                    16
                  </p>
                  <p className="font-satoshi font-medium text-sm sm:text-base text-[#585A62] mt-1.5">
                    Creators
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual (Frame 11 in Figma: Width 621px, Height 552px) */}
            <div className="w-full lg:w-[621px] max-w-[621px] shrink-0">
              <Image
                src="/assets/growth/growth-visual.png"
                alt="Student learning progress and course preview"
                width={621}
                height={552}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Feature 2: Create & Manage Courses Easily. (Frame 14 in Figma) */}
          <div className="max-w-[1258px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-[79px]">
            {/* Left Visual (Frame 12 in Figma: Width 580px) */}
            <div className="w-full lg:w-[540px] max-w-[540px] shrink-0 flex justify-center">
              <Image
                src="/assets/growth/creator-visual.png"
                alt="Course creator analytics and student satisfaction"
                width={540}
                height={596}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Content (Text in Figma: Width 580px) */}
            <div className="w-full lg:max-w-[580px] space-y-6 lg:space-y-8">
              <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[44px] text-[#242528] leading-[120%] tracking-[-0.01em]">
                Create &amp; Manage
                <br className="hidden sm:inline" /> Courses Easily.
              </h2>
              <p className="font-satoshi font-normal text-base sm:text-[18px] text-[#4B4C53] leading-[160%] max-w-[574px]">
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>

              {/* Bullet Points (4 items with checkmark circle) */}
              <div className="space-y-4 pt-2">
                {[
                  "Share Your Expertise",
                  "Monetize Your Passion",
                  "Flexibility and Autonomy",
                  "Build a Community",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 shrink-0 relative">
                      <Image
                        src="/assets/growth/check-circle.png"
                        alt="check"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-satoshi font-medium text-base sm:text-[18px] leading-[120%] text-[#242528]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UNLOCK YOUR POTENTIAL AS A CREATOR (CTA Banner) */}
      <section className="relative w-full bg-[#003BE2] overflow-hidden py-16 md:py-20 lg:py-[104px]">
        {/* Subtle white grid texture exported from Figma Group 4 */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "url('/assets/cta/cta-grid.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "1440px auto",
            backgroundPosition: "center",
          }}
        />

        {/* 3D Floating Shapes composite exported from Figma Group 6 */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="relative w-full max-w-[1440px] h-full min-h-[488px]">
            <Image
              src="/assets/cta/cta-shapes.png"
              alt="3D Shapes"
              fill
              className="object-contain pointer-events-none"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-[800px] mx-auto text-center px-4 sm:px-6">
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.01em] text-white">
            Unlock Your Potential as a<br className="hidden sm:inline" /> Creator with ByteSpace
          </h2>
          <p className="font-satoshi font-normal text-sm sm:text-base lg:text-[18px] leading-[160%] text-white/90 max-w-[760px] mx-auto mt-6">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <div className="mt-8">
            <Link
              href="/creators/1"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#D4FB20] text-[#161718] font-satoshi font-medium text-[18px] leading-[120%] hover:brightness-95 transition-all shadow-md"
            >
              Join as Creator
            </Link>
          </div>
        </div>
      </section>

      {/* 8. DISCOVER WHAT OUR COMMUNITY IS SAYING (Testimonials) */}
      <section className="relative w-full bg-[#FAFAFA] overflow-hidden py-16 lg:py-[100px]">
        {/* Ambient Gradient Glows from Figma Ellipses */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4FB20]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-[#003BE2]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1204px] mx-auto px-4 sm:px-6 xl:px-0">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-[43px]">
            <div className="w-full lg:w-[577px]">
              <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.01em] text-black">
                Discover What Our Community Is Saying
              </h2>
            </div>
            <div className="w-full lg:w-[580px]">
              <p className="font-satoshi font-normal text-base sm:text-[18px] leading-[160%] text-[#4F4F4F]">
                At ByteSpace, our vibrant community of learners and creators is
                at the heart of what we do. Hear directly from those who have
                experienced the transformative journey of learning and creating on
                our platform. Explore testimonials that reflect the diverse
                perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* 3 Testimonials Cards */}
          <div className="mt-12 lg:mt-[72px] grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[41px]">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[24px] p-6 flex flex-col justify-start gap-6 border border-[#CED0D3]/30 shadow-[0px_4px_24px_rgba(0,0,0,0.04)]"
              >
                {/* Author Avatar (80x80px) */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-neutral-100 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Author Info */}
                <div className="space-y-1">
                  <h4 className="font-poppins font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-black">
                    {item.name}
                  </h4>
                  <p className="font-satoshi font-normal text-[18px] leading-[160%] text-[#003BE2]">
                    {item.role}
                  </p>
                </div>

                {/* Quote */}
                <p className="font-satoshi font-normal text-[18px] leading-[160%] text-[#4F4F4F]">
                  &ldquo;{item.content}&rdquo;
                </p>
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
