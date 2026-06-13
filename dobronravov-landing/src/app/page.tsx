import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recognition from "@/components/Recognition";
import BigIdea from "@/components/BigIdea";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Audience from "@/components/Audience";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <Recognition />
        <BigIdea />
        <About />
        <Approach />
        <Audience />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCTA />
    </SmoothScroll>
  );
}
