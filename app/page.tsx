import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <Services />
        <Process />
        {/* <Portfolio /> */}
        <Pricing />
        {/* <About />
        <Testimonials /> */}
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}