"use client";

const scrollToContact: VoidFunction = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function GetButton() {
  return (
    <button
      onClick={scrollToContact}
      className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
    >
      Get Website
    </button>
  );
}