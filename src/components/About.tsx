import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 bg-offwhite overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Images Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl col-span-2">
                <Image
                  src="/images/kericho-finish.jpg"
                  alt="Kerumbe athletes at the Kericho Cross Country finish line"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="font-heading font-bold text-sm bg-red px-3 py-1 rounded">
                    Kericho Cross Country
                  </span>
                </div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/athletes-track.jpg"
                  alt="Athletes on competition field"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/team-outdoor.jpg"
                  alt="Team strategy session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 md:right-6 bg-white rounded-2xl shadow-xl p-5 text-center">
              <div className="font-heading font-black text-4xl text-red">2020</div>
              <div className="font-heading font-bold text-xs text-charcoal uppercase tracking-wider mt-1">
                Founded
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="section-label">About Kerumbe</p>
            <h2 className="section-title mb-6">
              Nurturing Champions From the Heart of{" "}
              <span className="text-red">Rural Kenya</span>
            </h2>

            <div className="space-y-4 text-muted text-base leading-relaxed mb-8">
              <p>
                Founded in 2020 by{" "}
                <strong className="text-charcoal">Chairman Steve Makwae Gekara</strong>,
                Kerumbe Athletics Sports Club was born from a simple but powerful
                belief: that Kenya&apos;s greatest runners are hiding in its rural
                primary and secondary schools, waiting only for the opportunity to
                be discovered.
              </p>
              <p>
                We provide holistic support — running gear, structured coaching,
                nutritious meals, academic mentorship, and competition access — to
                young athletes from Kericho County and beyond.
              </p>
              <p>
                Our philosophy is uncompromising:{" "}
                <strong className="text-charcoal">education comes first.</strong> Every
                athlete we support remains enrolled in school, because we believe the
                greatest champions are those who win both on the track and in life.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { n: "50+", label: "Athletes Supported" },
                { n: "3+", label: "Counties Reached" },
                { n: "100%", label: "School Enrolment" },
                { n: "5+", label: "Events Participated" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="font-heading font-black text-2xl text-red">{s.n}</div>
                  <div className="font-heading font-semibold text-xs text-charcoal uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-red">
                Read Our Full Story
              </Link>
              <Link href="/what-we-do" className="btn-outline">
                What We Do
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
