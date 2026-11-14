"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Images Stack */}
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-5 -left-5 z-20 bg-[#E8001C] text-white px-5 py-4 rounded shadow-[0_8px_25px_rgba(232,0,28,0.4)] text-center">
              <span className="block font-[var(--font-montserrat)] font-black text-3xl leading-none">2020</span>
              <span className="block font-[var(--font-montserrat)] font-semibold text-[0.6rem] tracking-[1.5px] uppercase opacity-85 mt-0.5">Year Founded</span>
            </div>

            {/* Main image */}
            <div className="relative h-[420px] rounded overflow-hidden shadow-2xl">
              <Image
                src="/images/team-outdoor.jpg"
                alt="Kerumbe team outdoor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Accent image */}
            <div className="absolute -bottom-10 -right-5 lg:-right-10 w-[55%] h-[220px] rounded overflow-hidden border-[6px] border-white shadow-xl z-10">
              <Image
                src="/images/coaches-street.jpg"
                alt="Coaches meeting"
                fill
                className="object-cover"
                sizes="30vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="mt-12 lg:mt-0">
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-[var(--font-montserrat)] font-bold text-3xl lg:text-4xl text-[#0D0D0D] leading-tight mb-5">
              Bridging the Gap for{" "}
              <span className="text-[#E8001C]">Rural Sports Talent</span>
            </h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Founded by Chairman <strong>Steve Makwae Gekara</strong>, Kerumbe Athletics
              Sports Club was born from a simple but powerful conviction: that Kenya&apos;s most
              talented young runners are often found not in city academies, but in the
              countryside — waiting for someone to give them a chance.
            </p>
            <p className="text-[#555] leading-relaxed mb-7">
              We work with gifted young student-athletes from rural primary and secondary
              schools across Kenya, providing everything they need to train, compete, grow,
              and thrive — without ever sacrificing their education.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <ValueCard icon="🎯" title="Our Mission">
                To nurture rural athletics talent through holistic support — from shoes to schoolbooks.
              </ValueCard>
              <ValueCard icon="👁" title="Our Vision">
                A Kenya where every talented rural athlete has an equal opportunity to reach the world stage.
              </ValueCard>
            </div>

            <a
              href="#programs"
              className="inline-block bg-[#E8001C] text-white font-[var(--font-montserrat)] font-bold px-7 py-3 rounded text-sm tracking-wide hover:bg-[#B30016] transition-colors"
            >
              See Our Programs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-[var(--font-montserrat)] font-bold text-[0.72rem] tracking-[3px] uppercase text-[#E8001C] mb-3">
      <span className="w-5 h-0.5 bg-[#E8001C] inline-block flex-shrink-0" />
      {children}
    </span>
  );
}

function ValueCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 p-4 border-l-4 border-[#E8001C] bg-[#F5F5F5] rounded-r">
      <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <strong className="block font-[var(--font-montserrat)] text-sm text-[#0D0D0D] mb-1">
          {title}
        </strong>
        <p className="text-[#555] text-sm leading-relaxed m-0">{children}</p>
      </div>
    </div>
  );
}

