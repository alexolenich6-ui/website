import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ParallaxImage from "@/components/ParallaxImage";
import WhyMe from "@/components/WhyMe";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <ParallaxImage
          src="/portfolio/lica_2.jpg"
          alt="Интерьер ЖК Лица — Евгения Оленич"
          caption="ЖК Лица · Квартира · 62 м²"
          meta="Moscow · 2024"
        />
        <WhyMe />
        <Portfolio />
        <ParallaxImage
          src="/portfolio/harmony_3.jpg"
          alt="Фитнесс Harmony — коммерческий интерьер"
          caption="Harmony · Коммерческий · 350 м²"
          meta="Moscow · 2023"
          height="compact"
        />
        <Process />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </SmoothScroll>
  );
}
