import React from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white mb-2 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white mb-2 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-2 font-medium">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-white mb-2 font-medium">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-black border border-gray-600 text-white focus:border-white focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="website">Website Development</option>
                  <option value="branding">Brand Identity</option>
                  <option value="content">Content Creation</option>
                  <option value="custom">Custom Solutions</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 px-8 font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FiMail className="w-6 h-6 text-white mr-4" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400">hello@restylex.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiPhone className="w-6 h-6 text-white mr-4" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-400">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="w-6 h-6 text-white mr-4" />
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-gray-400">San Francisco, CA</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiClock className="w-6 h-6 text-white mr-4" />
                  <div>
                    <div className="text-white font-medium">Business Hours</div>
                    <div className="text-gray-400">Mon-Fri: 9AM-6PM PST</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300">
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300">
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300">
                  <FiInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-gray-900 p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-3">
                Quick Response Guarantee
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We respond to all inquiries within 24 hours. For urgent projects, 
                call us directly for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;