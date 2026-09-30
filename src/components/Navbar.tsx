"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  variant?: "light" | "dark";
}

export default function Navbar({ variant = "light" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLight = variant === "light";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/search" },
    { label: "Creators", href: "/creators/1" },
  ];

  return (
    <header className="relative z-50 w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] py-6 flex items-center justify-between">
        {/* Logo */}
        <Logo variant={variant} />

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm lg:text-base font-medium transition-colors ${
                  isLight
                    ? isActive
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                    : isActive
                    ? "text-[#003BE2] font-semibold"
                    : "text-[#4B4C53] hover:text-[#161718]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/login"
            className={`text-sm lg:text-base font-medium transition-colors ${
              isLight
                ? "text-white hover:text-white/80"
                : "text-[#161718] hover:text-[#003BE2]"
            }`}
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              isLight
                ? "border border-white/60 text-white hover:bg-white hover:text-[#003BE2]"
                : "border border-[#161718] text-[#161718] hover:bg-[#161718] hover:text-white"
            }`}
          >
            Join Us
          </Link>

          <Link
            href="/courses/1"
            aria-label="Shopping Cart"
            className={`relative p-2 rounded-full transition-colors ${
              isLight
                ? "text-white hover:bg-white/10"
                : "text-[#161718] hover:bg-neutral-100"
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#CBFC01] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/courses/1"
            aria-label="Shopping Cart"
            className={`p-2 rounded-full ${
              isLight ? "text-white" : "text-[#161718]"
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${
              isLight ? "text-white hover:bg-white/10" : "text-[#161718] hover:bg-neutral-100"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 shadow-xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-800 hover:text-[#003BE2] py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-base font-medium text-neutral-800 border border-neutral-300 rounded-full"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-base font-semibold bg-[#CBFC01] text-black rounded-full"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
