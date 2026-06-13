"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BRAND_BLUE = "#104B9C";

const assets = {
  heroBanner: "/images/hero-banner.png",
  heroTeam: "/images/platinum-hero-team.png",
  staffGroup: "/images/platinum-staff-group.png",
  hospital: "/images/hospital-staff.png",
  hotel: "/images/hotel-staff.png",
  mall: "/images/mall-staff.png",
  airport: "/images/airport-staff.png",
  workforce: "/images/workforce-team.png",
  contact: "/images/contact-team.png",
};

const aboutSlides = [
  {
    image: assets.staffGroup,
    title: "Verified Workforce",
    text: "Reliable manpower selected for workplace discipline and responsibility.",
  },
  {
    image: assets.hospital,
    title: "Healthcare Support",
    text: "Nurses, ward boys, housekeeping, and patient care support staff.",
  },
  {
    image: assets.hotel,
    title: "Hospitality Staff",
    text: "Trained staff for hotels, restaurants, rooms, and service operations.",
  },
  {
    image: assets.airport,
    title: "Facility Support",
    text: "Disciplined manpower for high-standard commercial environments.",
  },
];

const services = [
  {
    title: "Skilled Manpower Supply",
    text: "Trained manpower for specialized business operations, ensuring quality support and dependable performance.",
  },
  {
    title: "Unskilled Manpower Supply",
    text: "Reliable workforce support for day-to-day operational needs, housekeeping, maintenance, and support activities.",
  },
  {
    title: "Nurses & Healthcare Staff",
    text: "Professional healthcare manpower for hospitals, clinics, and medical facilities, selected with care and responsibility.",
  },
  {
    title: "Hotel & Hospitality Staff",
    text: "Staffing support for hotels, restaurants, banquets, and hospitality operations, focused on service and guest experience.",
  },
  {
    title: "Housekeeping Staff",
    text: "Well-managed housekeeping manpower for hospitals, hotels, shopping malls, airports, offices, and commercial spaces.",
  },
];

const whyChoose = [
  {
    title: "Trained Workers",
    text: "Our manpower is guided to understand workplace discipline, hygiene, grooming, and service expectations.",
  },
  {
    title: "Quick Replacement Support",
    text: "We understand that operations cannot stop. Replacement support is provided whenever required.",
  },
  {
    title: "Verified Manpower",
    text: "We follow a basic screening and verification process before staff deployment.",
  },
  {
    title: "Professional Management",
    text: "From selection to deployment and coordination, we maintain a structured and responsible approach.",
  },
  {
    title: "24/7 Support",
    text: "Our team remains available to assist clients with staffing requirements, coordination, and urgent support.",
  },
  {
    title: "Affordable Staffing Solutions",
    text: "We offer practical manpower solutions designed to suit your business needs and budget.",
  },
];

const approach = [
  {
    step: "01",
    title: "Understand Your Requirement",
    text: "We discuss your staffing needs, work timing, location, role expectations, and manpower quantity.",
  },
  {
    step: "02",
    title: "Screen & Shortlist Staff",
    text: "Suitable manpower is shortlisted based on the role, availability, basic experience, and service expectations.",
  },
  {
    step: "03",
    title: "Staff Deployment",
    text: "Selected staff is deployed at your site with proper coordination and basic role understanding.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    text: "We support clients with attendance coordination, replacements, supervision, and issue resolution.",
  },
];

const industries = [
  {
    title: "Hospitals",
    image: assets.hospital,
    text: "We provide dependable manpower support for hospitals and healthcare facilities where discipline, hygiene, and responsibility matter the most.",
    points: [
      "Nurses",
      "Ward boys",
      "Patient care support staff",
      "Housekeeping staff",
      "Support manpower",
    ],
  },
  {
    title: "Hotels",
    image: assets.hotel,
    text: "We help hotels maintain smooth daily operations with trained and reliable staff for service, cleaning, and guest support functions.",
    points: [
      "Housekeeping staff",
      "Room attendants",
      "Kitchen helpers",
      "Service staff",
      "Support manpower",
    ],
  },
  {
    title: "Shopping Malls",
    image: assets.mall,
    text: "We provide reliable manpower support for shopping malls to help maintain cleanliness, customer assistance, and smooth facility operations.",
    points: [
      "Housekeeping staff",
      "Customer assistance staff",
      "Facility support staff",
      "Maintenance helpers",
      "Support manpower",
    ],
  },
  {
    title: "Airports",
    image: assets.airport,
    text: "We support airport-related service operations with disciplined, trained, and professionally managed manpower for high-standard facility environments.",
    points: [
      "Housekeeping staff",
      "Customer assistance staff",
      "Facility support manpower",
      "Operational helpers",
      "Support staff",
    ],
  },
];

const companyTeam = [
  {
    name: "Shalu Sansare",
    role: "Proprietor",
    phone: "93251 58710",
    email: "contact@platinummanpowerservices.com",
    initials: "SS",
  },
  {
    name: "Sonali Pagare",
    role: "HR Manager",
    phone: "91463 81803 | 93251 58710",
    email: "platinummanpower.sonali@gmail.com",
    initials: "SP",
  },
];

function Button({
  children,
  href = "#contact",
  dark = false,
}: {
  children: ReactNode;
  href?: string;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      className={`mt-7 inline-flex items-stretch font-semibold outline-none transition ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#d6eaff] text-black">
        ↳
      </span>

      <span
        className={`ml-1 flex h-12 items-center justify-center rounded-[4px] border px-5 transition ${
          dark
            ? "border-white/35 hover:border-white/70"
            : "border-black/25 hover:border-black/60"
        }`}
      >
        {children}
      </span>
    </a>
  );
}

function SectionHeading({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-[42px] font-light leading-[0.98] tracking-[-0.065em] md:text-[56px] xl:text-[74px] ${
        light ? "text-white" : "text-black"
      }`}
    >
      {children}
    </h2>
  );
}

function AboutCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % aboutSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[420px] overflow-hidden rounded-[6px] bg-[#104B9C] shadow-[0_30px_80px_rgba(16,75,156,0.20)] lg:h-[460px]">
      {aboutSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            activeIndex === index
              ? "scale-100 opacity-100"
              : "scale-105 opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#104B9C]/95 via-[#104B9C]/35 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Platinum Manpower
            </p>

            <h3 className="text-[34px] font-light leading-none tracking-[-0.05em]">
              {slide.title}
            </h3>

            <p className="mt-4 max-w-[460px] text-[17px] leading-[1.35] text-white/75">
              {slide.text}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute right-6 top-6 z-20 flex gap-2">
        {aboutSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show ${slide.title}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#104B9C] font-sans text-[#524f4b]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#104B9C]">
        <img
          src={assets.heroBanner}
          alt="Platinum Manpower banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#104B9C]/70 via-[#104B9C]/10 to-transparent" />

        <div className="absolute bottom-[7vw] left-[9vw] z-10 max-w-[560px]">
          <p className="text-[22px] leading-[1.2] text-white drop-shadow-md md:text-[26px]">
            Skilled, verified, and professionally managed manpower for hospitals,
            hotels, shopping malls, airports, offices, and commercial spaces.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-[4px] bg-[#d6eaff] px-7 py-3.5 text-[15px] font-semibold text-black transition hover:bg-white"
          >
            Request Workforce
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white px-[9vw] py-28 text-black">
        <p className="max-w-[280px] font-semibold text-[#104B9C]">
          About Platinum
        </p>

        <div className="mt-16 grid items-start gap-20 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading>
              We help businesses grow stronger with the right people behind
              their operations.
            </SectionHeading>

            <Button href="/contact">Contact Our Team</Button>
          </div>

          <div className="grid gap-8">
            <AboutCarousel />

            <p className="max-w-[620px] text-[24px] leading-[1.22] text-[#4d4d4d]">
              At{" "}
              <strong>
                PLATINUM MANPOWER AND FACILITY MANAGEMENT SERVICES
              </strong>
              , we provide skilled and unskilled manpower solutions for
              hospitals, hotels, shopping malls, and airports with a focus on
              reliability, professionalism, and long-term support.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[6px] bg-[#104B9C] p-9 text-white shadow-[0_30px_80px_rgba(16,75,156,0.18)]">
            <h3 className="mb-4 text-[34px] font-medium tracking-[-0.04em]">
              Our Promise
            </h3>

            <p className="text-[22px] leading-[1.25] text-white/80">
              Reliable staff. Smooth operations. People-first service.
            </p>
          </div>

          <div className="rounded-[6px] border border-[#104B9C]/15 bg-[#f7fbff] p-9">
            <p className="text-[20px] leading-[1.35] text-[#4f4f4f]">
              Our team works closely with clients to understand staffing needs
              and provide verified manpower that fits their operational
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#104B9C] px-[9vw] py-28 text-white">
        <div className="grid gap-20 lg:grid-cols-[1fr_0.78fr] lg:gap-28">
          <SectionHeading light>Our Services</SectionHeading>

          <div>
            <p className="max-w-[520px] text-[20px] leading-[1.24] text-white/75">
              We provide dependable manpower and facility support services for
              daily operations, specialized staffing, housekeeping, and
              long-term workforce management.
            </p>

            <Button href="/services" dark>
              Explore Services
            </Button>
          </div>
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex min-h-[330px] flex-col justify-between rounded-[6px] border border-white/15 bg-white p-7 text-black shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2"
            >
              <div>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#104B9C] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-[24px] font-semibold leading-[1.1] tracking-[-0.04em]">
                  {service.title}
                </h3>
              </div>

              <p className="mt-8 text-[16px] leading-[1.35] text-[#4f4f4f]">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Staffing Approach */}
      <section className="bg-white px-[9vw] py-28 text-[#104B9C]">
        <div className="grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
          <p className="font-semibold">
            Our Staffing Approach
            <br />
            Structured. Simple. Reliable.
          </p>

          <SectionHeading>
            From requirement understanding to ongoing support, our process is
            built for smooth manpower deployment.
          </SectionHeading>
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {approach.map((item) => (
            <article
              key={item.step}
              className="rounded-[6px] border border-[#104B9C]/15 bg-[#f7fbff] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(16,75,156,0.16)]"
            >
              <span className="mb-14 flex h-14 w-14 items-center justify-center rounded-full bg-[#104B9C] text-sm font-bold text-white">
                {item.step}
              </span>

              <h3 className="text-[28px] font-semibold leading-[1.08] tracking-[-0.05em] text-black">
                {item.title}
              </h3>

              <p className="mt-8 text-[17px] leading-[1.35] text-[#4f4f4f]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#104B9C] px-[9vw] py-28 text-white">
        <div className="mb-20 grid gap-20 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="font-semibold">
            Why Choose Platinum?
            <br />
            Skilled. Verified. Managed.
          </p>

          <SectionHeading light>
            We support businesses with trained manpower, quick replacement,
            verified staff, and professional coordination.
          </SectionHeading>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map((item, index) => (
            <article
              key={item.title}
              className="flex min-h-[280px] flex-col justify-between rounded-[6px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:text-black"
            >
              <div>
                <p className="mb-12 flex items-center gap-3 text-lg">
                  <span className="h-3 w-3 rounded-full bg-[#d6eaff]" />
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-[30px] font-light leading-[1.08] tracking-[-0.05em]">
                  {item.title}
                </h3>
              </div>

              <p className="mt-10 text-[18px] leading-[1.32] opacity-75">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-white px-[9vw] py-28 text-black">
        <div className="grid gap-20 lg:grid-cols-[1fr_0.78fr] lg:gap-28">
          <SectionHeading>Industries We Serve</SectionHeading>

          <p className="max-w-[520px] text-[20px] leading-[1.24] text-[#4f4f4f]">
            We provide reliable manpower support for industries where
            cleanliness, discipline, responsibility, and operational continuity
            matter every day.
          </p>
        </div>

        <div className="mt-24 grid gap-5 lg:grid-cols-2">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="grid overflow-hidden rounded-[6px] border border-[#104B9C]/10 bg-[#f7fbff] shadow-[0_24px_70px_rgba(16,75,156,0.10)] lg:grid-cols-[0.92fr_1.08fr]"
            >
              <img
                src={industry.image}
                alt={`${industry.title} manpower support`}
                className="h-full min-h-[360px] w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-[42px] font-light leading-[1] tracking-[-0.06em] text-black">
                  {industry.title}
                </h3>

                <div className="my-6 h-[3px] w-16 bg-[#104B9C]" />

                <p className="text-[18px] font-medium leading-[1.34] text-[#1f2937]">
                  {industry.text}
                </p>

                <ul className="mt-8 grid gap-3 text-[17px] text-[#4f4f4f]">
                  {industry.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#104B9C]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Workforce Support */}
      <section className="bg-[#104B9C] px-[9vw] py-28 text-white">
        <div className="grid items-center gap-20 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <SectionHeading light>
              Manpower support designed for daily business operations.
            </SectionHeading>

            <p className="mt-12 max-w-[520px] text-[20px] leading-[1.28] text-white/75">
              Whether you need healthcare support staff, housekeeping manpower,
              hospitality staff, operational helpers, or facility support teams,
              Platinum helps you manage workforce requirements with better
              coordination and dependable service.
            </p>

            <Button href="/contact" dark>
              Request Workforce
            </Button>
          </div>

          <img
            src={assets.workforce}
            alt="Verified workforce team"
            className="h-[640px] w-full rounded-[6px] object-cover shadow-[0_35px_90px_rgba(0,0,0,0.24)]"
          />
        </div>
      </section>

      {/* Company Team */}
      <section id="team" className="bg-white px-[9vw] py-28 text-black">
        <div className="grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
          <p className="font-semibold text-[#104B9C]">
            Our Team
            <br />
            People Behind Platinum
          </p>

          <SectionHeading>
            A dedicated team managing client coordination, staffing
            requirements, and reliable manpower deployment.
          </SectionHeading>
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-2">
          {companyTeam.map((member) => (
            <article
              key={member.name}
              className="rounded-[6px] border border-[#104B9C]/15 bg-[#f7fbff] p-10 transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(16,75,156,0.16)]"
            >
              <div className="mb-14 flex h-20 w-20 items-center justify-center rounded-full bg-[#104B9C] text-[24px] font-semibold text-white">
                {member.initials}
              </div>

              <h3 className="text-[42px] font-light uppercase leading-[1] tracking-[-0.06em] text-black">
                {member.name}
              </h3>

              <p className="mt-3 text-[22px] font-medium text-[#104B9C]">
                {member.role}
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href={`tel:+91${member.phone.replaceAll(" ", "").split("|")[0]}`}
                  className="block text-[24px] font-semibold text-black transition hover:text-[#104B9C]"
                >
                  {member.phone}
                </a>

                <a
                  href={`mailto:${member.email}`}
                  className="block break-words text-[20px] font-medium text-[#4f4f4f] transition hover:text-[#104B9C]"
                >
                  {member.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#104B9C] px-[9vw] py-28 text-white">
        <div className="grid items-start gap-20 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="mb-10 font-semibold text-[#d6eaff]">
              Contact Platinum
            </p>

            <h2 className="max-w-[520px] text-[44px] font-light leading-[1.08] tracking-[-0.06em] md:text-[56px]">
              Need reliable manpower for your workplace?
            </h2>

            <p className="mt-8 max-w-[440px] text-[20px] leading-[1.35] text-white/70">
              Share your staffing requirement with us. Our team will guide you
              with the right manpower solution for your business operations.
            </p>

            <Button href="tel:+919325158710" dark>
              Call Now
            </Button>
          </div>

          <div className="grid gap-5">
            <article className="rounded-[6px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                Contact Details
              </h3>

              <div className="mt-8 space-y-5">
                <a
                  href="tel:+919325158710"
                  className="block text-[24px] font-semibold text-white transition hover:opacity-70"
                >
                  93251 58710
                </a>

                <a
                  href="mailto:contact@platinummanpowerservices.com"
                  className="block break-words text-[20px] font-medium text-white/75 transition hover:text-white"
                >
                  contact@platinummanpowerservices.com
                </a>
              </div>
            </article>

            <article className="rounded-[6px] border border-white/15 bg-white p-8 text-black">
              <h3 className="text-[24px] font-semibold">Office Address</h3>

              <p className="mt-5 max-w-[640px] text-[20px] leading-[1.35] text-[#4f4f4f]">
                Row House no 2, Jai Maa Ashapura Society, Sinnar Phata, Nashik,
                422101
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}