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
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-red" />

      <div className="relative z-10 container-custom">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs mb-6" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
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

        <h1 className="section-title-white text-shadow mb-4 max-w-2xl">{title}</h1>
        {subtitle && (
          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
