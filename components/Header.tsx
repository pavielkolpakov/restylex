import React from "react";
import Image from "next/image";
import GetButton from "./ui/GetButton";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/10">
      {/* Solid black background with slight transparency */}
      <div className="absolute h-16 inset-0 bg-black/95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/cube.png" width={20} height={20} alt="Cube logo" />
            <span className="text-xl font-medium text-white tracking-tight">
              Restylex
            </span>
          </div>
          <GetButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
