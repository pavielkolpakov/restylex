import React from 'react';
import { Scene } from "@/components/ui/rubik-s-cube";

const Hero = () => {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center">
      <div className="absolute inset-0">
        <Scene />
      </div>
      <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight mix-blend-difference text-white">
        From Website to Growth
      </h1>
      <p className="text-lg md:text-xl text-white mix-blend-exclusion max-w-2xl px-6 leading-relaxed">
        All in One Place.
      </p>
    </div>
  );
};

export default Hero;