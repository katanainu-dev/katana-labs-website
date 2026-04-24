import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import CreativeServices from "@/components/CreativeServices";
import GamingSection from "@/components/GamingSection";
import Portfolio from "@/components/Portfolio";
import Philosophy from "@/components/Philosophy";
import Pricing from "@/components/Pricing";
import AdditionalServices from "@/components/AdditionalServices";
import MegaCTA from "@/components/MegaCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealScript from "@/components/RevealScript";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Results />
      <CreativeServices />
      <GamingSection />
      <Portfolio />
      <Philosophy />
      <Pricing />
      <AdditionalServices />
      <MegaCTA />
      <Contact />
      <Footer />
      <RevealScript />
    </>
  );
}
