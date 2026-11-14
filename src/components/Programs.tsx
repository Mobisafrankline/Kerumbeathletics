import Link from "next/link";
import { PROGRAMS } from "@/data/siteData";

export default function Programs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label">Our Programs</p>
          <h2 className="section-title mb-4">
            Comprehensive Support for <span className="text-red">Every Athlete</span>
          </h2>
          <p className="text-muted text-base leading-relaxed">
            We don&apos;t just train runners — we build futures. Our programs cover every
            dimension of an athlete&apos;s life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className={`card p-7 group border border-gray-100 ${program.featured
                  ? "ring-2 ring-red relative overflow-hidden"
                  : ""
                }`}
            >
              {program.featured && (
                <div className="absolute top-4 right-4 bg-red text-white text-[10px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Featured
                </div>
              )}

              <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center font-heading font-black text-red text-sm mb-5 group-hover:bg-red group-hover:text-white transition-all duration-200">
                {program.icon}
              </div>

              <h3 className="font-heading font-black text-lg text-charcoal-dark mb-3 leading-tight">
                {program.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed mb-4">
                {program.summary}
              </p>

              {program.highlights && (
                <ul className="space-y-2">
                  {program.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 pt-4 border-t border-gray-100">
                <Link
                  href="/what-we-do"
                  className="text-red font-heading font-bold text-xs uppercase tracking-wider hover:underline flex items-center gap-1.5 transition-all duration-150"
                >
                  <span>Learn More</span>
                  <span className="text-sm leading-none">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/what-we-do" className="btn-red mx-auto">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
