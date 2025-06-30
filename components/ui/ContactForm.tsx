"use client";

import React from "react";

const ContactForm = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "7756aa38-cf0b-4d04-adda-09ef5b643eb2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div>
        <div>
          <label htmlFor="firstName" className="block text-white mb-2 font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 rounded-lg"
            placeholder="John"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-white mb-2 font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 rounded-lg"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-white mb-2 font-medium">
          Company
        </label>
        <input
          type="text"
          name="company"
          required
          className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 rounded-lg"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-white mb-2 font-medium">
          Service Interested In
        </label>
        <select
          name="service"
          required
          className="w-full px-4 py-3 bg-black border border-gray-600 text-white focus:border-white focus:outline-none transition-colors duration-300 rounded-lg"
        >
          <option value="">Select a plan</option>
          <option value="base">Base</option>
          <option value="advanced">Advanced</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-white mb-2 font-medium">
          Project Details
        </label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 resize-none rounded-lg"
          placeholder="Tell us about your project, goals, and timeline..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-white text-black py-4 px-8 font-semibold hover:bg-gray-200 transition-colors duration-300 rounded-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
