import Link from "next/link";

interface PageHeroProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  subtitle: string;
  bgImage?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({
  badge,
  title,
  highlightedWord,
  subtitle,
  bgImage = "/images/kericho-finish.jpg",
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <div className="relative bg-[#0D0D0D] text-white py-20 sm:py-24 overflow-hidden">
      {/* Background with Dark Monochrome overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />

      {/* Decorative accent red bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8001C] via-[#FF1A35] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-white/50 mb-6 font-[var(--font-montserrat)] uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="text-[#E8001C]">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/90">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(232,0,28,0.2)] border border-[rgba(232,0,28,0.4)] text-white font-[var(--font-montserrat)] text-[0.72rem] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8001C]" />
          {badge}
        </div>

        {/* Title */}
        <h1 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl">
          {title}{" "}
          {highlightedWord && (
            <span className="text-[#E8001C]">{highlightedWord}</span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-white/75 text-base sm:text-lg max-w-2xl mt-5 leading-relaxed font-[var(--font-open-sans)]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
