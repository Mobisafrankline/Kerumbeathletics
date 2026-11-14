import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Gallery from "@/components/Gallery";
import Donate from "@/components/Donate";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Programs />
      <Impact />
      <Gallery />
      <Donate />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
