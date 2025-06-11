import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <Hero />
        <Features />
        <Pricing />
      </main>
    </>
  );
}
