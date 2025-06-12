import React from "react";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern online store with seamless checkout experience",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: "+150% conversion rate",
    },
    {
      title: "Brand Identity System",
      category: "Brand Design",
      description: "Complete visual identity for tech startup",
      image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: "40% brand recognition increase",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Intuitive analytics platform for data visualization",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: "60% user engagement boost",
    },
    {
      title: "Mobile App Design",
      category: "Mobile Development",
      description: "Cross-platform app with native performance",
      image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: "4.8★ app store rating",
    },
    {
      title: "Marketing Campaign",
      category: "Digital Marketing",
      description: "Multi-channel campaign driving qualified leads",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: "300% lead generation increase",
    },
    {
      title: "Corporate Website",
      category: "Web Development",
      description: "Professional presence for Fortune 500 company",
      image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: "85% faster load times",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Our Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden border border-gray-200 hover:border-black transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-sm font-medium text-black">
                  {project.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;