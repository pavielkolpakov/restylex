"use client";

import { FiArrowRight } from "react-icons/fi";

const scrollToContact: VoidFunction = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function GetButton() {
  return (
    <button
      onClick={scrollToContact}
      className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer flex items-center"
    >
      Get Started
      <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );
}