import React from "react";
import Image from "next/image";
import GetButton from "./ui/GetButton";

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[75%]">
      {/* Solid black background with slight transparency */}
      <div className="absolute h-16 inset-0 bg-black/95 rounded-xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/cube.png" width={20} height={20} alt="Cube logo" />
            <span className="text-xl font-medium text-white tracking-tight">
              Restylex
            </span>
          </div>
          <div className="scale-90 sm:scale-100">
            <GetButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
