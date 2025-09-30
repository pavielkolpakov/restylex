"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's included in your web development service?",
      answer:
        "Our web development service includes custom design, responsive development, SEO optimization, content management system integration, security setup, performance optimization, and ongoing support. We also provide training on how to manage your website content.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A basic website typically takes 4-6 weeks, while more complex projects with custom functionality can take 8-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, all our packages include post-launch support. This covers technical issues, content updates, security monitoring, and performance optimization. We offer different support levels depending on your needs, from basic maintenance to comprehensive ongoing development.",
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer:
        "Absolutely! We can work within your existing brand guidelines or help you develop new ones. Our team is experienced in translating brand identities into digital experiences while maintaining consistency across all touchpoints.",
    },
    {
      question: "What's your process for custom projects?",
      answer:
        "Our custom project process begins with a discovery phase to understand your unique requirements. We then create a detailed proposal with timeline and pricing, followed by iterative design and development phases with regular client feedback sessions.",
    },
    {
      question: "Do you offer SEO and digital marketing services?",
      answer:
        "Yes, we provide comprehensive SEO optimization and digital marketing services. This includes keyword research, on-page optimization, content strategy, social media integration, and performance tracking to help improve your online visibility and reach.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, and various CMS platforms. Our technology choices are always based on what's best for your specific project requirements and long-term goals.",
    },
    {
      question: "Can you help migrate our existing website?",
      answer:
        "Yes, we handle website migrations carefully to ensure no data loss and minimal downtime. We analyze your current site, plan the migration strategy, and execute the transfer while preserving SEO rankings and user experience.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="md:pb-18 before:bg-white before:block before:h-16 before:sticky before:top-0 before:w-full before:z-9">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Here&apos;s what you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 hover:border-gray-300 transition-colors duration-300"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-black pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FiMinus className="w-5 h-5 text-black" />
                  ) : (
                    <FiPlus className="w-5 h-5 text-black" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is
              here to help with any specific questions about your project.
            </p>
            <button className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
