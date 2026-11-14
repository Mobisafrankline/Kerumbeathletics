import Link from "next/link";

export default function UtilityBar() {
  return (
    <div className="bg-[#0D0D0D] text-[#AAAAAA] text-xs py-2 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-4 text-[0.78rem]">
          <a
            href="tel:+254790700228"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>📞</span>
            <span>+254 790 700228</span>
          </a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a
            href="mailto:stevegekara04@gmail.com"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>✉</span>
            <span>stevegekara04@gmail.com</span>
          </a>
          <span className="text-white/20 hidden md:inline">|</span>
          <span className="hidden md:inline text-white/50">
            📍 Kericho County, Kenya
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/where-we-operate"
            className="text-[0.74rem] text-white/70 hover:text-white underline decoration-[#E8001C] underline-offset-4 hidden sm:inline"
          >
            Where We Operate
          </Link>
          <Link
            href="/donate"
            className="bg-[#E8001C] text-white px-3.5 py-1 rounded font-bold font-[var(--font-montserrat)] text-[0.72rem] tracking-wider uppercase hover:bg-[#B30016] transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
}
