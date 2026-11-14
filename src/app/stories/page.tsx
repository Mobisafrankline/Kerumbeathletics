import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { STORIES, MILESTONES } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Stories & Impact | Inspiring Journeys | Kerumbe Athletics",
  description:
    "Read inspiring stories and historic milestones from Kerumbe Athletics: Belgut Marathon achievements, Kericho Cross Country breakthroughs, and rural student-athlete success stories.",
  alternates: {
    canonical: "https://kerumbeathletics.co.ke/stories",
  },
};

export default function StoriesPage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />

      <PageHero
        badge="Field Updates & Impact"
        title="Stories of Grit, Hope, and"
        highlightedWord="Victory"
        subtitle="Every race completed and every school term completed is a testament to the power of community, opportunity, and belief."
        bgImage="/images/kericho-finish.jpg"
        breadcrumbs={[{ label: "Stories & Impact" }]}
      />

      {/* Featured Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gray-100 pb-16">
            <div className="lg:col-span-7">
              <div className="relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={STORIES[0].image}
                  alt={STORIES[0].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 bg-[#E8001C] text-white text-[0.7rem] font-[var(--font-montserrat)] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded">
                  {STORIES[0].category}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <span className="text-xs font-[var(--font-montserrat)] font-bold text-[#777] uppercase tracking-wider block mb-2">
                Event Year: {STORIES[0].date} &nbsp;•&nbsp; Kabianga, Kenya
              </span>
              <h2 className="font-[var(--font-montserrat)] font-black text-2xl sm:text-3xl text-[#0D0D0D] leading-tight mb-4">
                {STORIES[0].title}
              </h2>
              <p className="text-sm font-semibold text-[#E8001C] mb-4">
                {STORIES[0].summary}
              </p>
              <div className="space-y-3 text-sm text-[#555] leading-relaxed mb-6 font-[var(--font-open-sans)]">
                {STORIES[0].content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
              <Link
                href="/donate"
                className="inline-block bg-[#E8001C] text-white px-6 py-3 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-md"
              >
                Sponsor Future Marathon Entries →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Stories Grid */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
              <span className="w-4 h-0.5 bg-[#E8001C]" />
              Athlete Spotlights
            </span>
            <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D]">
              More Groundbreaking <span className="text-[#E8001C]">Moments</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STORIES.slice(1).map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#0D0D0D] text-white text-[0.65rem] font-[var(--font-montserrat)] font-bold uppercase tracking-wider px-3 py-1 rounded">
                      {story.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-[var(--font-montserrat)] font-semibold text-[#888] block mb-2">
                      {story.date}
                    </span>
                    <h3 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0D0D0D] mb-3">
                      {story.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#E8001C] mb-3">
                      {story.summary}
                    </p>
                    <div className="space-y-2 text-xs text-[#555] leading-relaxed">
                      {story.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/donate"
                    className="text-xs font-[var(--font-montserrat)] font-bold text-[#E8001C] hover:text-[#B30016] uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <span>Support This Mission</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
              <span className="w-4 h-0.5 bg-[#E8001C]" />
              Historical Journey
            </span>
            <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D]">
              Our Path to <span className="text-[#E8001C]">Excellence</span>
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E8001C] space-y-12">
            {MILESTONES.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#E8001C] border-4 border-white shadow flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="bg-[#0D0D0D] text-white text-[0.7rem] font-[var(--font-montserrat)] font-black px-2.5 py-0.5 rounded">
                      {m.year}
                    </span>
                    <span className="text-xs font-bold text-[#E8001C] uppercase tracking-wider">
                      {m.subtitle}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0D0D0D] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-[#555] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[var(--font-montserrat)] font-black text-3xl text-white mb-4">
            Be Part of the Next Success Story
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Every champion has a beginning. Your sponsorship gives a rural runner the shoes, training, and courage to write the next chapter.
          </p>
          <Link
            href="/donate"
            className="inline-block bg-[#E8001C] text-white px-8 py-3.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-lg"
          >
            Sponsor an Athlete Today
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
