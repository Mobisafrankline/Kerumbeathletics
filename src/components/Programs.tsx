"use client";

import { PROGRAMS } from "@/data/siteData";
import type { Program } from "@/types";
import { useReveal } from "@/hooks/useReveal";

export default function Programs() {
  const ref = useReveal();

  return (
    <section id="programs" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel light>What We Do</SectionLabel>
          <h2 className="font-[var(--font-montserrat)] font-bold text-3xl lg:text-4xl text-white leading-tight">
            Comprehensive Support for{" "}
            <span className="text-[#E8001C]">Every Athlete</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-base leading-relaxed">
            We don&apos;t just train runners — we build futures. Our programs cover every
            dimension of an athlete&apos;s life.
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROGRAMS.map((prog: Program) => (
            <ProgramCard key={prog.title} program={prog} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: Program }) {
  const featured = program.featured;
  return (
    <div
      className={`rounded-lg p-7 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(232,0,28,0.18)] cursor-default
        ${featured
          ? "bg-[#E8001C] border-[#E8001C]"
          : "bg-[#2B2B2B] border-white/5 hover:border-[#E8001C]"
        }`}
    >
      <div className="text-4xl mb-4">{program.icon}</div>
      <h3 className="font-[var(--font-montserrat)] font-bold text-lg text-white mb-2">
        {program.title}
      </h3>
      <p className={`text-sm leading-relaxed ${featured ? "text-white/90" : "text-[#AAAAAA]"}`}>
        {program.description}
      </p>
    </div>
  );
}

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 font-[var(--font-montserrat)] font-bold text-[0.72rem] tracking-[3px] uppercase mb-3 ${light ? "text-[#FF1A35]" : "text-[#E8001C]"}`}>
      <span className={`w-5 h-0.5 inline-block flex-shrink-0 ${light ? "bg-[#FF1A35]" : "bg-[#E8001C]"}`} />
      {children}
    </span>
  );
}

