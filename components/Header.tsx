import React from "react";
import { HyperText } from "./ui/hyper-text";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mb-px mix-blend-difference bg-black text-white shadow-[0px_0px_0px_0px_rgba(250,250,250,0),0px_0px_0px_0px_rgba(250,250,250,0),0px_0px_0px_1px_rgba(250,250,250,0.1)] fixed w-full z-10">
      <div className="px-6 md:px-26 flex items-center justify-between w-full h-16">
        <div className="flex items-center gap-2">
          <Image src="/cube.png" width={20} height={20} alt="Cube logo" />
          <span className="text-2xl font-bold tracking-tight">
            Restylex
          </span>
        </div>
        <div className="scale-90 sm:scale-100 flex items-center gap-5">
          <HyperText 
            className="cursor-pointer" 
            text="Pricing"
            duration={400}
            conteinerId="pricing"
          />
          <HyperText 
            className="cursor-pointer" 
            text="Contact"
            duration={400}
            conteinerId="contact"
          />
          <HyperText 
            className="cursor-pointer" 
            text="Blog"
            duration={400}
            conteinerId="blog"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
