import React from "react";
import { FiUsers, FiTarget, FiAward, FiTrendingUp } from "react-icons/fi";

const About = () => {
  const values = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Purpose-Driven",
      description: "Every project serves a clear business objective and delivers measurable results.",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Collaborative",
      description: "We work as an extension of your team, ensuring seamless communication and alignment.",
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in design, development, and client service.",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Growth-Focused",
      description: "Our solutions are designed to scale with your business and adapt to future needs.",
    },
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Figma", "Adobe Creative Suite"
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              About Restylex
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between exceptional design and business success, 
                Restylex has been transforming digital experiences for forward-thinking companies since 2020.
              </p>
              <p>
                Our team combines creative excellence with technical expertise, delivering solutions that 
                not only look stunning but drive real business results. We believe that great design is 
                invisible – it simply works.
              </p>
              <p>
                From startups to Fortune 500 companies, we've helped businesses across industries establish 
                their digital presence and achieve sustainable growth through strategic design and development.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 border-2 border-white flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;