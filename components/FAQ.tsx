"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () =>
{
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to build my website?",
      answer: "For a simple landing page (Base Plan), we deliver in maximum 3 days. More advanced or custom websites may take from 1 to 4 weeks, depending on complexity and features.",
    },
    {
      question: "Do I need to provide content for the website?",
      answer: "Not necessarily. If you already have text, images, or branding, we’ll use them. If not, we can create content for you — including copywriting, visuals, and even blog/social media content as part of our advanced or custom plans.",
    },
    {
      question: "Can you help me get more traffic after the website is live?",
      answer: "Yes! Alongside web development, we provide SEO optimization and marketing strategies designed to bring traffic, generate leads, and increase conversions.",
    },
    {
      question: "What's about AI integrations?",
      answer: "With our Custom plan, we can integrate AI chatbots, smart forms, automation tools, online booking widgets and dashboards to make your website more interactive and efficient.",
    },
    {
      question: "How do I get started?",
      answer: "Simply fill out our contact form or book a free consultation call. Share some basic info about your brand and goals, and we’ll prepare everything to get your website live in just a few days.",
    },
    {
      question: "Why can’t I use any of the modern AI website building tools?",
      answer: "We all know that being a business owner is a busy job, and you probably don’t have time to handle everything on your own. Even if you manage to build a good-looking website with solid content, you still need to deploy and host it, then deal with domain settings. And most importantly — how will you actually get visitors to your website?",
    },
    {
      question: "If it’s so complicated, why not just hire a full-time web developer?",
      answer: "Good luck! The annual cost of a full-time design engineer capable of design, front-end development, backend development, and database design exceeds $200,000, plus benefits. That’s before you factor in recruiting costs, interview time, and ongoing management. What’s great about Restylex is that you get the highest quality outcome with low risk. It’s a rare win-win.",
    }
  ];

  const toggleFAQ = (index: number) =>
  {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="md:py-14 py-8 before:bg-white before:block before:h-16 before:sticky before:top-0 before:w-full before:z-9">
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
              className="border border-gray-200 hover:border-gray-300 transition-colors duration-300 rounded-xl"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 rounded-xl"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-black pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <div className={`transform transition-transform duration-500 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    {openIndex === index ? (
                      <FiMinus className="w-5 h-5 text-black" />
                    ) : (
                      <FiPlus className="w-5 h-5 text-black" />
                    )}
                  </div>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 border border-gray-200 rounded-xl">
            <h3 className="text-2xl font-bold text-black mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is
              here to help with any specific questions about your project.
            </p>
            <button className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors duration-300 rounded-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
