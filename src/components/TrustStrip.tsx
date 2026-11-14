import { TRUST_ITEMS } from "@/data/siteData";

export default function TrustStrip() {
  return (
    <div className="bg-[#E8001C] py-3">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center flex-wrap gap-4 sm:gap-6">
        {TRUST_ITEMS.map((item, i) => (
          <span key={item} className="flex items-center gap-4">
            <span className="text-white font-[var(--font-montserrat)] text-xs font-semibold tracking-wide">
              {item}
            </span>
            {i < TRUST_ITEMS.length - 1 && (
              <span className="text-white/40 hidden sm:inline">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

