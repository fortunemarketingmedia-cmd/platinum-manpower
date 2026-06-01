"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-[1600px] mx-auto h-24 px-10 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Platinum Manpower"
            width={220}
            height={60}
            priority
            className="h-auto w-auto max-h-[60px]"
          />
        </Link>

        {/* Phone */}
        <div className="hidden xl:flex items-center">
          <div className="h-10 w-px bg-neutral-300 mr-10" />

          <p className="text-sm tracking-[0.2em] uppercase text-neutral-600">
            Call Us:
            <span className="font-semibold text-black ml-2">
              +91 98765 43210
            </span>
          </p>

          <div className="h-10 w-px bg-neutral-300 ml-10" />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">

          <Link
            href="/"
            className="text-sm font-medium text-neutral-700 hover:text-[#0D5EA8] transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-neutral-700 hover:text-[#0D5EA8] transition-colors duration-300"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-neutral-700 hover:text-[#0D5EA8] transition-colors duration-300"
          >
            Services
          </Link>

          <Link
            href="/industries"
            className="text-sm font-medium text-neutral-700 hover:text-[#0D5EA8] transition-colors duration-300"
          >
            Industries
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-neutral-700 hover:text-[#0D5EA8] transition-colors duration-300"
          >
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
}