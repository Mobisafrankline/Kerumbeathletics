"use client";

export default function UtilityBar() {
  return (
    <div className="bg-[#0D0D0D] text-[#AAAAAA] text-xs py-2">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-2">
        <span>📞 +254 790 700228 &nbsp;|&nbsp; ✉ stevegekara04@gmail.com</span>
        <a
          href="#donate"
          className="bg-[#E8001C] text-white px-4 py-1 rounded font-bold font-[var(--font-montserrat)] text-xs tracking-wide hover:bg-[#B30016] transition-colors"
        >
          ❤ Donate Now
        </a>
      </div>
    </div>
  );
}

