
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerActive = scrolled || mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          headerActive
            ? "border-b border-black/[0.06] bg-white/95 shadow-[0_8px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "bg-white/10 backdrop-blur-[2px]"
        }`}
      >
        <div
          className={`mx-auto grid max-w-[1600px] grid-cols-[1fr_auto] items-center gap-8 px-5 transition-all duration-500 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-[5vw] xl:px-[7vw] 2xl:px-[9vw] ${
            headerActive ? "h-[76px] lg:h-[80px]" : "h-[84px] lg:h-[96px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Platinum Manpower home"
            className="relative z-20 flex w-fit items-center"
          >
            <Image
              src="/logo.png"
              alt="Platinum Manpower and Facility Management Services"
              width={220}
              height={60}
              priority
              className={`h-auto w-auto object-contain transition-all duration-500 ${
                headerActive
                  ? "max-h-[46px] max-w-[175px] sm:max-w-[205px]"
                  : "max-h-[54px] max-w-[185px] sm:max-w-[220px]"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex xl:gap-9"
          >
            {navigation.map((item) => {
              const active = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-3 text-[15px] font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#104B9C] ${
                    active
                      ? "text-[#104B9C]"
                      : "text-[#111827] hover:text-[#104B9C]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-1 left-0 h-[2px] bg-[#104B9C] transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center justify-self-end gap-3 lg:flex">
            <a
              href="tel:+919325158710"
              aria-label="Call Platinum Manpower"
              className="inline-flex h-12 items-center justify-center rounded-[4px] border border-[#104B9C]/30 px-5 text-[15px] font-semibold text-[#104B9C] transition-all duration-300 hover:border-[#104B9C] hover:bg-[#104B9C]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#104B9C]"
            >
              Call Now
            </a>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#104B9C] px-6 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A3F82] hover:shadow-[0_14px_32px_rgba(16,75,156,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#104B9C]"
            >
              Request Workforce
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="relative z-20 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-[#104B9C]/15 bg-white text-black shadow-sm transition-all duration-300 hover:border-[#104B9C]/40 hover:bg-[#f5f9ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#104B9C] lg:hidden"
          >
            <span className="relative block h-[18px] w-[22px]">
              <span
                className={`absolute left-0 top-0 h-[2px] w-[22px] rounded-full bg-[#111827] transition-all duration-300 ${
                  mobileMenuOpen
                    ? "translate-y-[8px] rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />

              <span
                className={`absolute left-0 top-[8px] h-[2px] rounded-full bg-[#111827] transition-all duration-300 ${
                  mobileMenuOpen
                    ? "w-0 opacity-0"
                    : "w-[22px] opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-[16px] h-[2px] w-[22px] rounded-full bg-[#111827] transition-all duration-300 ${
                  mobileMenuOpen
                    ? "-translate-y-[8px] -rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-full overflow-hidden border-t border-black/[0.06] bg-white shadow-[0_30px_70px_rgba(15,23,42,0.16)] transition-all duration-500 ease-out lg:hidden ${
            mobileMenuOpen
              ? "visible max-h-[720px] translate-y-0 opacity-100"
              : "invisible max-h-0 -translate-y-3 opacity-0"
          }`}
        >
          <div className="px-5 pb-8 pt-4 sm:px-8">
            <nav
              aria-label="Mobile navigation"
              className="border-t border-black/[0.06]"
            >
              {navigation.map((item, index) => {
                const active = isActiveRoute(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group flex items-center justify-between border-b border-black/[0.08] py-5 transition-colors duration-300 ${
                      active
                        ? "text-[#104B9C]"
                        : "text-[#111827] hover:text-[#104B9C]"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`text-[12px] font-semibold ${
                          active
                            ? "text-[#104B9C]"
                            : "text-black/35"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[24px] font-medium tracking-[-0.04em]">
                        {item.label}
                      </span>
                    </span>

                    <span
                      className={`text-[23px] transition-transform duration-300 ${
                        active
                          ? "translate-x-0"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+919325158710"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-13 items-center justify-center rounded-[4px] border border-[#104B9C]/30 px-5 py-3.5 text-[15px] font-semibold text-[#104B9C] transition-all duration-300 hover:border-[#104B9C] hover:bg-[#104B9C]/5"
              >
                Call 93251 58710
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-13 items-center justify-center rounded-[4px] bg-[#104B9C] px-5 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#0A3F82]"
              >
                Request Workforce
              </Link>
            </div>

            <div className="mt-7 rounded-[6px] bg-[#f1f7ff] p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                Platinum Manpower
              </p>

              <p className="mt-2 text-[15px] leading-[1.45] text-[#4f4f4f]">
                Skilled, verified, and professionally managed manpower for
                hospitals, hotels, malls, airports, offices, and commercial
                spaces.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-[#06152b]/45 backdrop-blur-[2px] transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />
    </>
  );
}
