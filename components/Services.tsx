import React from "react";
import {
  FiCode,
  FiTrendingUp,
  FiTarget,
  FiEdit3,
  FiPenTool 
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Website Development",
      description:
        "Custom-built websites that convert visitors into customers with modern design and seamless functionality.",
    },
    {
      icon: <FiPenTool className="w-8 h-8" />,
      title: "Brand Identity",
      description:
        "Distinctive visual identities that capture your brand essence and resonate with your target audience.",
    },
    {
      icon: <FiEdit3 className="w-8 h-8" />,
      title: "Content Creation",
      description:
        "Compelling content strategies that engage your audience and drive meaningful business results.",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description:
        "Combining advanced SEO and targeted marketing campaigns, we bring more traffic to your site and more customers to your business.",
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Custom Solutions",
      description:
        "Tailored digital solutions designed specifically for your unique business challenges and goals.",
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "AI Integration",
      description:
        "AI Agents, Chatbots and Automation will help you enhance user experience and improve your business.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            What We Do
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Need a MODERN looking website for your business but scared of the complexity, expenses or developing process? We will handle 
            everything — from designing and developing to buying the domain, setting up hosting, and deploying it online. 
            Just give us some information about your brand and we will prepare everything for you in DAYS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg rounded-xl"
            >
              <div className="w-16 h-16 border border-gray-300 group-hover:border-black flex items-center justify-center mb-6 transition-all duration-300 rounded-lg">
                <div className="text-gray-600 group-hover:text-black transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-gray-900 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
