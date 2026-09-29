"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, BarChart2, Eye, EyeOff } from "lucide-react";
import Logo from "@/components/Logo";
import { LimeTorus, LimePyramid, WhiteSpring } from "@/components/Abstract3DShapes";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${fullName} (${email})! Welcome to ByteSpace.`);
  };

  return (
    <main className="min-h-screen w-full bg-grid-blue flex items-center justify-center p-4 sm:p-8 lg:p-12 relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-10 right-10 w-24 opacity-60 pointer-events-none">
        <WhiteSpring className="w-full h-auto" />
      </div>

      <div className="w-full max-w-[1360px] min-h-[720px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Brand & Floating Cards */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full py-4 text-white">
          <div>
            <Logo variant="light" className="text-3xl" />

            <div className="mt-8 max-w-lg">
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight text-white">
                Sign up and come in
              </h1>
              <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
                The registration process is straightforward, uncomplicated, and
                efficient, allowing users to sign up quickly, easily, and at no
                cost
              </p>
            </div>
          </div>

          {/* Interactive Floating Course Showcase Graphic */}
          <div className="relative mt-8 sm:mt-12 w-full max-w-md mx-auto lg:mx-0">
            {/* 3D Shapes around the card */}
            <div className="absolute -top-6 -left-6 w-14 h-14 z-30">
              <LimeTorus className="w-full h-full drop-shadow-xl" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 z-30">
              <LimePyramid className="w-full h-full drop-shadow-xl" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 z-30">
              <WhiteSpring className="w-full h-full drop-shadow-xl" />
            </div>

            {/* Back Card (Partially Visible) */}
            <div className="absolute -top-4 -left-6 w-full bg-white/40 backdrop-blur-sm rounded-[24px] p-4 opacity-50 transform -rotate-3 -z-10 h-[280px]" />

            {/* Main Featured Course Card */}
            <div className="relative bg-white rounded-[24px] p-4 shadow-2xl text-[#161718] border border-white/80">
              <div className="relative w-full h-[140px] rounded-[18px] overflow-hidden bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  alt="the Power of Big Data"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white">
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full">
                    17 Lessons
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full">
                    2 hours 16 mins
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-poppins font-bold text-sm text-[#161718]">
                    the Power of Big Data
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <span>4.5</span>
                    <Star className="w-3.5 h-3.5 fill-[#CBFC01] text-[#8CB400]" />
                  </div>
                </div>
                <p className="text-[11px] text-[#82868E] mt-0.5">
                  by <span className="text-[#003BE2]">purepearl studio</span>
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F5F6F7] text-[11px] font-medium text-[#4B4C53]">
                    <BarChart2 className="w-3 h-3 text-[#003BE2]" />
                    Beginner
                  </span>

                  <div className="flex items-center -space-x-1.5">
                    <div className="w-5 h-5 rounded-full border border-white bg-neutral-300 relative overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&q=80"
                        alt="student"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-5 h-5 rounded-full border border-white bg-neutral-300 relative overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&q=80"
                        alt="student"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="w-5 h-5 rounded-full border border-white bg-[#161718] text-white text-[8px] font-bold flex items-center justify-center">
                      26+
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#ECEFF2] flex items-baseline gap-1">
                  <span className="font-poppins font-bold text-base text-[#003BE2]">
                    $25
                  </span>
                  <span className="text-[11px] text-[#82868E]">/lifetime</span>
                </div>
              </div>
            </div>

            {/* Overlapping Lime "Happy Students" Card */}
            <div className="absolute -bottom-8 right-0 sm:-right-4 bg-[#CBFC01] rounded-2xl p-3 shadow-xl text-black border border-white/60 min-w-[190px]">
              <p className="font-poppins font-bold text-xs">Happy Students</p>
              <div className="flex items-center gap-1 text-xs font-semibold mt-0.5">
                <span>4.5</span>
                <span className="font-normal text-neutral-800">(240)</span>
                <Star className="w-3.5 h-3.5 fill-black text-black ml-0.5" />
              </div>
              <div className="flex items-center -space-x-1 mt-2">
                <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&q=80"
                    alt="avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=40&q=80"
                    alt="avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="w-5 h-5 rounded-full border border-white bg-black text-white text-[8px] font-bold flex items-center justify-center">
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: White Register Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl text-[#161718]">
            <p className="text-[#003BE2] font-semibold text-sm">
              Create an Account
            </p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#161718] mt-1">
              Welcome to ByteSpace
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-medium text-[#4B4C53] mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-[#DAE0E5] text-sm focus:outline-none focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/10 transition-all text-[#161718] placeholder:text-[#B2B8BE]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-[#4B4C53] mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-[#DAE0E5] text-sm focus:outline-none focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/10 transition-all text-[#161718] placeholder:text-[#B2B8BE]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-[#4B4C53] mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-[#DAE0E5] text-sm focus:outline-none focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/10 transition-all text-[#161718] placeholder:text-[#B2B8BE] pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#82868E] hover:text-[#161718]"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#CBFC01] text-[#161718] font-poppins font-semibold text-sm hover:brightness-95 transition-all shadow-sm cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </form>

            <p className="mt-12 text-center text-xs text-[#585A62]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#003BE2] font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
