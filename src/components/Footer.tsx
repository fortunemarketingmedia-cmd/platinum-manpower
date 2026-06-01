"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f7f8fa] border-t border-neutral-200">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-14 py-28">

        {/* Top */}
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16">

          {/* Brand */}
          <div>
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Platinum Manpower"
                width={320}
                height={90}
                priority
                className="h-auto w-auto"
              />
            </div>

            <p className="text-neutral-600 leading-8 max-w-[500px]">
              Delivering trusted manpower and facility management solutions
              across industries with a focus on quality, compliance,
              reliability, and long-term workforce partnerships.
            </p>

            <div className="flex items-center gap-5 mt-10">

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center border border-neutral-300 hover:border-[#0D5EA8] hover:text-[#0D5EA8] transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center border border-neutral-300 hover:border-[#0D5EA8] hover:text-[#0D5EA8] transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center border border-neutral-300 hover:border-[#0D5EA8] hover:text-[#0D5EA8] transition-all duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center border border-neutral-300 hover:border-[#0D5EA8] hover:text-[#0D5EA8] transition-all duration-300"
              >
                <FaInstagram />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-black">
              Quick Links
            </h4>

            <div className="flex flex-col gap-4 text-neutral-600">
              <Link href="/" className="hover:text-[#0D5EA8] transition">
                Home
              </Link>

              <Link href="/about" className="hover:text-[#0D5EA8] transition">
                About Us
              </Link>

              <Link href="/services" className="hover:text-[#0D5EA8] transition">
                Services
              </Link>

              <Link href="/industries" className="hover:text-[#0D5EA8] transition">
                Industries
              </Link>

              <Link href="/contact" className="hover:text-[#0D5EA8] transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-black">
              Services
            </h4>

            <div className="flex flex-col gap-4 text-neutral-600">
              <p>Recruitment & Staffing</p>
              <p>Contract Workforce</p>
              <p>Payroll Management</p>
              <p>HR Outsourcing</p>
              <p>Facility Management</p>
              <p>Executive Search</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-black">
              Contact
            </h4>

            <div className="space-y-5 text-neutral-600 leading-7">
              <p>
                +91 98765 43210
              </p>

              <p>
                info@platinummanpower.com
              </p>

              <p>
                Mumbai, Maharashtra
                <br />
                India
              </p>
            </div>

            <div className="mt-10">
              <div className="w-16 h-[3px] bg-[#0D5EA8]" />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 mt-20 pt-8">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-neutral-500">

            <p>
              © {new Date().getFullYear()} Platinum Manpower. All Rights Reserved.
            </p>

            <p>
              Manpower • Staffing • Recruitment • Facility Management
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}