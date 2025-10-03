import React from "react";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <section className="md:py-14 py-8 bg-black before:bg-black before:block before:h-16 before:sticky before:top-0 before:w-full before:z-9" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s Start Your Project
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Fill out the form below with your project details or let us know that you want to book a consulting call and we&apos;ll get back to you in 24 hours.
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
