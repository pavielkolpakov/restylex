import React from 'react';
import { Scene } from "@/components/ui/rubik-s-cube";

const Hero = () => {
  return (
    <section className="before:bg-black before:block before:h-16 before:sticky before:top-0 before:w-full before:z-9">
    <div className="h-screen relative flex flex-col justify-center items-center">
      <div className="absolute inset-0">
        <Scene />
      </div>
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 tracking-tight mix-blend-difference text-white text-center px-4 md:px-6">
        Elevate Your Business
      </h1>
      <p className="text-base sm:text-lg md:text-2xl text-white mix-blend-exclusion max-w-2xl px-4 md:px-6 leading-relaxed text-center">
        With a Modern, Fresh Looking Website, AI Agents and Smart Marketing Solutions
      </p>
    </div>
    </section>
  );
};

export default Hero;