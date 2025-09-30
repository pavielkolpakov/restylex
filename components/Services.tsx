import React from "react";
import {
  FiCode,
  FiGlobe,
  FiTrendingUp,
  FiMonitor,
  FiEdit3
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Website Development",
      description:
        "From simple landing pages to complex multi-page websites, we build them all with modern design and seamless functionality.",
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Domain & Hosting",
      description:
        "1 year prepaid domain and hosting setup included in all packages.",
    },
    //Todo: change content creation
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
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Custom Solutions",
      description:
        "Charts, widgets, dashboards, third party analytic services... just about anything you can think of, we can build it for you.",
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "AI Integration",
      description:
        "AI Agents, Chatbots and Automation will help you enhance user experience and improve your business.",
    },
  ];

  return (
    <section className="md:py-14 py-8 before:bg-white before:block before:h-16 before:sticky before:top-0 before:w-full before:z-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            What We Do
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            It&apos;s common for small businesses to have outdated websites — or none at all.
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Unfortunately, this is costing them countless valuable opportunities to reach potential clients. 
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            At Restylex, we specialize in building modern websites of any complexity, 
            paired with effective marketing strategies and AI solutions to ensure your business not only attracts visitors but converts them into clients.
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
