import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
