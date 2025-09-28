import React from "react";
import { HyperText } from "./ui/hyper-text";

const Header = () => {
  return (
    <header className="mb-px mix-blend-difference bg-black text-white shadow-[0px_0px_0px_0px_rgba(250,250,250,0),0px_0px_0px_0px_rgba(250,250,250,0),0px_0px_0px_1px_rgba(250,250,250,0.1)] fixed w-full z-10">
      <div className="px-6 md:px-26 flex items-center justify-between w-full h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <Image src="/cube.png" width={20} height={20} alt="Cube logo" /> */}
          <span className="text-3xl font-bold tracking-tight">
            Restylex
          </span>
        </div>
        <div className="scale-90 sm:scale-100">
          <HyperText 
            className="cursor-pointer" 
            text="Start"
            duration={400}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
