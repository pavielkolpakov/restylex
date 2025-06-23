import React from "react";
import { FiCode, FiTrendingUp, FiTarget } from "react-icons/fi";
import { RiRobot2Fill } from "react-icons/ri";

const Features = () => {
  const features = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Custom Web Development",
      description:
        "Beautiful, responsive websites tailored to your brand's unique needs and goals.",
    },
    {
      icon: <RiRobot2Fill className="w-8 h-8" />,
      title: "AI Integration",
      description:
        "Leverage the power of artificial intelligence to automate and enhance your business processes.",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "SEO Optimization",
      description:
        "Boost your online visibility with our advanced SEO strategies and techniques.",
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Digital Marketing",
      description:
        "Comprehensive marketing solutions to reach and engage your target audience.",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine cutting-edge technology with strategic thinking to
            deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
