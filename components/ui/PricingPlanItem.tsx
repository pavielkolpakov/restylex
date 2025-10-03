'use client'

import React from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { Plan } from "../Pricing";

export default function PricingPlanItem(plan: Plan) {
  return (
    <div
      className={`relative p-8 bg-white border-2 transition-all duration-300 hover:shadow-lg flex flex-col cursor-pointer rounded-md`}
    >
      {/* {plan.hot && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-black text-white px-4 py-2 text-sm font-medium rounded-lg">
            🔥 Hot Deal!
          </span>
        </div>
      )}

      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-black text-white px-4 py-2 text-sm font-medium rounded-lg">
            Best Price Value
          </span>
        </div>
      )} */}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
        {plan.price && (
          <div className="flex items-baseline justify-center mb-4">
            <span className="text-5xl font-bold text-black">${plan.price}</span>
          </div>
        )}
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
          className={`w-full py-4 px-6 font-semibold transition-all duration-300 flex items-center justify-center group cursor-pointer rounded-sm ${
            false ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black border-2 border-black hover:bg-black hover:text-white"
          }`}
          onClick={scrollToContact}
        >
          Get Started
          <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

const scrollToContact: VoidFunction = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};