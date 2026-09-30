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
    <footer className="w-full bg-white border-t border-[#ECEFF2] text-[#161718]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Newsletter Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <Logo variant="dark" />
            <p className="mt-6 text-[#585A62] text-sm md:text-base leading-relaxed max-w-md">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row items-center gap-3 max-w-md"
            >
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-3 rounded-full border border-[#DAE0E5] text-sm focus:outline-none focus:border-[#003BE2] placeholder:text-[#82868E]"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#CBFC01] text-[#161718] text-sm font-semibold hover:brightness-95 transition-all shrink-0 cursor-pointer"
              >
                Search
              </button>
            </form>

            {subscribed ? (
              <p className="mt-3 text-xs text-green-600 font-medium">
                Thank you for subscribing!
              </p>
            ) : (
              <p className="mt-3 text-xs text-[#82868E] leading-relaxed max-w-md">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            )}
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="space-y-4">
              <ul className="space-y-3 text-sm text-[#4B4C53]">
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

            {/* Column 2 */}
            <div className="space-y-4">
              <ul className="space-y-3 text-sm text-[#4B4C53]">
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

            {/* Column 3 */}
            <div className="space-y-4">
              <ul className="space-y-3 text-sm text-[#4B4C53]">
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

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#ECEFF2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#82868E]">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#161718] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[#161718] transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-[#161718] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
