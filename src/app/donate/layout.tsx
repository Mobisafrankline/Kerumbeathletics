import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate & Support Our Athletes | Financial Assistance Appeal",
  description:
    "Provide urgent financial assistance to empower rural Kenyan student-athletes from Nyamira County. Support running shoes, training kits, balanced nutrition, school fees, and competition travel. Donate directly via M-Pesa (0790 700228 - Steve Makwae Gekara) or PayPal (stevegekara04@gmail.com).",
  keywords: [
    "kierumba athletic donate",
    "kerumbe athletics donate",
    "donate to kenyan runners",
    "financial assistance kenyan athletes",
    "m-pesa 0790700228",
    "paypal stevegekara04@gmail.com",
    "running shoes donation kenya",
    "nyamira athletics donation",
  ],
  alternates: {
    canonical: "https://www.kerumbeathletic.com/donate",
  },
  openGraph: {
    title: "Support Rural Kenyan Runners | Donate to Kerumbe Athletics",
    description:
      "Help rural student-athletes in Nyamira County achieve their dreams. Donate via M-Pesa (0790 700228) or PayPal (stevegekara04@gmail.com).",
    url: "https://www.kerumbeathletic.com/donate",
    images: ["https://www.kerumbeathletic.com/images/og-share.jpg"],
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
