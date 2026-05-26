import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center bg-espresso text-cream"
        >
          <div className="px-6 md:px-16 text-center">
            <p className="eyebrow !text-cream/40 mb-8">
              Евгения Оленич · Дизайн интерьера · Москва
            </p>
            <h1 className="font-serif font-light text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.02em]">
              Foundation ready
            </h1>
            <p className="mt-10 font-sans text-[12px] tracking-[0.3em] uppercase text-cream/50">
              Hero · Manifesto · Portfolio · About · Contact — coming next
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
