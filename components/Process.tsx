import React from "react";
import { FiPenTool, FiCheckCircle, FiZap } from "react-icons/fi";
import { LuNotebookPen } from "react-icons/lu";

const Process = () => {
  const steps = [
    {
      icon: <FiPenTool className="w-8 h-8" />,
      title: "Share Your Vision",
      description:
        "Send us your ideas, requirements, and any assets you already have."
    },
    {
      icon: <LuNotebookPen className="w-8 h-8" />,
      title: "Consultation & Planning",
      description:
        "We review your information, or connect with you on a call, to understand your needs and outline a tailored solution."
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Design & Development",
      description:
        "We design and build your site, integrating best practices for SEO, marketing, and AI."
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Launch & Support",
      description:
        "We register your domain, set up hosting, launch your site, and stay available for ongoing support and improvements."
    },
  ];

  return (
    <section className="md:pb-14 py-8 bg-black before:bg-black before:block before:h-16 before:sticky before:top-0 before:w-full before:z-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Process
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Getting started is simple. Fill out our contact form and tell us about your project — your ideas, goals, and any assets you have. 
          You can also book a consulting call with us to discuss how your website will look, feel, and work for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-white group-hover:bg-white group-hover:text-black transition-all duration-300 mb-6 rounded-md">
                  <div className="text-white group-hover:text-black transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                {/* <div className="text-6xl font-bold text-gray-800 mb-4">
                  {step.number}
                </div> */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-800 transform -translate-y-1/2 rounded-full"></div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
