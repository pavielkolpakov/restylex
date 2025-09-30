import React from "react";
import { HyperText } from "./ui/hyper-text";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-px mix-blend-difference bg-black text-white shadow-[0px_0px_0px_0px_rgba(250,250,250,0),0px_0px_0px_0px_rgba(250,250,250,0),0px_0px_0px_1px_rgba(250,250,250,0.1)] fixed w-full z-10">
      <div className="px-6 md:px-26 flex items-center justify-between w-full h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/cube.png" width={25} height={25} alt="Cube logo" />
          <span className="font-semibold text-lg leading-none md:text-[28px] md:leading-none md:tracking-[-0.03em]">
            Restylex
          </span>
        </Link>
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
