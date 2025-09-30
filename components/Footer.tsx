import React from "react";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const services = [
    "Website Development",
    "Brand Identity",
    "Content Creation",
    "Custom Solutions",
    "Digital Marketing",
    "SEO Optimization"
  ];

  const company = [
    "About Us",
    "Our Process",
    "Portfolio",
    "Careers",
    "Blog",
    "Contact"
  ];

  const legal = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR Compliance"
  ];

  return (
    <footer className="bg-black before:bg-black before:block before:h-16 before:sticky before:top-0 before:w-full before:z-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src="/cube.png" width={24} height={24} alt="Cube logo" />
              <span className="text-2xl font-bold">Restylex</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming digital experiences through strategic design and innovative development solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300">
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300">
                <FiTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300">
                <FiInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FiMail className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-400">hello@restylex.com</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 Restylex. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              {legal.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;