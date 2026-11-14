"use client";

import { DONATION_TIERS } from "@/data/siteData";

export default function Donate() {
  return (
    <section
      id="donate"
      className="py-24 bg-[#0D0D0D] relative overflow-hidden"
      style={{ backgroundImage: "url('/images/kericho-finish.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-[#0D0D0D]/92" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
        {/* Text */}
        <div>
          <SectionLabel>Support Us</SectionLabel>
          <h2 className="font-[var(--font-montserrat)] font-bold text-3xl lg:text-4xl text-white leading-tight mb-4">
            Help a Young Runner{" "}
            <span className="text-[#E8001C]">Reach Their Dream</span>
          </h2>
          <p className="text-white/70 leading-relaxed mb-7">
            Every contribution — big or small — makes a direct difference in the life of a
            Kenyan rural athlete. Your donation pays for shoes, meals, coaching, travel, and hope.
          </p>
          <ul className="space-y-3">
            {DONATION_TIERS.map((t) => (
              <li
                key={t.amountKES}
                className="text-white/80 text-sm flex items-center gap-2 border-b border-white/8 pb-3"
              >
                <span className="text-base">{t.icon}</span>
                <strong className="text-white">{t.amountKES}</strong>
                <span>({t.amountUSD})</span>
                <span>—</span>
                <span>{t.description}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <h3 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0D0D0D] mb-1">
            Make a Donation
          </h3>
          <p className="text-[#555] text-sm mb-6">
            Your generosity changes lives. Choose how you&apos;d like to give:
          </p>

          <DonateMethod icon="📱" title="M-Pesa">
            <p className="text-sm">
              Send to:{" "}
              <strong className="text-[#E8001C] font-bold">0790 700228</strong>
            </p>
            <p className="text-xs text-[#AAAAAA] mt-0.5">Lipa Na M-Pesa</p>
          </DonateMethod>

          <DonateMethod icon="💳" title="PayPal">
            <p className="text-sm">
              <strong className="text-[#E8001C] font-bold">stevegekara04@gmail.com</strong>
            </p>
            <p className="text-xs text-[#AAAAAA] mt-0.5">International donations welcome</p>
          </DonateMethod>

          <a
            href="mailto:stevegekara04@gmail.com?subject=Kerumbe Athletics Donation"
            className="block w-full text-center bg-[#E8001C] text-white font-[var(--font-montserrat)] font-bold px-6 py-3 rounded text-sm tracking-wide hover:bg-[#B30016] transition-colors mt-2"
          >
            Contact to Donate →
          </a>
        </div>
      </div>
    </section>
  );
}

function DonateMethod({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 p-4 bg-[#F5F5F5] rounded-lg mb-4">
      <span className="text-3xl flex-shrink-0">{icon}</span>
      <div>
        <strong className="block font-[var(--font-montserrat)] text-sm text-[#0D0D0D] mb-0.5">
          {title}
        </strong>
        {children}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-[var(--font-montserrat)] font-bold text-[0.72rem] tracking-[3px] uppercase text-[#FF1A35] mb-3">
      <span className="w-5 h-0.5 bg-[#FF1A35] inline-block flex-shrink-0" />
      {children}
    </span>
  );
}

