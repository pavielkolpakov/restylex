import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Business<br />
          With <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-200">AI-Powered</span><br />
          Web Solutions
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          We specialize in creating cutting-edge websites with AI integration,
          advanced SEO, and strategic marketing solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
            Our Work
          </button>
        </div>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Spline scene="https://prod.spline.design/mXJ6MauGPbq37-Lj/scene.splinecode" />
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-10" />
    </div>
  );
};

export default Hero;