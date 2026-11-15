import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-14 sm:py-20 bg-offwhite overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Images Grid */}
          <div className="relative order-2 lg:order-1 pt-4 pb-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-xl col-span-2">
                <Image
                  src="/images/kericho-finish.jpg"
                  alt="Kerumbe athletes at the Kericho Cross Country finish line"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <span className="font-heading font-bold text-xs sm:text-sm bg-red px-2.5 sm:px-3 py-1 rounded shadow">
                    Kericho Cross Country
                  </span>
                </div>
              </div>
              <div className="relative h-40 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/athletes-track.jpg"
                  alt="Athletes on competition field"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/team-outdoor.jpg"
                  alt="Team strategy session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-2 sm:-bottom-4 right-2 sm:right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3.5 sm:p-5 text-center border border-gray-100">
              <div className="font-heading font-black text-2xl sm:text-4xl text-red leading-none">2020</div>
              <div className="font-heading font-bold text-[9px] sm:text-xs text-charcoal uppercase tracking-wider mt-1">
                Founded
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="section-label">About Kerumbe</p>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-dark leading-tight mb-4 sm:mb-6">
              Nurturing Champions From the Heart of{" "}
              <span className="text-red">Rural Kenya</span>
            </h2>

            <div className="space-y-3.5 sm:space-y-4 text-muted text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              <p>
                Founded in 2020 by{" "}
                <strong className="text-charcoal-dark">Chairman Steve Makwae Gekara</strong>,
                Kerumbe Athletics Sports Club was born from a simple but powerful
                belief: that Kenya&apos;s greatest runners are hiding in its rural
                primary and secondary schools, waiting only for the opportunity to
                be discovered.
              </p>
              <p>
                We provide holistic support including running gear, structured coaching,
                nutritious meals, academic mentorship, and competition access to
                young athletes from Nyamira County and beyond.
              </p>
              <p>
                Our philosophy is uncompromising:{" "}
                <strong className="text-charcoal-dark">education comes first.</strong> Every
                athlete we support remains enrolled in school, because we believe the
                greatest champions are those who win both on the track and in life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/about" className="btn-red justify-center text-center">
                Read Our Full Story
              </Link>
              <Link href="/what-we-do" className="btn-outline justify-center text-center">
                What We Do
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
