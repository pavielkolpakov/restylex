import React from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const PricingNew = () => {
  const plans = [
    {
      name: "Base",
      price: "199",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Basic SEO optimization",
        "Contact form integration",
        "3 months support",
        "SSL certificate",
        "Google Analytics setup",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "1,999",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Custom design system",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "6 months support",
        "Performance optimization",
        "Social media integration",
      ],
      popular: true,
    },
    {
      name: "Custom",
      description: "Comprehensive solution for large organizations",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced integrations",
        "Multi-language support",
        "Custom analytics dashboard",
        "12 months support",
        "Priority support",
        "Training sessions",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include
            our commitment to excellence and ongoing support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-white border-2 transition-all duration-300 hover:shadow-lg flex flex-col rounded-xl ${
                plan.popular
                  ? "border-black shadow-lg"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-2 text-sm font-medium rounded-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {plan.name}
                </h3>
                {plan.price && (<div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-black">
                    ${plan.price}
                  </span>
                </div>)}
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <FiCheck className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  className={`w-full py-4 px-6 font-semibold transition-all duration-300 flex items-center justify-center group cursor-pointer rounded-lg ${
                    plan.popular
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-white text-black border-2 border-black hover:bg-black hover:text-white"
                  }`}
                >
                  Get Started
                  <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 border-2 border-gray-200 max-w-2xl mx-auto rounded-xl">
            <h3 className="text-2xl font-bold text-black mb-4">
              Custom Project
            </h3>
            <p className="text-gray-600 mb-6">
              Need something unique? We create tailored solutions for complex
              requirements and enterprise needs.
            </p>
            <button className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors duration-300 rounded-lg">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingNew;
