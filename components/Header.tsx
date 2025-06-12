import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Progressive blur background */}
      <div className="absolute h-24 inset-0 backdrop-blur-md gradient-blur" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/cube.png" alt="Cube logo" className="h-8" />
            <span className="text-2xl font-bold text-white">Restylex</span>
          </div>

          {/* Button */}
          <button className="px-6 py-2.5 bg-white/10 border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all">
            Get Website
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
