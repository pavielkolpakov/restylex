import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <section className="py-24 bg-black rounded-3xl" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s Start Your Project
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss your project and see how we can help bring your
            vision to life.
          </p>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We&apos;re excited to hear from you and explore the possibilities
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <ContactForm />
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
              <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300 rounded-lg"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300 rounded-lg"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300 rounded-lg"
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">
                Quick Response Guarantee
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We respond to all inquiries within 24 hours. For urgent
                projects, call us directly for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
