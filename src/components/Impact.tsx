"use client";

import Image from "next/image";
import { MILESTONES } from "@/data/siteData";
import type { Milestone } from "@/types";
import { useReveal } from "@/hooks/useReveal";

export default function Impact() {
  const ref = useReveal();

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>Our Impact</SectionLabel>
          <h2 className="font-[var(--font-montserrat)] font-bold text-3xl lg:text-4xl text-[#0D0D0D] leading-tight">
            Making Strides That <span className="text-[#E8001C]">Matter</span>
          </h2>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="reveal grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
        >
          {/* Story */}
          <div>
            <div className="relative h-72 rounded-lg overflow-hidden mb-6 shadow-xl">
              <Image
                src="/images/kericho-finish.jpg"
                alt="Kericho Cross Country finish"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#E8001C] text-white text-xs font-[var(--font-montserrat)] font-bold px-3 py-1 rounded">
                  Kericho 2025
                </span>
              </div>
            </div>
            <h3 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0D0D0D] mb-3">
              Kericho Cross Country 2025
            </h3>
            <p className="text-[#555] leading-relaxed">
              Our athletes competed proudly at the Kericho Cross Country, standing alongside
              nationally recognized runners. For many, it was their first major competitive
              race — and they crossed the finish line with their heads held high.
            </p>
          </div>

          {/* Milestones */}
          <div className="flex flex-col gap-0">
            {MILESTONES.map((m: Milestone, i: number) => (
              <MilestoneItem key={m.year} milestone={m} isLast={i === MILESTONES.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneItem({ milestone, isLast }: { milestone: Milestone; isLast: boolean }) {
  return (
    <div className="flex gap-5 relative pb-8">
      {!isLast && (
        <div className="absolute left-6 top-11 bottom-0 w-0.5 bg-[#F0F0F0]" />
      )}
      <div className="flex-shrink-0 w-12 h-12 bg-[#E8001C] rounded-full flex items-center justify-center relative z-10">
        <span className="font-[var(--font-montserrat)] font-black text-[0.6rem] text-white tracking-tight text-center leading-tight">
          {milestone.year}
        </span>
      </div>
      <div className="pt-1">
        <h4 className="font-[var(--font-montserrat)] font-bold text-base text-[#0D0D0D] mb-1">
          {milestone.title}
        </h4>
        <p className="text-[#555] text-sm leading-relaxed">{milestone.description}</p>
      </div>
    </div>
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

