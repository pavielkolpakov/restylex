import React from "react";
import { FiStar } from "react-icons/fi";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content:
        "Restylex transformed our digital presence completely. The new website increased our conversion rate by 180% and perfectly captures our brand essence.",
      rating: 5,
      metric: "180% conversion increase",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthCorp",
      content:
        "Working with Restylex was seamless. Their strategic approach and attention to detail resulted in a platform that our customers love.",
      rating: 5,
      metric: "95% user satisfaction",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, Creative Studio",
      content:
        "The team's creativity and technical expertise exceeded our expectations. Our new brand identity has received incredible feedback from clients.",
      rating: 5,
      metric: "300% brand recognition",
    },
  ];

  const companies = [
    "TechStart",
    "GrowthCorp",
    "Creative Studio",
    "InnovateLab",
    "FutureScale",
    "DigitalEdge",
  ];

  const metrics = [
    { value: "2.5M+", label: "Users Reached" },
    { value: "150%", label: "Average ROI Increase" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "48h", label: "Average Response Time" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Client Success Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Here&apos;s what our clients have to say about working with us.
          </p>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            &quot;Working with this team was an absolute pleasure. They
            delivered beyond our expectations.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-black fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-black">
                  {testimonial.name}
                </div>
                <div className="text-gray-600 text-sm mb-2">
                  {testimonial.position}
                </div>
                <div className="text-sm font-medium text-black">
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-black mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-black mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-xl font-semibold text-gray-400 hover:text-black transition-colors duration-300"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
