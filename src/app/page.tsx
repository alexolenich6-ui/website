import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ParallaxImage from "@/components/ParallaxImage";
import WhyMe from "@/components/WhyMe";
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
          src="/portfolio/lica_2.jpg"
          alt="Интерьер ЖК Лица — Евгения Оленич"
          caption="ЖК Лица · Квартира · 62 м²"
          meta="Moscow · 2024"
        />
        <WhyMe />
        <section className="min-h-[40vh] flex items-center justify-center px-6">
          <p className="eyebrow">Следующие секции — в&nbsp;разработке</p>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
