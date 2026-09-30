import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#161718] flex flex-col justify-between">
      {/* 404 Hero Section with Blue Grid */}
      <section className="relative w-full bg-grid-blue text-white overflow-hidden pb-24 md:pb-32">
        <Navbar variant="light" />

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-12 md:pt-20 flex flex-col items-center text-center">
          {/* Giant Gradient 404 */}
          <div className="relative select-none">
            <h1 className="font-poppins font-black text-[120px] sm:text-[180px] md:text-[240px] leading-none tracking-tighter bg-gradient-to-b from-[#CBFC01] via-[#D4FB20] to-[#8CB400] bg-clip-text text-transparent opacity-90 drop-shadow-2xl">
              404
            </h1>
          </div>

          {/* Subtitle & Message */}
          <div className="-mt-4 md:-mt-8 space-y-4 max-w-2xl">
            <h2 className="font-poppins font-bold text-2xl sm:text-4xl md:text-5xl text-white leading-tight">
              The page you are looking for doesn&apos;t exist
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Try to use a correct url or go back to homepage to start again
            </p>
          </div>

          {/* Back to Home CTA */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#CBFC01] text-[#161718] font-poppins font-semibold text-sm hover:brightness-95 transition-all shadow-xl"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
