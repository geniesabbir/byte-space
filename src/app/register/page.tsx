"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${fullName} (${email})! Welcome to ByteSpace.`);
  };

  return (
    <main className="min-h-screen w-full bg-[#003BE2] relative overflow-hidden flex flex-col justify-between pt-[35px] pb-12 lg:pb-[120px] px-6 sm:px-12 lg:px-[122px]">
      {/* Subtle white grid background texture matching Figma Group 4 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: "url('/assets/cta/cta-grid.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "1440px auto",
          backgroundPosition: "top center",
        }}
      />

      {/* Top Header with ByteSpace Logo Icon (matching Figma x:122px, y:35px) */}
      <header className="relative z-10 w-full max-w-[1196px] mx-auto">
        <Link href="/" className="inline-block transition-opacity hover:opacity-90">
          <Image
            src="/assets/auth/logo-icon.png"
            alt="ByteSpace"
            width={29}
            height={32}
            className="w-[29px] h-[32px] object-contain"
            priority
          />
        </Link>
      </header>

      {/* Main Content Row (Top: 120px in Figma, starts 53px below logo) */}
      <div className="relative z-10 w-full max-w-[1196px] mx-auto mt-8 lg:mt-[53px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-[69px]">
        {/* Left Side: Text Heading and 3D Visual Cluster (Group 7 in Figma) */}
        <div className="w-full lg:w-[548px] shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Text block */}
          <div className="max-w-[475px]">
            <h1 className="font-poppins font-semibold text-2xl sm:text-[20px] leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
              Sign up and come in
            </h1>
            <p className="mt-4 font-satoshi font-normal text-base sm:text-[18px] leading-[160%] text-[#F5F5F6]">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>
          </div>

          {/* 3D Shapes & Course Cards Visual Cluster */}
          <div className="mt-8 lg:mt-[44px] w-full max-w-[480px] sm:max-w-[548px] relative">
            <Image
              src="/assets/auth/auth-visual.webp"
              alt="ByteSpace interactive learning preview"
              width={548}
              height={585}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Figma-Accurate White Register Card (Register_Frame in Figma: 579x784) */}
        <div className="w-full lg:w-[579px] h-auto lg:h-[784px] bg-white rounded-[24px] p-8 sm:p-12 lg:px-[63px] lg:pt-[48px] lg:pb-[44px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] text-[#242528] shrink-0 flex flex-col justify-between">
          {/* Top block: Header + 3 Inputs + Submit Button */}
          <div>
            <div>
              <p className="font-satoshi font-normal text-base sm:text-[18px] leading-[160%] text-[#003BE2]">
                Create an Account
              </p>
              <h2 className="font-poppins font-semibold text-3xl sm:text-[44px] leading-[120%] tracking-[-0.01em] text-[#242528] mt-1 whitespace-pre-line">
                Welcome to{"\n"}ByteSpace
              </h2>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-satoshi font-medium text-[14px] leading-[120%] text-[#242528] mb-2"
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
                  className="w-full h-[52px] px-6 rounded-[12px] border border-[#E5E6E8] bg-white text-[#242528] placeholder:text-[#82868E] font-satoshi text-base sm:text-[16px] focus:outline-none focus:border-[#003BE2] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-satoshi font-medium text-[14px] leading-[120%] text-[#242528] mb-2"
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
                  className="w-full h-[52px] px-6 rounded-[12px] border border-[#E5E6E8] bg-white text-[#242528] placeholder:text-[#82868E] font-satoshi text-base sm:text-[16px] focus:outline-none focus:border-[#003BE2] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block font-satoshi font-medium text-[14px] leading-[120%] text-[#242528] mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="w-full h-[52px] px-6 rounded-[12px] border border-[#E5E6E8] bg-white text-[#242528] placeholder:text-[#82868E] font-satoshi text-base sm:text-[16px] focus:outline-none focus:border-[#003BE2] transition-colors"
                />
              </div>

              {/* Right-aligned pill button */}
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="h-[46px] px-8 rounded-full bg-[#D4FB20] text-[#1D1F2C] font-poppins font-semibold text-[15px] leading-[120%] hover:brightness-95 transition-all cursor-pointer shadow-sm"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>

          {/* Bottom account link */}
          <div className="text-center font-satoshi text-[16px] leading-[160%]">
            <span className="text-[#888888]">Already have an account? </span>
            <Link
              href="/login"
              className="text-[#003BE2] hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
