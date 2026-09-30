import Image from "next/image";

export default function PartnerLogos() {
  return (
    <section className="w-full bg-[#F5F5F6] py-8 md:py-12 flex items-center justify-center border-y border-[#ECEFF2]/80 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex items-center justify-center">
        <Image
          src="/assets/hero/partner-logos.png"
          alt="Trusted by industry leaders"
          width={1440}
          height={202}
          priority
          className="w-full max-w-5xl h-auto object-contain"
        />
      </div>
    </section>
  );
}
