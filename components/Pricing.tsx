import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "999",
      description: "Perfect for small businesses getting started",
      features: [
        "Custom Website Design",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form Integration",
        "5 Pages",
        "3 Months Support",
      ],
      excluded: [
        "AI Integration",
        "Advanced Analytics",
        "Marketing Strategy",
        "Custom Automation",
      ],
    },
    {
      name: "Professional",
      price: "2499",
      description: "Advanced features for growing businesses",
      features: [
        "Everything in Starter",
        "AI Chatbot Integration",
        "Advanced SEO Optimization",
        "Content Strategy",
        "10 Pages",
        "Social Media Integration",
        "6 Months Support",
        "Monthly Performance Reports",
      ],
      excluded: ["Custom Automation", "Enterprise API Integration"],
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-800 p-8 relative overflow-hidden"
            >
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm rounded-bl-lg">
                  Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-white">
                  €{plan.price}
                </span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-gray-300">
                    <FiCheck className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </div>
                ))}
                {plan.excluded.map((feature, i) => (
                  <div key={i} className="flex items-center text-gray-500">
                    <FiX className="w-5 h-5 text-red-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full py-4 px-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
