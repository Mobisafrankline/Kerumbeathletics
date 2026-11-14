"use client";

import { TRUST_ITEMS } from "@/data/siteData";

export default function TrustStrip() {
  const doubled = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <div className="bg-red overflow-hidden py-3">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-white font-heading font-bold text-xs uppercase tracking-widest px-10"
          >
            {item}
            <span className="text-white/40 ml-6">&#9679;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
