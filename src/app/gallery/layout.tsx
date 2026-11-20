import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Training, Competitions & School Outreach",
  description:
    "Explore authentic photo moments from Kerumbe Athletics Sports Club: morning workouts at Koradrops Academy, breakfast hospitality with Director Hon. Mrs. Hellen Chepkwony, Belgut Marathon 2026 finish lines, and official team kits.",
  keywords: [
    "kierumba athletic photos",
    "kerumbe athletics gallery",
    "koradrops academy athletics",
    "hon mrs hellen chepkwony",
    "belgut marathon 2026 photos",
    "kericho cross country photos",
    "nyamira runners gallery",
  ],
  alternates: {
    canonical: "https://www.kerumbeathletic.com/gallery",
  },
  openGraph: {
    title: "Kerumbe Athletics Photo Gallery | Rural Kenyan Runners in Action",
    description:
      "Authentic photos of student-athletes in Nyamira County, Belgut Marathon 2026, and training at Koradrops Academy.",
    url: "https://www.kerumbeathletic.com/gallery",
    images: ["https://www.kerumbeathletic.com/images/koradrops-team-coach.jpg"],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
