"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Recruitment & Staffing",
  "Contract Workforce",
  "Payroll Management",
  "HR Outsourcing",
  "Facility Management",
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Twitter", href: "#", icon: FaTwitter },
  { label: "Instagram", href: "#", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="flex min-h-[680px] flex-col justify-between bg-black px-[9vw] py-24 text-white">
      {/* Top */}
      <div className="grid gap-20 lg:grid-cols-[1fr_1.45fr] lg:gap-28">
        {/* Left Heading */}
        <div>
          <h2 className="max-w-[520px] text-[44px] font-light leading-[1.05] tracking-[-0.06em] text-white/90 md:text-[56px]">
            Trusted Manpower
            <br />
            Facility Management
          </h2>

          <p className="mt-8 max-w-[500px] text-[17px] leading-8 text-white/55">
            Delivering trusted manpower and facility management solutions across
            industries with a focus on quality, compliance, reliability, and
            long-term workforce partnerships.
          </p>

          <div className="mt-10 flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-white/25 text-white/70 transition hover:border-[#d6eaff] hover:text-[#d6eaff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6eaff]"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Links */}
        <div className="grid gap-14 md:grid-cols-3">
          {/* Quick Links */}
          <div className="grid content-start gap-6">
            <h4 className="mb-2 text-lg font-semibold text-white/45">
              Quick Links
            </h4>

            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-semibold text-white transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6eaff]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="grid content-start gap-6">
            <h4 className="mb-2 text-lg font-semibold text-white/45">
              Services
            </h4>

            {services.map((item) => (
              <p key={item} className="text-lg font-semibold text-white">
                {item}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div className="grid content-start gap-6">
            <h4 className="mb-2 text-lg font-semibold text-white/45">
              Contact
            </h4>

            <a
              href="tel:+919876543210"
              className="text-lg font-semibold text-white transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6eaff]"
            >
              +91 98765 43210
            </a>

            <a
              href="mailto:info@platinummanpower.com"
              className="text-lg font-semibold text-white transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6eaff]"
            >
              info@platinummanpower.com
            </a>

            <p className="text-lg font-semibold leading-7 text-white">
              Mumbai, Maharashtra
              <br />
              India
            </p>

            <div className="mt-2 h-[3px] w-16 bg-[#d6eaff]" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid items-end gap-12 text-white/60 lg:grid-cols-[1fr_1.45fr] lg:gap-28">
        <Link href="/" aria-label="Platinum Manpower home">
          <Image
            src="/logo.png"
            alt="Platinum Manpower"
            width={320}
            height={90}
            priority
            className="h-auto w-auto max-w-[280px]"
          />
        </Link>

        <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Platinum Manpower. All Rights Reserved.
          </p>

          <p>Manpower • Staffing • Recruitment • Facility Management</p>
        </div>
      </div>
    </footer>
  );
}