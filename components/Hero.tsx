import React from 'react';
import { Scene } from "@/components/ui/rubik-s-cube";

const Hero = () => {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center">
      <div className="absolute inset-0">
        <Scene />
      </div>
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 tracking-tight mix-blend-difference text-white text-center px-4 md:px-6">
        From Website to Growth
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-white mix-blend-exclusion max-w-2xl px-4 md:px-6 leading-relaxed text-center">
        All in One Place.
      </p>
    </div>
  );
};

export default Hero;