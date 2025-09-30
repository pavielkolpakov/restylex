import React from "react";
import PricingPlanItem from "./ui/PricingPlanItem";

export interface Plan {
  name: string;
  price?: string;
  description: string;
  features: string[];
  popular: boolean;
  hot: boolean;
}

const PricingNew = () => {
  const plans: Plan[] = [
    {
      name: "Base",
      price: "199",
      description: "Cheap and fast! Get your landing page ready in just few days!",
      features: [
        "Custom Landing Page Design based on your brand and goals",
        "1-Year Prepaid Domain included",
        "Basic Hosting Setup",
        "Full Access & Credentials — you own your site",
        "Contact us form integration (connected to your email)",
        "Mobile-Responsive Design",
        "Basic On-Page SEO Setup"
      ],
      popular: false,
      hot: true
    },
    {
      name: "Advanced",
      price: "1,999",
      description: "Individual design solutions and GUARANTEED traffic increase.",
      features: [
        "Individually Designed Multi-Page Website — unique to your brand",
        "Modern Animations & 3D Interactive Elements",
        "Guaranteed Traffic Growth through expert SEO and marketing strategy",
        "Integrated Contact Forms, CTAs, or Booking Systems",
        "Analytics Setup (Google Analytics, tracking pixels, etc.)"
      ],
      popular: true,
      hot: false
    },
    {
      name: "Custom",
      description: "Advanced, fully customizable solutions tailored to your business needs.",
      features: [
        "Advanced AI Integrations (AI agents, chatbots, smart forms, automation tools)",
        "Custom Backend Development (dashboards, APIs, user management, databases, etc.)",
        "Blog Pages & Content Systems (SEO-ready, easy to update, content-rich)",
        "Content Creation for Social Media Marketing (posts, visuals, copywriting tailored to your brand)",
        "Digital Strategy Consulting (growth planning, analytics, marketing funnels)"
      ],
      popular: false,
      hot: false
    },
  ];

  return (
    <section className="md:pb-14 py-8 before:bg-white before:block before:h-16 before:sticky before:top-0 before:w-full before:z-9" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan: Plan, index: number) => (
            <PricingPlanItem key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingNew;
