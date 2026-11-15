import type { Metadata } from "next";
import Image from "next/image";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { STORIES, MILESTONES } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Stories & Impact",
  description:
    "Read the impact stories of Kerumbe Athletics and how young Kenyan runners from rural schools are transforming their lives through sport and education.",
};

export default function StoriesPage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />
      <PageHero
        title="Stories & Impact"
        subtitle="Real stories of transformation, from barefoot training on red dirt roads to competing on Kenya's national stage."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Stories & Impact" }]}
        image="/images/belgut-finish-gantry.jpg"
      />

      {/* Stories Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <p className="section-label">Impact Stories</p>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-dark leading-tight mb-3 sm:mb-4">
              Voices from the <span className="text-red">Track</span>
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Real athlete journeys from grassroots training to regional championships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {STORIES.map((story) => (
              <article key={story.id} className="card border border-gray-100 overflow-hidden group">
                {story.image && (
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="bg-red text-white text-[10.5px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {story.category}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-5 sm:p-7">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-muted text-xs font-heading font-semibold">{story.date}</span>
                  </div>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-charcoal-dark mb-3 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4">{story.summary}</p>
                  {story.content.map((para, i) => (
                    <p key={i} className="text-charcoal text-xs sm:text-sm leading-relaxed mb-2.5 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-14 sm:py-20 bg-offwhite">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <p className="section-label">Our Journey</p>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-dark leading-tight mb-3 sm:mb-4">
              Milestones That <span className="text-red">Shaped Us</span>
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Key moments since our foundation in 2020.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-red/20" />
            <div className="space-y-6 sm:space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-4 sm:gap-7 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-heading font-black text-[11px] sm:text-xs">{m.year}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 flex-1">
                    <div className="font-heading font-black text-base sm:text-lg text-charcoal-dark mb-1">{m.title}</div>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
