import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <section className="min-h-[40vh] flex items-center justify-center px-6">
          <p className="eyebrow">Следующие секции — в&nbsp;разработке</p>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
