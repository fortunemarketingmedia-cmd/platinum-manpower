"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const assets = {
  hero: "/images/hero-banner.png",
  staffGroup: "/images/platinum-staff-group.png",
  workforce: "/images/workforce-team.png",
  hospital: "/images/hospital-staff.png",
  hotel: "/images/hotel-staff.png",
  mall: "/images/mall-staff.png",
  airport: "/images/airport-staff.png",
  contactTeam: "/images/contact-team.png",
};

const keyStats = [
  {
    label: "Service Focus",
    value: "Manpower & Facility",
  },
  {
    label: "Core Support",
    value: "Skilled + Unskilled Staff",
  },
  {
    label: "Main Industries",
    value: "Hospitals, Hotels, Malls, Airports",
  },
  {
    label: "Replacement Support",
    value: "Available When Required",
  },
  {
    label: "Coordination",
    value: "Client-Focused Management",
  },
  {
    label: "Support Model",
    value: "Ongoing Operational Support",
  },
];

const standards = [
  {
    title: "Trained Workers",
    text: "Our manpower is guided to understand workplace discipline, hygiene, grooming, and basic service expectations.",
  },
  {
    title: "Verified Manpower",
    text: "We follow a basic screening and verification process before deploying staff at client sites.",
  },
  {
    title: "Professional Management",
    text: "From selection to deployment and coordination, we maintain a structured and responsible approach.",
  },
  {
    title: "Quick Replacement Support",
    text: "We understand that operations cannot stop, so replacement support is provided whenever required.",
  },
];

const serviceCards = [
  {
    title: "Skilled Manpower Supply",
    image: assets.workforce,
    text: "Trained manpower for specialized business operations, ensuring dependable support and quality performance.",
  },
  {
    title: "Healthcare & Support Staff",
    image: assets.hospital,
    text: "Professional manpower for hospitals, clinics, patient support, housekeeping, and healthcare operations.",
  },
  {
    title: "Facility & Housekeeping Staff",
    image: assets.mall,
    text: "Reliable staff for housekeeping, cleanliness, maintenance support, and facility operations.",
  },
];

const process = [
  {
    year: "01",
    title: "Understand Requirement",
    text: "We discuss staffing needs, work timing, location, role expectations, and manpower quantity.",
  },
  {
    year: "02",
    title: "Screen & Shortlist",
    text: "Suitable manpower is shortlisted based on role, availability, basic experience, and service expectations.",
  },
  {
    year: "03",
    title: "Staff Deployment",
    text: "Selected staff is deployed at the client site with proper coordination and role understanding.",
  },
  {
    year: "04",
    title: "Ongoing Support",
    text: "We support clients with attendance coordination, replacements, supervision, and issue resolution.",
  },
];

const industries = [
  {
    title: "Hospitals",
    image: assets.hospital,
    text: "Reliable manpower support for hospitals and healthcare facilities where hygiene, discipline, and responsibility are critical.",
    points: ["Nurses", "Ward boys", "Patient care staff", "Housekeeping staff"],
  },
  {
    title: "Hotels",
    image: assets.hotel,
    text: "Trained manpower for hotels, restaurants, rooms, service areas, and guest-facing hospitality operations.",
    points: ["Room attendants", "Service staff", "Kitchen helpers", "Housekeeping"],
  },
  {
    title: "Shopping Malls",
    image: assets.mall,
    text: "Facility support staff for malls to maintain cleanliness, customer support, and smooth daily operations.",
    points: ["Housekeeping", "Customer assistance", "Maintenance helpers", "Support staff"],
  },
  {
    title: "Airports",
    image: assets.airport,
    text: "Disciplined manpower for airport environments where service quality, grooming, and punctuality matter.",
    points: ["Facility staff", "Customer support", "Operational helpers", "Housekeeping"],
  },
  {
    title: "Offices",
    image: assets.staffGroup,
    text: "Professional support staff for offices and corporate spaces to maintain cleanliness and smooth workplace operations.",
    points: ["Office support", "Pantry staff", "Housekeeping", "Helpers"],
  },
  {
    title: "Commercial Spaces",
    image: assets.workforce,
    text: "Flexible manpower support for commercial properties, business spaces, and facility operations.",
    points: ["Facility support", "Cleaning staff", "Helpers", "Operational staff"],
  },
];

const team = [
  {
    name: "Shalu Sansare",
    role: "Proprietor",
    phone: "93251 58710",
    email: "contact@platinummanpowerservices.com",
    initials: "SS",
    call: "9325158710",
  },
  {
    name: "Sonali Pagare",
    role: "HR Manager",
    phone: "91463 81803 | 93251 58710",
    email: "platinummanpower.sonali@gmail.com",
    initials: "SP",
    call: "9146381803",
  },
];

const faqs = [
  {
    question: "What kind of manpower does Platinum provide?",
    answer:
      "We provide skilled and unskilled manpower, healthcare support staff, housekeeping staff, hospitality staff, facility support manpower, and operational helpers.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We mainly support hospitals, hotels, shopping malls, airports, offices, and commercial spaces.",
  },
  {
    question: "Do you provide replacement support?",
    answer:
      "Yes. Replacement support is provided whenever required, depending on the client requirement and operational situation.",
  },
  {
    question: "How does your staffing process work?",
    answer:
      "We understand the requirement, screen suitable staff, deploy selected manpower, and provide ongoing coordination and support.",
  },
];

function SectionHeading({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-[42px] font-light leading-[0.98] tracking-[-0.065em] md:text-[58px] xl:text-[78px] ${
        light ? "text-white" : "text-black"
      }`}
    >
      {children}
    </h2>
  );
}

function Button({
  children,
  href = "/contact",
  dark = false,
}: {
  children: ReactNode;
  href?: string;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      className={`mt-8 inline-flex items-stretch font-semibold outline-none transition-all duration-300 ease-out ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#d6eaff] text-black transition-all duration-300 ease-out">
        ↳
      </span>

      <span
        className={`ml-1 flex h-12 items-center justify-center rounded-[4px] border px-5 transition-all duration-300 ease-out ${
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

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-black/10">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-6 py-7 text-left text-[19px] font-medium text-black transition-all duration-300 ease-out hover:text-[#104B9C]"
      >
        <span>{question}</span>

        <span
          className={`text-[28px] font-light transition-transform duration-300 ease-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[760px] pb-8 text-[18px] leading-[1.45] text-[#4f4f4f]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const selectedIndustry = industries[activeIndustry];

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-[#524f4b]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#D9EAFD] px-[9vw] pb-20 pt-[132px] text-white">
        <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <div>
            <p className="mb-7 text-[15px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
              About Platinum Manpower
            </p>

            <h1 className="max-w-[720px] text-[48px] text-[#000000] font-light leading-[0.98] tracking-[-0.065em] md:text-[68px] lg:text-[82px] xl:text-[92px]">
              Reliable workforce support.
            </h1>
          </div>

          {/* Right Content */}
          <div className="grid gap-6 md:grid-cols-2 lg:pb-3">
            <p className="max-w-[360px] text-[18px] leading-[1.42] text-black/78">
              We provide skilled and unskilled manpower solutions for hospitals,
              hotels, shopping malls, airports, offices, and commercial spaces.
            </p>

            <p className="max-w-[360px] text-[18px] leading-[1.42] text-black/78">
              Our focus is simple: reliable staff, smooth operations, professional
              coordination, and long-term client support.
            </p>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[10px] border border-white/15 bg-white/10 shadow-[0_35px_100px_rgba(0,0,0,0.18)]">
          <img
            src={assets.hero}
            alt="Platinum manpower banner"
            className="h-[300px] w-full object-cover md:h-[360px] xl:h-[420px]"
          />
        </div>
      </section>

      {/* Intro Visual */}
      <section className="relative bg-[#f1f5f8] px-[9vw] py-28 text-black">
        <div className="grid items-center gap-20 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="mb-8 font-semibold text-[#104B9C]">
              The Platinum Approach
            </p>

            <h2 className="max-w-[560px] text-[42px] font-light leading-[1.04] tracking-[-0.06em] md:text-[58px]">
              The right people behind your operations.
            </h2>

            <p className="mt-10 max-w-[520px] text-[20px] leading-[1.38] text-[#4f4f4f]">
              At{" "}
              <strong className="text-black">
                PLATINUM MANPOWER AND FACILITY MANAGEMENT SERVICES
              </strong>
              , we believe every business grows stronger with reliable manpower.
              We work closely with clients to understand their staffing needs
              and provide verified manpower that fits their operational
              requirements.
            </p>

            <Button href="/contact">Contact Our Team</Button>
          </div>

          <div className="relative">
            <div className="absolute -bottom-8 -left-8 h-52 w-52 rounded-full bg-[#104B9C]/10" />

            <img
              src={assets.staffGroup}
              alt="Platinum manpower team"
              className="relative h-[620px] w-full rounded-[8px] object-cover shadow-[0_35px_100px_rgba(16,75,156,0.18)]"
            />
          </div>
        </div>
      </section>

      {/* Performance Standards */}
      <section className="bg-[#104B9C] px-[9vw] py-28 text-white">
        <SectionHeading light>
          Built for reliable staffing and managed workplace support.
        </SectionHeading>

        <div className="mt-24 grid items-start gap-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[640px] overflow-hidden rounded-[8px] border border-white/15 bg-white/10 p-10">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[length:28px_28px] opacity-30" />

            <img
              src={assets.workforce}
              alt="Platinum workforce"
              className="relative mx-auto h-[560px] w-full rounded-[6px] object-cover"
            />
          </div>

          <div>
            <h3 className="mb-8 text-[38px] font-light tracking-[-0.055em]">
              Key Standards
            </h3>

            <div className="border-t border-white/25">
              {keyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="grid grid-cols-[0.9fr_1.1fr] gap-8 border-b border-white/25 py-6"
                >
                  <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/55">
                    {stat.label}
                  </p>

                  <p className="text-right text-[24px] font-light leading-[1.1] tracking-[-0.04em] text-white md:text-[30px]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strength Callouts */}
      <section className="relative bg-[#e9edf2] px-[9vw] py-28 text-black">
        <div className="grid items-center gap-16 lg:grid-cols-[0.33fr_0.34fr_0.33fr]">
          <div className="grid gap-24">
            {standards.slice(0, 2).map((item) => (
              <article key={item.title}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#104B9C]" />
                  <h3 className="text-[22px] font-medium">{item.title}</h3>
                </div>

                <p className="text-[18px] leading-[1.4] text-[#4f4f4f]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <img
            src={assets.contactTeam}
            alt="Managed workforce"
            className="mx-auto h-[720px] w-full rounded-[8px] object-cover shadow-[0_35px_90px_rgba(0,0,0,0.12)]"
          />

          <div className="grid gap-24">
            {standards.slice(2).map((item) => (
              <article key={item.title}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#104B9C]" />
                  <h3 className="text-[22px] font-medium">{item.title}</h3>
                </div>

                <p className="text-[18px] leading-[1.4] text-[#4f4f4f]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-white px-[9vw] py-28 text-black">
        <div className="grid gap-20 lg:grid-cols-[0.36fr_0.64fr]">
          <p className="font-semibold text-[#104B9C]">
            Workforce Capabilities
          </p>

          <SectionHeading>
            Practical staffing support for daily operations.
          </SectionHeading>
        </div>

        <div className="mt-24 grid gap-0 border-y border-black/10 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="border-black/10 py-10 transition-all duration-500 ease-out lg:border-r lg:px-8 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-[420px] w-full rounded-[6px] object-cover transition-transform duration-500 ease-out hover:scale-[1.015]"
              />

              <h3 className="mt-9 text-[26px] font-medium tracking-[-0.04em]">
                {card.title}
              </h3>

              <p className="mt-5 text-[19px] leading-[1.38] text-[#4f4f4f]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-white px-[9vw] py-28 text-black">
        <div className="grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
          <p className="font-semibold text-[#104B9C]">
            Staffing Process
            <br />
            Structured Support
          </p>

          <div>
            <SectionHeading>
              A clear process from requirement understanding to ongoing support.
            </SectionHeading>
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-4">
          {process.map((item) => (
            <article key={item.year} className="relative">
              <div className="mb-7 inline-flex rounded-[4px] border border-black/15 px-5 py-3 text-[18px] font-medium">
                {item.year}
              </div>

              <div className="mb-8 h-px w-full bg-[repeating-linear-gradient(90deg,rgba(16,75,156,0.35)_0_2px,transparent_2px_14px)]" />

              <h3 className="text-[28px] font-light leading-[1.08] tracking-[-0.05em]">
                {item.title}
              </h3>

              <p className="mt-5 text-[18px] leading-[1.38] text-[#4f4f4f]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Industries Carousel */}
      <section className="bg-[#104B9C] px-[9vw] py-28 text-white">
        <div className="grid gap-20 lg:grid-cols-[0.34fr_0.66fr]">
          <p className="font-semibold text-[#d6eaff]">
            Industries We Support
          </p>

          <SectionHeading light>
            Manpower solutions for workplaces where discipline, hygiene, and
            responsibility matter.
          </SectionHeading>
        </div>

        <div className="mt-24 grid overflow-hidden rounded-[12px] border border-white/15 bg-white/10 backdrop-blur-sm lg:grid-cols-[0.42fr_0.58fr]">
          {/* Left Tabs */}
          <div className="border-b border-white/15 lg:border-b-0 lg:border-r">
            {industries.map((industry, index) => {
              const isActive = activeIndustry === index;

              return (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  className={`group flex w-full items-center justify-between gap-8 border-b border-white/15 px-7 py-7 text-left transition-all duration-500 ease-out last:border-b-0 ${
                    isActive
                      ? "bg-white text-[#104B9C]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-5">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold transition-all duration-500 ${
                        isActive
                          ? "bg-[#104B9C] text-white"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[26px] font-light leading-none tracking-[-0.05em] md:text-[34px]">
                      {industry.title}
                    </span>
                  </span>

                  <span
                    className={`text-[28px] font-light transition-all duration-500 ease-out ${
                      isActive
                        ? "translate-x-1 text-[#104B9C]"
                        : "text-white/60 group-hover:translate-x-2 group-hover:text-white"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Active Card */}
          <div className="relative min-h-[620px] overflow-hidden">
            <img
              key={selectedIndustry.image}
              src={selectedIndustry.image}
              alt={`${selectedIndustry.title} manpower support`}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/95 via-[#104B9C]/45 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="mb-5 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                Industry Support
              </p>

              <h3 className="max-w-[620px] text-[46px] font-light leading-[0.95] tracking-[-0.06em] text-white md:text-[66px]">
                {selectedIndustry.title}
              </h3>

              <p className="mt-7 max-w-[620px] text-[20px] leading-[1.38] text-white/78">
                {selectedIndustry.text}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {selectedIndustry.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[14px] font-medium text-white backdrop-blur-sm"
                  >
                    {point}
                  </span>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 rounded-[4px] bg-[#d6eaff] px-6 py-3 text-[15px] font-semibold text-black transition-all duration-300 hover:bg-white"
              >
                Request Workforce
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white px-[9vw] py-28 text-black">
        <div className="grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
          <p className="font-semibold text-[#104B9C]">
            Company Team
            <br />
            People Behind Platinum
          </p>

          <SectionHeading>
            A dedicated team managing client coordination and reliable manpower
            deployment.
          </SectionHeading>
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-[8px] border border-[#104B9C]/15 bg-[#f7fbff] p-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(16,75,156,0.16)]"
            >
              <div className="mb-14 flex h-20 w-20 items-center justify-center rounded-full bg-[#104B9C] text-[24px] font-semibold text-white">
                {member.initials}
              </div>

              <h3 className="text-[42px] font-light uppercase leading-[1] tracking-[-0.06em]">
                {member.name}
              </h3>

              <p className="mt-3 text-[22px] font-medium text-[#104B9C]">
                {member.role}
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href={`tel:+91${member.call}`}
                  className="block text-[24px] font-semibold text-black transition-all duration-300 ease-out hover:text-[#104B9C]"
                >
                  {member.phone}
                </a>

                <a
                  href={`mailto:${member.email}`}
                  className="block break-words text-[20px] font-medium text-[#4f4f4f] transition-all duration-300 ease-out hover:text-[#104B9C]"
                >
                  {member.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-[9vw] py-28 text-black">
        <div className="grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="font-semibold text-[#104B9C]">Common Questions</p>
          </div>

          <div>
            <SectionHeading>Facts About Our Services</SectionHeading>

            <div className="mt-16">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#104B9C] px-[9vw] py-28 text-white">
        <div className="grid items-center gap-20 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="mb-10 font-semibold text-[#d6eaff]">
              Work With Platinum
            </p>

            <SectionHeading light>
              Need reliable manpower for your workplace?
            </SectionHeading>

            <p className="mt-10 max-w-[560px] text-[20px] leading-[1.35] text-white/75">
              Share your staffing requirement with us. Our team will guide you
              with the right manpower solution for your business operations.
            </p>

            <Button href="/contact" dark>
              Request Workforce
            </Button>
          </div>

          <img
            src={assets.contactTeam}
            alt="Platinum contact team"
            className="h-[560px] w-full rounded-[8px] object-cover shadow-[0_35px_100px_rgba(0,0,0,0.22)]"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}