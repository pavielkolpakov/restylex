import React from "react";
import { FiSearch, FiPenTool, FiCheckCircle, FiRocket } from "react-icons/fi";

const Process = () => {
  const steps = [
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: "Discovery & Planning",
      description: "We dive deep into your business goals, target audience, and competitive landscape to create a strategic foundation.",
      number: "01",
    },
    {
      icon: <FiPenTool className="w-8 h-8" />,
      title: "Design & Development",
      description: "Our team crafts beautiful, functional solutions that align with your brand and exceed user expectations.",
      number: "02",
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Testing & Refinement",
      description: "Rigorous testing ensures every element works flawlessly across all devices and user scenarios.",
      number: "03",
    },
    {
      icon: <FiRocket className="w-8 h-8" />,
      title: "Launch & Support",
      description: "We handle the launch process and provide ongoing support to ensure your continued success.",
      number: "04",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Process
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A proven methodology that delivers exceptional results through careful planning and meticulous execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-white group-hover:bg-white group-hover:text-black transition-all duration-300 mb-6">
                  <div className="text-white group-hover:text-black transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                <div className="text-6xl font-bold text-gray-800 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-800 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;