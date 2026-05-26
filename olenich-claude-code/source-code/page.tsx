import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import WhyMe from "@/components/WhyMe";
import ParallaxImage from "@/components/ParallaxImage";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <ParallaxImage
          src="/portfolio/harmony_2.jpg"
          alt="Интерьер от Евгении Оленич"
        />
        <WhyMe />
        <Portfolio />
        <ParallaxImage
          src="/portfolio/novogorsk_4.jpg"
          alt="Проект Новогорск"
        />
        <Process />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
