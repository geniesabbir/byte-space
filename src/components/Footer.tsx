"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white border-t border-[#CED0D3] text-[#242528]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 xl:px-0 pt-[71px] pb-10">
        {/* Top Nav Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[92px]">
          {/* Newsletter Column */}
          <div className="w-full lg:w-[504px] flex flex-col justify-start">
            <Logo variant="dark" />
            <p className="mt-6 font-satoshi font-normal text-[14px] leading-[160%] text-[#242528] max-w-[528px]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row items-center gap-6 max-w-[504px]"
            >
              <div className="relative w-full sm:w-[376px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full h-[52px] px-6 rounded-full border border-[#CED0D3] bg-white font-satoshi font-normal text-[16px] leading-[160%] text-[#242528] placeholder:text-[#242528]/60 focus:outline-none focus:border-[#003BE2] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-[104px] h-[46px] rounded-[24px] bg-[#D4FB20] text-[#242528] font-satoshi font-medium text-[18px] leading-[120%] hover:brightness-95 transition-all flex items-center justify-center shrink-0 cursor-pointer"
              >
                Search
              </button>
            </form>

            {subscribed ? (
              <p className="mt-3 font-satoshi font-medium text-[12px] text-green-600">
                Thank you for subscribing!
              </p>
            ) : (
              <p className="mt-3 font-satoshi font-normal text-[12px] leading-[160%] text-[#242528] max-w-[504px]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            )}
          </div>

          {/* Links Columns */}
          <div className="w-full lg:w-[580px] grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-[40px]">
            {/* Column 1: Browse */}
            <div className="w-full sm:w-[167px]">
              <h4 className="font-satoshi font-normal text-[16px] leading-6 text-[#242528] mb-6">
                Browse
              </h4>
              <ul className="space-y-4 font-satoshi font-normal text-[14px] leading-[160%] text-[#242528]">
                <li>
                  <Link
                    href="/search?category=Featured"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search?category=Business"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search?category=IT"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    IT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search?category=Design"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Categories cont. */}
            <div className="w-full sm:w-[167px] sm:pt-[48px]">
              <ul className="space-y-4 font-satoshi font-normal text-[14px] leading-[160%] text-[#242528]">
                <li>
                  <Link
                    href="/search?category=Development"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search?category=Marketing"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search?category=Photography"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Photography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search?category=Finance"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search?category=Sport"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Platform */}
            <div className="w-full sm:w-[167px]">
              <h4 className="font-satoshi font-normal text-[16px] leading-6 text-[#242528] mb-6">
                Platform
              </h4>
              <ul className="space-y-4 font-satoshi font-normal text-[14px] leading-[160%] text-[#242528]">
                <li>
                  <Link
                    href="/creators/1"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#003BE2] transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="w-full border-t border-[#CED0D3] mt-20 lg:mt-[130px] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-satoshi font-normal text-[12px] leading-[160%] text-[#242528]">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#003BE2] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[#003BE2] transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-[#003BE2] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
