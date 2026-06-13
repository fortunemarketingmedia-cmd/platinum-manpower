"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const assets = {
  staffGroup: "/images/platinum-staff-group.png",
  workforce: "/images/workforce-team.png",
  hospital: "/images/hospital-staff.png",
  hotel: "/images/hotel-staff.png",
  mall: "/images/mall-staff.png",
  airport: "/images/airport-staff.png",
  contactTeam: "/images/contact-team.png",
};

const services = [
  {
    number: "01",
    shortTitle: "Skilled Manpower",
    title: "Skilled Manpower Supply",
    image: assets.workforce,
    eyebrow: "Role-based workforce",
    intro:
      "Trained manpower for specialized operational roles where experience, discipline, and responsibility matter.",
    description:
      "We understand the role, work environment, shift timing, expected skills, and manpower quantity before shortlisting suitable workers for deployment.",
    roles: [
      "Machine operators",
      "Technicians",
      "Supervisors",
      "Administrative staff",
      "Operational support staff",
      "Role-specific workers",
    ],
    support: [
      "Requirement-based shortlisting",
      "Basic experience screening",
      "Deployment coordination",
      "Replacement support",
    ],
    idealFor: "Hospitals, hotels, offices, facilities, and commercial operations",
  },
  {
    number: "02",
    shortTitle: "Unskilled Manpower",
    title: "Unskilled Manpower Supply",
    image: assets.staffGroup,
    eyebrow: "Daily operational support",
    intro:
      "Dependable manpower for routine tasks, assistance work, cleaning support, movement, and day-to-day business operations.",
    description:
      "Our team helps clients maintain workforce availability for recurring operational activities that need punctuality, basic training, and responsible coordination.",
    roles: [
      "General helpers",
      "Loaders and unloaders",
      "Office helpers",
      "Support workers",
      "Cleaning assistants",
      "Operational helpers",
    ],
    support: [
      "Shift-based deployment",
      "Workplace orientation",
      "Attendance coordination",
      "Quick replacement assistance",
    ],
    idealFor: "Warehouses, offices, malls, hospitality, and commercial spaces",
  },
  {
    number: "03",
    shortTitle: "Healthcare Staff",
    title: "Nurses & Healthcare Support Staff",
    image: assets.hospital,
    eyebrow: "Healthcare workforce",
    intro:
      "Responsible support staff for hospitals, clinics, care facilities, and healthcare environments.",
    description:
      "Healthcare operations need hygiene, sensitivity, punctuality, and clear role understanding. We coordinate manpower based on the facility's working requirements.",
    roles: [
      "Nurses",
      "Ward boys",
      "Patient care staff",
      "Hospital attendants",
      "Housekeeping staff",
      "Healthcare support workers",
    ],
    support: [
      "Basic profile screening",
      "Role and shift coordination",
      "Hygiene-focused orientation",
      "Ongoing client support",
    ],
    idealFor: "Hospitals, clinics, diagnostic centres, and care facilities",
  },
  {
    number: "04",
    shortTitle: "Hospitality Staff",
    title: "Hotel & Hospitality Staff",
    image: assets.hotel,
    eyebrow: "Guest-facing support",
    intro:
      "Service-oriented manpower for hotels, restaurants, banquets, kitchens, rooms, and hospitality operations.",
    description:
      "We support hospitality businesses with staff selected for grooming, service attitude, discipline, and the ability to work within structured operating standards.",
    roles: [
      "Room attendants",
      "Service staff",
      "Kitchen helpers",
      "Banquet staff",
      "Stewards",
      "Housekeeping staff",
    ],
    support: [
      "Grooming guidance",
      "Shift-based staffing",
      "Service role coordination",
      "Replacement support",
    ],
    idealFor: "Hotels, resorts, restaurants, cafés, clubs, and banquet facilities",
  },
  {
    number: "05",
    shortTitle: "Housekeeping",
    title: "Housekeeping & Facility Support",
    image: assets.mall,
    eyebrow: "Clean and managed workplaces",
    intro:
      "Well-managed housekeeping and facility manpower for workplaces where hygiene and consistency influence daily operations.",
    description:
      "We provide staff for routine cleaning, common-area upkeep, washroom maintenance, support work, and facility assistance across different business environments.",
    roles: [
      "Housekeeping staff",
      "Cleaning attendants",
      "Pantry staff",
      "Facility helpers",
      "Common-area staff",
      "Maintenance support workers",
    ],
    support: [
      "Site requirement assessment",
      "Task-based staff allocation",
      "Basic hygiene guidance",
      "Supervision and coordination",
    ],
    idealFor: "Hospitals, malls, airports, offices, hotels, and commercial spaces",
  },
];

const highlights = [
  {
    value: "05",
    label: "Core service categories",
  },
  {
    value: "06+",
    label: "Industries supported",
  },
  {
    value: "01",
    label: "Single coordination team",
  },
  {
    value: "24/7",
    label: "Client support availability",
  },
];

const process = [
  {
    step: "01",
    title: "Requirement Discussion",
    text: "We understand the role, quantity, shift, location, experience level, and expected joining timeline.",
  },
  {
    step: "02",
    title: "Profile Screening",
    text: "Available candidates are checked for basic suitability, experience, availability, and workplace expectations.",
  },
  {
    step: "03",
    title: "Shortlisting & Approval",
    text: "Suitable profiles are coordinated with the client before final selection and deployment planning.",
  },
  {
    step: "04",
    title: "Deployment",
    text: "Selected manpower is assigned to the site with role, timing, reporting, and work expectations explained.",
  },
  {
    step: "05",
    title: "Ongoing Coordination",
    text: "We assist with attendance concerns, replacements, communication, and operational workforce support.",
  },
];

const standards = [
  {
    number: "01",
    title: "Verified Workforce",
    text: "Basic identity and profile screening before staff deployment, depending on role and client requirements.",
  },
  {
    number: "02",
    title: "Workplace Discipline",
    text: "Staff are guided regarding reporting time, grooming, hygiene, conduct, and role responsibility.",
  },
  {
    number: "03",
    title: "Flexible Staffing",
    text: "Support for recurring, shift-based, project-based, and ongoing manpower requirements.",
  },
  {
    number: "04",
    title: "Quick Replacement",
    text: "Replacement coordination is provided when operational continuity is affected by manpower absence.",
  },
  {
    number: "05",
    title: "Client Coordination",
    text: "A structured communication process helps resolve staffing issues and maintain clear responsibility.",
  },
  {
    number: "06",
    title: "Practical Pricing",
    text: "Service planning is aligned with the manpower category, shift, work conditions, and deployment scope.",
  },
];

const industries = [
  {
    title: "Hospitals",
    image: assets.hospital,
    text: "Healthcare and facility staff for sensitive, hygiene-focused work environments.",
  },
  {
    title: "Hotels",
    image: assets.hotel,
    text: "Hospitality, room, kitchen, service, and housekeeping manpower.",
  },
  {
    title: "Shopping Malls",
    image: assets.mall,
    text: "Housekeeping, customer assistance, facility, and operational support staff.",
  },
  {
    title: "Airports",
    image: assets.airport,
    text: "Disciplined staff for high-standard facility and customer-support environments.",
  },
  {
    title: "Offices",
    image: assets.staffGroup,
    text: "Office boys, pantry staff, housekeeping workers, and daily support manpower.",
  },
  {
    title: "Commercial Spaces",
    image: assets.workforce,
    text: "Flexible workforce for routine operations, cleaning, maintenance, and support.",
  },
];

const faqs = [
  {
    question: "Can we request manpower for a specific shift?",
    answer:
      "Yes. Manpower requirements can be planned around day, night, rotational, or business-specific shifts, subject to role and staff availability.",
  },
  {
    question: "Do you provide both skilled and unskilled staff?",
    answer:
      "Yes. Platinum provides skilled, semi-skilled, and unskilled manpower based on the job profile, work environment, and client requirement.",
  },
  {
    question: "Is replacement support included?",
    answer:
      "Replacement coordination is available when required. The exact process depends on the category of manpower, urgency, location, and agreed service scope.",
  },
  {
    question: "Which locations and industries do you support?",
    answer:
      "Our main service areas include hospitals, hotels, shopping malls, airports, offices, and commercial facilities. Deployment feasibility is confirmed after understanding the location and requirement.",
  },
  {
    question: "How do we start a manpower requirement?",
    answer:
      "Share the role, number of workers, workplace location, shift timing, expected experience, and joining date. Our team will review the requirement and coordinate the next steps.",
  },
];

function SectionHeading({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`text-[42px] font-light leading-[0.98] tracking-[-0.065em] md:text-[58px] xl:text-[76px] ${
        light ? "text-white" : "text-black"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function ActionButton({
  children,
  href,
  light = false,
}: {
  children: ReactNode;
  href: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group mt-8 inline-flex items-center gap-4 rounded-[5px] px-5 py-3.5 text-[15px] font-semibold transition-all duration-300 ${
        light
          ? "bg-[#d6eaff] text-black hover:bg-white"
          : "bg-[#104B9C] text-white hover:bg-[#0b3b7c]"
      }`}
    >
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
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
    <div className="border-t border-black/10 last:border-b">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-8 py-7 text-left"
      >
        <span className="text-[19px] font-medium text-black transition-colors duration-300 hover:text-[#104B9C] md:text-[21px]">
          {question}
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#104B9C]/20 text-[24px] font-light text-[#104B9C] transition-all duration-300 ${
            open ? "rotate-45 bg-[#104B9C] text-white" : "bg-[#f7fbff]"
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[760px] pb-8 pr-12 text-[18px] leading-[1.5] text-[#555]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const selectedService = services[activeService];

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-[#4f4f4f]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#D9EAFD] px-[6vw] pb-16 pt-[132px] lg:px-[9vw] lg:pb-24">
        <div className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full border border-[#104B9C]/10" />
        <div className="pointer-events-none absolute -left-4 top-48 h-44 w-44 rounded-full border border-[#104B9C]/10" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(16,75,156,0.12)_1px,transparent_1px)] bg-[length:28px_28px] opacity-35" />

        <div className="relative grid items-end gap-16 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="pb-4">
            <p className="mb-7 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#104B9C]">
              Platinum Manpower Services
            </p>

            <h1 className="max-w-[760px] text-[50px] font-light leading-[0.94] tracking-[-0.068em] text-black md:text-[72px] xl:text-[96px]">
              Workforce services built around real operations.
            </h1>

            <p className="mt-9 max-w-[640px] text-[20px] leading-[1.42] text-black/65 md:text-[22px]">
              Skilled, unskilled, healthcare, hospitality, housekeeping, and
              facility manpower coordinated for dependable daily performance.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <ActionButton href="/contact">Request Workforce</ActionButton>

              <a
                href="#service-explorer"
                className="mt-8 border-b border-black/30 pb-1 text-[15px] font-semibold text-black transition-colors hover:border-[#104B9C] hover:text-[#104B9C]"
              >
                Explore all services
              </a>
            </div>
          </div>

          <div className="grid min-h-[600px] gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <div className="group relative min-h-[520px] overflow-hidden rounded-[10px] bg-[#104B9C] md:min-h-[600px]">
              <img
                src={assets.workforce}
                alt="Platinum professional workforce"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                  Managed Workforce
                </p>
                <p className="mt-3 max-w-[420px] text-[28px] font-light leading-[1.05] tracking-[-0.045em] md:text-[38px]">
                  The right people, prepared for the right responsibility.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="relative min-h-[250px] overflow-hidden rounded-[10px]">
                <img
                  src={assets.hospital}
                  alt="Healthcare support staff"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#104B9C]/85 to-transparent" />
                <p className="absolute bottom-5 left-5 text-[20px] font-medium text-white">
                  Healthcare
                </p>
              </div>

              <div className="relative min-h-[250px] overflow-hidden rounded-[10px] bg-[#104B9C] p-7 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[length:20px_20px] opacity-25" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-[20px]">
                    ↳
                  </span>
                  <div>
                    <p className="text-[42px] font-light leading-none tracking-[-0.06em]">
                      Reliable
                    </p>
                    <p className="mt-3 text-[16px] leading-[1.35] text-white/70">
                      Screening, deployment, replacement, and ongoing support
                      under one service structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Strip */}
      <section className="border-y border-black/10 bg-white px-[6vw] lg:px-[9vw]">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <article
              key={item.label}
              className={`py-9 sm:px-7 xl:py-11 ${
                index !== highlights.length - 1 ? "xl:border-r" : ""
              } border-black/10 first:pl-0 last:pr-0`}
            >
              <p className="text-[38px] font-light leading-none tracking-[-0.06em] text-[#104B9C] md:text-[48px]">
                {item.value}
              </p>
              <p className="mt-3 text-[15px] font-medium text-black/60">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Service Explorer */}
      <section
        id="service-explorer"
        className="scroll-mt-24 bg-[#f4f7fa] px-[6vw] py-24 lg:px-[9vw] lg:py-28"
      >
        <div className="grid gap-16 lg:grid-cols-[0.32fr_0.68fr] lg:gap-24">
          <div>
            <p className="font-semibold text-[#104B9C]">Service Explorer</p>
          </div>

          <SectionHeading>
            Choose the workforce service your operation needs.
          </SectionHeading>
        </div>

        <div className="mt-20 grid overflow-hidden rounded-[12px] border border-[#104B9C]/15 bg-white shadow-[0_30px_90px_rgba(16,75,156,0.10)] xl:grid-cols-[0.36fr_0.64fr]">
          <div className="border-b border-black/10 bg-[#eaf2fb] xl:border-b-0 xl:border-r">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveService(index)}
                  className={`group flex w-full items-center gap-5 border-b border-[#104B9C]/10 px-6 py-6 text-left transition-all duration-300 last:border-b-0 md:px-8 ${
                    isActive
                      ? "bg-[#104B9C] text-white"
                      : "text-black hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-[13px] font-semibold transition-all ${
                      isActive
                        ? "border-white/25 bg-white text-[#104B9C]"
                        : "border-[#104B9C]/20 bg-white text-[#104B9C]"
                    }`}
                  >
                    {service.number}
                  </span>

                  <span className="flex-1 text-[20px] font-medium leading-[1.1] tracking-[-0.025em] md:text-[23px]">
                    {service.shortTitle}
                  </span>

                  <span
                    className={`text-[24px] transition-transform duration-300 ${
                      isActive ? "translate-x-1" : "group-hover:translate-x-1"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid min-h-[720px] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-[#104B9C] lg:min-h-full">
              <img
                key={selectedService.image}
                src={selectedService.image}
                alt={selectedService.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/90 via-[#104B9C]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#d6eaff]">
                  {selectedService.eyebrow}
                </p>
                <p className="mt-4 text-[26px] font-light leading-[1.15] tracking-[-0.035em] text-white/90">
                  {selectedService.intro}
                </p>
              </div>
            </div>

            <div className="p-7 md:p-10 xl:p-12">
              <div className="flex items-center justify-between gap-6">
                <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#104B9C]">
                  Service {selectedService.number}
                </span>
                <span className="h-px flex-1 bg-[#104B9C]/15" />
              </div>

              <h3 className="mt-8 text-[40px] font-light leading-[0.98] tracking-[-0.058em] text-black md:text-[52px]">
                {selectedService.title}
              </h3>

              <p className="mt-7 text-[18px] leading-[1.48] text-[#555]">
                {selectedService.description}
              </p>

              <div className="mt-9 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                    Roles We Support
                  </p>
                  <ul className="space-y-3">
                    {selectedService.roles.map((role) => (
                      <li
                        key={role}
                        className="flex items-start gap-3 text-[16px] leading-[1.35] text-black/75"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#104B9C]" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                    Service Support
                  </p>
                  <ul className="space-y-3">
                    {selectedService.support.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[16px] leading-[1.35] text-black/75"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d6eaff] text-[11px] font-bold text-[#104B9C]">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-9 rounded-[6px] border border-[#104B9C]/15 bg-[#f7fbff] p-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                  Suitable For
                </p>
                <p className="mt-2 text-[16px] font-medium leading-[1.4] text-black">
                  {selectedService.idealFor}
                </p>
              </div>

              <ActionButton href="/contact">Enquire for This Service</ActionButton>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-white px-[6vw] py-24 lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">
          <div>
            <p className="font-semibold text-[#104B9C]">
              Service Coverage
              <br />
              Flexible Workforce Options
            </p>
          </div>

          <div>
            <SectionHeading>
              Support that adapts to the role, shift, site, and workload.
            </SectionHeading>
            <p className="mt-8 max-w-[720px] text-[20px] leading-[1.45] text-[#555]">
              Every workplace has different staffing needs. We plan the manpower
              category and coordination model around your operational setup
              instead of forcing a fixed staffing format.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          <article className="group relative min-h-[520px] overflow-hidden rounded-[9px] bg-[#104B9C] lg:col-span-2">
            <img
              src={assets.staffGroup}
              alt="Contract workforce support"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/95 via-[#104B9C]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#d6eaff]">
                Ongoing Workforce
              </p>
              <h3 className="mt-4 max-w-[680px] text-[42px] font-light leading-[0.98] tracking-[-0.055em] md:text-[58px]">
                Contract and recurring manpower support.
              </h3>
              <p className="mt-6 max-w-[620px] text-[18px] leading-[1.42] text-white/75">
                Suitable for businesses that need dependable staff availability
                across regular shifts and recurring operations.
              </p>
            </div>
          </article>

          <article className="flex min-h-[520px] flex-col justify-between rounded-[9px] bg-[#d6eaff] p-8 text-black md:p-10">
            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#104B9C] text-[18px] font-semibold text-white">
                01
              </span>
              <span className="text-[28px] text-[#104B9C]">↗</span>
            </div>

            <div>
              <h3 className="text-[38px] font-light leading-[1] tracking-[-0.055em] md:text-[48px]">
                Temporary staffing
              </h3>
              <p className="mt-6 text-[18px] leading-[1.45] text-black/65">
                Additional staff for workload peaks, events, seasonal demand,
                urgent support, or short-duration operational requirements.
              </p>
            </div>
          </article>

          <article className="flex min-h-[420px] flex-col justify-between rounded-[9px] border border-[#104B9C]/15 bg-[#f7fbff] p-8 md:p-10">
            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#104B9C]/20 text-[18px] font-semibold text-[#104B9C]">
                02
              </span>
              <span className="text-[28px] text-[#104B9C]">↗</span>
            </div>

            <div>
              <h3 className="text-[38px] font-light leading-[1] tracking-[-0.055em] text-black md:text-[48px]">
                Shift-based support
              </h3>
              <p className="mt-6 text-[18px] leading-[1.45] text-black/60">
                Staff planning for fixed, rotational, day, night, and
                operation-specific shift structures.
              </p>
            </div>
          </article>

          <article className="group relative min-h-[420px] overflow-hidden rounded-[9px] bg-[#104B9C] lg:col-span-2">
            <img
              src={assets.contactTeam}
              alt="Workforce coordination team"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b38]/95 via-[#104B9C]/65 to-transparent" />
            <div className="relative flex min-h-[420px] max-w-[620px] flex-col justify-end p-8 text-white md:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#d6eaff]">
                Managed Coordination
              </p>
              <h3 className="mt-4 text-[42px] font-light leading-[0.98] tracking-[-0.055em] md:text-[58px]">
                One team supporting your workforce requirement.
              </h3>
              <p className="mt-6 text-[18px] leading-[1.42] text-white/75">
                Clear communication for staffing updates, attendance concerns,
                replacement requests, and ongoing deployment support.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#104B9C] px-[6vw] py-24 text-white lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.32fr_0.68fr] lg:gap-24">
          <p className="font-semibold text-[#d6eaff]">
            Our Deployment Process
          </p>

          <SectionHeading light>
            A clear route from staffing request to on-site support.
          </SectionHeading>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden border-t border-dashed border-white/25 xl:block" />

          <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {process.map((item, index) => (
              <article
                key={item.step}
                className={`rounded-[8px] border p-7 transition-all duration-300 hover:-translate-y-2 ${
                  index % 2 === 0
                    ? "border-white/15 bg-white text-black"
                    : "border-white/20 bg-white/10 text-white backdrop-blur-sm"
                }`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-[14px] font-bold ${
                    index % 2 === 0
                      ? "bg-[#104B9C] text-white"
                      : "bg-[#d6eaff] text-black"
                  }`}
                >
                  {item.step}
                </span>

                <h3 className="mt-16 text-[26px] font-light leading-[1.08] tracking-[-0.045em]">
                  {item.title}
                </h3>

                <p
                  className={`mt-6 text-[16px] leading-[1.45] ${
                    index % 2 === 0 ? "text-black/60" : "text-white/70"
                  }`}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-[#eef2f5] px-[6vw] py-24 text-black lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 xl:grid-cols-[0.38fr_0.62fr] xl:gap-24">
          <div className="xl:sticky xl:top-32 xl:self-start">
            <p className="font-semibold text-[#104B9C]">Service Standards</p>
            <h2 className="mt-8 max-w-[520px] text-[44px] font-light leading-[1] tracking-[-0.06em] md:text-[58px]">
              More than supplying staff. We support continuity.
            </h2>
            <p className="mt-8 max-w-[480px] text-[19px] leading-[1.45] text-black/60">
              Our service structure is designed to reduce staffing confusion and
              provide clients with a dependable point of coordination.
            </p>
            <ActionButton href="/contact">Discuss Your Requirement</ActionButton>
          </div>

          <div className="border-t border-black/10">
            {standards.map((item) => (
              <article
                key={item.number}
                className="group grid gap-6 border-b border-black/10 py-8 transition-colors duration-300 md:grid-cols-[0.12fr_0.36fr_0.52fr] md:items-start"
              >
                <span className="text-[14px] font-semibold text-[#104B9C]">
                  {item.number}
                </span>
                <h3 className="text-[27px] font-light leading-[1.05] tracking-[-0.045em] text-black transition-colors group-hover:text-[#104B9C] md:text-[32px]">
                  {item.title}
                </h3>
                <p className="text-[18px] leading-[1.45] text-black/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white px-[6vw] py-24 lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.34fr_0.66fr] lg:gap-24">
          <p className="font-semibold text-[#104B9C]">Industries We Support</p>
          <SectionHeading>
            Workforce solutions for service-driven workplaces.
          </SectionHeading>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className={`group relative min-h-[430px] overflow-hidden rounded-[9px] ${
                index === 0 || index === 5 ? "xl:col-span-2" : ""
              }`}
            >
              <img
                src={industry.image}
                alt={`${industry.title} manpower services`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/92 via-[#104B9C]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-8">
                <div className="mb-5 h-px w-full bg-white/20" />
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <h3 className="text-[36px] font-light leading-none tracking-[-0.055em] md:text-[44px]">
                      {industry.title}
                    </h3>
                    <p className="mt-4 max-w-[520px] text-[17px] leading-[1.4] text-white/70">
                      {industry.text}
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7fbff] px-[6vw] py-24 text-black lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.34fr_0.66fr] lg:gap-24">
          <div>
            <p className="font-semibold text-[#104B9C]">Service Questions</p>
            <p className="mt-6 max-w-[300px] text-[17px] leading-[1.45] text-black/55">
              Important information before you share a manpower requirement.
            </p>
          </div>

          <div>
            <SectionHeading>Frequently asked questions.</SectionHeading>

            <div className="mt-14">
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
      <section className="relative overflow-hidden bg-[#104B9C] px-[6vw] py-24 text-white lg:px-[9vw] lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:30px_30px] opacity-20" />
        <div className="absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute -bottom-20 right-16 h-[360px] w-[360px] rounded-full border border-white/10" />

        <div className="relative grid items-center gap-16 lg:grid-cols-[0.58fr_0.42fr] lg:gap-20">
          <div>
            <p className="mb-8 font-semibold text-[#d6eaff]">
              Start Your Requirement
            </p>
            <SectionHeading light className="max-w-[850px]">
              Tell us the role, quantity, shift, and location. We will help plan
              the workforce.
            </SectionHeading>

            <p className="mt-8 max-w-[650px] text-[20px] leading-[1.45] text-white/70">
              Connect with Platinum Manpower and Facility Management Services
              for practical staffing support designed around your workplace.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <ActionButton href="/contact" light>
                Request Workforce
              </ActionButton>

              <a
                href="tel:+919325158710"
                className="mt-8 inline-flex items-center border-b border-white/35 pb-1 text-[15px] font-semibold text-white transition-colors hover:border-white"
              >
                Call 93251 58710
              </a>
            </div>
          </div>

          <div className="relative min-h-[500px] overflow-hidden rounded-[10px] border border-white/15 bg-white/10">
            <img
              src={assets.contactTeam}
              alt="Platinum workforce support team"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#d6eaff]">
                Platinum Support
              </p>
              <p className="mt-3 text-[28px] font-light leading-[1.08] tracking-[-0.04em] text-white">
                Reliable coordination from requirement to deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
