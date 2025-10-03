"use client";

import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import
{
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const ContactForm = () =>
{
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const onSubmit = async (event: FormEvent<HTMLFormElement>) =>
  {
    event.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting || isSubmitted) return;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Validate all required fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // Check for empty fields and set errors
    const newErrors: { [key: string]: boolean } = {};
    if (!name?.trim()) newErrors.name = true;
    if (!email?.trim()) newErrors.email = true;
    if (!company?.trim()) newErrors.company = true;
    if (!service?.trim()) newErrors.service = true;
    if (!message?.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0)
    {
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    setIsSubmitting(true);

    try
    {
      formData.append("access_key", "7756aa38-cf0b-4d04-adda-09ef5b643eb2");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success)
      {
        form.reset();
        setIsSubmitted(true);
        setErrors({}); // Clear any errors on success
      } else
      {
        console.log("Error", data);
      }
    } catch (error)
    {
      console.error("Submit error:", error);
    } finally
    {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6 md:w-[60%] w-full" onSubmit={onSubmit}>
      <div>
        <div>
          <Input
            type="text"
            name="name"
            className={`contact-input h-12 ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
            placeholder="Full Name"
          />
        </div>
      </div>

      <div>
        <Input
          type="email"
          name="email"
          className={`contact-input h-12 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-white'}`}
          placeholder="Email"
        />
      </div>

      <div>
        <Input
          type="text"
          name="company"
          className={`contact-input h-12 ${errors.company ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-white'}`}
          placeholder="Company Name"
        />
      </div>

      <div>
        <Select name="service">
          <SelectTrigger className={`contact-input !h-12 ${errors.service ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-white'}`}>
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
        <Textarea
          name="message"
          rows={6}
          className={`h-32 contact-input resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-white'}`}
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`w-full py-4 px-8 font-semibold transition-colors duration-300 rounded-sm ${isSubmitted
          ? "bg-green-600 text-white cursor-not-allowed"
          : isSubmitting
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-white text-black hover:bg-gray-200 cursor-pointer"
          }`}
      >
        {isSubmitted
          ? "Message Sent ✓"
          : isSubmitting
            ? "Sending..."
            : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
