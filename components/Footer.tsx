import React from "react";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import Link from "next/link";
import { HyperText } from "./ui/hyper-text";

const Footer = () =>
{
  const services = [
    "Website Development",
    "Brand Identity",
    "Content Creation",
    "Custom Solutions",
    "Digital Marketing",
    "SEO Optimization"
  ];

  const company = [
    "About Us",
    "Our Process",
    "Portfolio",
    "Careers",
    "Blog",
    "Contact"
  ];

  const legal = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR Compliance"
  ];

  return (
    <footer className="bg-black text-white before:bg-black before:block before:h-16 before:sticky before:top-0 before:w-full before:z-9">
      <div className="flex flex-col gap-12 items-center justify-center md:pt-18 pb-24 lg:pb-48">
        <Link href="/" className="flex flex-col items-center gap-8">
          <Image src="/cube.png" width={35} height={35} alt="Cube logo" />
          <span className="text-2xl leading-none md:text-[46px] md:leading-none font-semibold tracking-[-0.04em]">
            Restylex
          </span>
        </Link>
        <div className="flex flex-col items-center justify-center gap-2 md:gap-8 uppercase tracking-normal font-mono text-sm md:text-base">
          <div className="flex items-center justify-center max-md:flex-col md:gap-8">
            <HyperText
              className="cursor-pointer"
              text="Pricing"
              duration={400}
              conteinerId="pricing"
            />
            <HyperText
              className="cursor-pointer"
              text="Contact"
              duration={400}
              conteinerId="contact"
            />
            <HyperText
              className="cursor-pointer"
              text="Privacy Policy"
              duration={400}
              conteinerId="blog"
            />
            <HyperText
              className="cursor-pointer"
              text="Terms of Use"
              duration={400}
              conteinerId="blog"
            />
            <HyperText
              className="cursor-pointer"
              text="Blog"
              duration={400}
              conteinerId="blog"
            />
          </div>
          <div className="flex items-center gap-5 text-center">
            <p >© 2025 Restylex. <br className="md:hidden"/> All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;