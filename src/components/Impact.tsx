import Image from "next/image";
import Link from "next/link";

const impacts = [
  {
    tag: "Athletes",
    label: "Athletes Supported",
    value: "50+",
    desc: "Young runners receiving gear, coaching, and nutrition",
  },
  {
    tag: "Events",
    label: "Championships",
    value: "5+",
    desc: "Regional and national competition participations",
  },
  {
    tag: "Reach",
    label: "Counties Reached",
    value: "4",
    desc: "Nyamira, Kisii, Kericho & Bomet high-altitude zones",
  },
  {
    tag: "Education",
    label: "School Enrolment",
    value: "100%",
    desc: "Every athlete remains active in primary or secondary school",
  },
];

export default function Impact() {
  return (
    <section className="py-14 sm:py-20 bg-charcoal-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Stats */}
          <div>
            <p className="section-label text-red">Our Track Record</p>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-4 sm:mb-6">
              Measurable Progress, <span className="text-red">Lasting Impact</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              Since 2020, Kerumbe Athletics has been quietly transforming the lives
              of young runners across rural Kenya through disciplined coaching, gear provision,
              and academic tracking.
            </p>

            <div className="grid grid-cols-2 gap-3.5 sm:gap-5">
              {impacts.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-red/50 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-[9.5px] sm:text-[10px] font-heading font-bold uppercase tracking-wider text-red block mb-1.5 sm:mb-2">
                    {item.tag}
                  </span>
                  <div className="font-heading font-black text-2xl sm:text-4xl text-white mb-1">
                    {item.value}
                  </div>
                  <div className="font-heading font-bold text-xs sm:text-sm text-gray-200 uppercase tracking-wider mb-1 sm:mb-1.5">
                    {item.label}
                  </div>
                  <div className="text-gray-400 text-[11px] sm:text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/stories" className="btn-red w-full sm:w-auto justify-center text-center">
                Read Impact Stories
              </Link>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/belgut-finish-gantry.jpg"
                  alt="Kerumbe athlete at Belgut Marathon 2026 finish"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative h-34 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/kericho-college.jpg"
                    alt="Education at Kericho"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-34 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/community-group.png"
                    alt="Community outreach"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden col-span-2 shadow-lg">
                <Image
                  src="/images/team-meal.jpg"
                  alt="Athletes sharing a team meal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                  <span className="text-white font-heading font-bold text-xs uppercase tracking-wider">
                    Nutrition &amp; Athlete Welfare Program
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
