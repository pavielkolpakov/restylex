"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "7756aa38-cf0b-4d04-adda-09ef5b643eb2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <form className="space-y-6 md:w-[60%] w-full" onSubmit={onSubmit}>
      <div>
        <div>
          <label
            htmlFor="firstName"
            className="block text-white mb-2 font-medium"
          >
            Full Name
          </label>
          <Input
            type="text"
            name="name"
            required
            className="w-full h-12 px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 rounded-lg"
            placeholder="John"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-white mb-2 font-medium">
          Email Address
        </label>
        <Input
          type="email"
          name="email"
          required
          className="w-full h-12 px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 rounded-lg"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-white mb-2 font-medium">
          Company
        </label>
        <Input
          type="text"
          name="company"
          required
          className="w-full h-12 px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 rounded-lg"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-white mb-2 font-medium">
          Service Interested In
        </label>
        <Select name="service" required>
          <SelectTrigger className="w-full !h-12 px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 rounded-lg">
            <SelectValue placeholder="Select a plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="base">Base</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-white mb-2 font-medium">
          Project Details
        </label>
        <Textarea
          name="message"
          required
          rows={6}
          className="w-full h-32 px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 resize-none rounded-lg"
          placeholder="Tell us about your project, goals, and timeline..."
        />
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
