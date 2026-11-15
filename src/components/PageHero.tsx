import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
  image?: string;
}

export default function PageHero({ title, subtitle, breadcrumbs, image }: PageHeroProps) {
  const bg = image || "/images/kericho-finish.jpg";
  return (
    <section
      className="relative py-14 sm:py-20 md:py-28 overflow-hidden bg-charcoal-dark"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/55" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-red" />

      <div className="relative z-10 container-custom">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs mb-4 sm:mb-6" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5 sm:gap-2">
              {crumb.href ? (
                <Link href={crumb.href} className="text-gray-300 hover:text-red transition-colors font-heading font-semibold uppercase tracking-wider">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-red font-heading font-bold uppercase tracking-wider">{crumb.label}</span>
              )}
              {i < breadcrumbs.length - 1 && (
                <span className="text-gray-500">&#8250;</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight text-shadow mb-3 sm:mb-4 max-w-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
