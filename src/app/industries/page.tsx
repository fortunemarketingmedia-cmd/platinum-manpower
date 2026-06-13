"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
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

const industries = [
  {
    number: "01",
    title: "Hospitals & Healthcare",
    shortTitle: "Hospitals",
    image: assets.hospital,
    label: "Hygiene-led workforce support",
    summary:
      "Reliable manpower for healthcare environments where hygiene, sensitivity, punctuality, and responsible conduct are essential every day.",
    description:
      "Hospitals require a workforce that understands structured reporting, patient-sensitive environments, cleanliness standards, and shift-based responsibilities. We coordinate suitable manpower based on the department, working hours, and operational scope.",
    roles: [
      "Nurses",
      "Ward boys",
      "Patient care attendants",
      "Hospital housekeeping staff",
      "Support workers",
      "Facility helpers",
    ],
    priorities: [
      "Hygiene and grooming",
      "Shift punctuality",
      "Patient-sensitive conduct",
      "Clear reporting responsibility",
    ],
    environments: ["Hospitals", "Clinics", "Diagnostic centres", "Care facilities"],
    accent: "Critical care support",
  },
  {
    number: "02",
    title: "Hotels & Hospitality",
    shortTitle: "Hotels",
    image: assets.hotel,
    label: "Guest-focused staffing",
    summary:
      "Service-oriented manpower for hotels, restaurants, banquets, kitchens, rooms, and guest-facing hospitality operations.",
    description:
      "Hospitality staffing needs discipline, grooming, teamwork, and consistency across busy shifts. We help businesses arrange role-specific manpower for service, cleaning, kitchen, room, and support operations.",
    roles: [
      "Room attendants",
      "Stewards",
      "Service staff",
      "Kitchen helpers",
      "Banquet staff",
      "Housekeeping workers",
    ],
    priorities: [
      "Professional grooming",
      "Guest service behaviour",
      "Shift flexibility",
      "Team coordination",
    ],
    environments: ["Hotels", "Restaurants", "Resorts", "Banquet facilities"],
    accent: "Guest experience support",
  },
  {
    number: "03",
    title: "Shopping Malls & Retail Spaces",
    shortTitle: "Shopping Malls",
    image: assets.mall,
    label: "High-footfall facility support",
    summary:
      "Facility and support manpower for shopping malls where cleanliness, customer movement, and operational continuity need constant attention.",
    description:
      "Large retail spaces require coordinated manpower across public areas, washrooms, service zones, customer support points, and routine facility activities. Staffing can be planned according to footfall, shift, and zone requirements.",
    roles: [
      "Housekeeping staff",
      "Customer assistance staff",
      "Facility helpers",
      "Maintenance support workers",
      "Cleaning attendants",
      "Operational support staff",
    ],
    priorities: [
      "Public-area cleanliness",
      "Customer assistance",
      "Zone-based deployment",
      "Peak-hour readiness",
    ],
    environments: ["Shopping malls", "Retail centres", "Multiplexes", "Commercial plazas"],
    accent: "High-footfall readiness",
  },
  {
    number: "04",
    title: "Airports & Transit Facilities",
    shortTitle: "Airports",
    image: assets.airport,
    label: "Disciplined transit support",
    summary:
      "Professionally managed manpower for airport and transit environments where punctuality, grooming, and process discipline matter.",
    description:
      "Transit environments operate through strict timing and structured responsibilities. We support manpower planning for facility upkeep, passenger assistance, operational support, and routine service functions.",
    roles: [
      "Facility support staff",
      "Customer assistance staff",
      "Housekeeping workers",
      "Operational helpers",
      "Cleaning attendants",
      "Support manpower",
    ],
    priorities: [
      "Strict punctuality",
      "Professional appearance",
      "Process discipline",
      "Continuous shift coverage",
    ],
    environments: ["Airports", "Transit terminals", "Travel lounges", "Service facilities"],
    accent: "Time-critical operations",
  },
  {
    number: "05",
    title: "Corporate Offices",
    shortTitle: "Offices",
    image: assets.staffGroup,
    label: "Professional workplace support",
    summary:
      "Reliable support staff for corporate offices and business workplaces to maintain cleanliness, comfort, and smooth daily operations.",
    description:
      "Office support manpower helps businesses maintain a professional environment for employees and visitors. We coordinate staff for cleaning, pantry, office assistance, routine support, and facility-related activities.",
    roles: [
      "Office boys",
      "Pantry staff",
      "Housekeeping workers",
      "Reception support staff",
      "General helpers",
      "Facility assistants",
    ],
    priorities: [
      "Professional workplace conduct",
      "Daily task consistency",
      "Visitor-area readiness",
      "Clean and organised spaces",
    ],
    environments: ["Corporate offices", "Business centres", "IT offices", "Administrative spaces"],
    accent: "Workplace continuity",
  },
  {
    number: "06",
    title: "Commercial & Industrial Facilities",
    shortTitle: "Commercial Spaces",
    image: assets.workforce,
    label: "Flexible operational manpower",
    summary:
      "Flexible skilled and unskilled manpower for commercial properties, routine operations, facility support, and workplace assistance.",
    description:
      "Commercial and industrial facilities often need dependable manpower across different roles, shifts, and workloads. We plan staffing around the actual job profile, site conditions, reporting structure, and deployment duration.",
    roles: [
      "General helpers",
      "Skilled workers",
      "Operational staff",
      "Cleaning workers",
      "Maintenance helpers",
      "Supervisory support",
    ],
    priorities: [
      "Role-based screening",
      "Shift availability",
      "Site discipline",
      "Flexible workforce planning",
    ],
    environments: ["Commercial properties", "Warehouses", "Business facilities", "Industrial support sites"],
    accent: "Flexible workforce capacity",
  },
];

const industryStats = [
  { value: "06", label: "Primary industry segments" },
  { value: "20+", label: "Workforce role categories" },
  { value: "24/7", label: "Shift-based support model" },
  { value: "01", label: "Coordinated service partner" },
];

const operatingPriorities = [
  {
    number: "01",
    title: "Hygiene & Cleanliness",
    text: "Important for hospitals, hotels, malls, airports, offices, and all high-use public or commercial spaces.",
  },
  {
    number: "02",
    title: "Discipline & Punctuality",
    text: "Structured reporting and dependable shift attendance help daily operations continue without avoidable disruption.",
  },
  {
    number: "03",
    title: "Grooming & Conduct",
    text: "Staff appearance, behaviour, and workplace responsibility influence customer and employee experience.",
  },
  {
    number: "04",
    title: "Operational Continuity",
    text: "Replacement coordination and ongoing support help businesses respond to absenteeism and workforce changes.",
  },
];

const coverageMatrix = [
  {
    role: "Housekeeping",
    coverage: [true, true, true, true, true, true],
  },
  {
    role: "Customer Assistance",
    coverage: [false, true, true, true, true, false],
  },
  {
    role: "Healthcare Support",
    coverage: [true, false, false, false, false, false],
  },
  {
    role: "Hospitality Support",
    coverage: [false, true, false, true, false, false],
  },
  {
    role: "Facility Helpers",
    coverage: [true, true, true, true, true, true],
  },
  {
    role: "Skilled / Operational Staff",
    coverage: [true, true, true, true, true, true],
  },
];

const deploymentSteps = [
  {
    step: "01",
    title: "Understand the Environment",
    text: "We review the workplace type, operating hours, footfall, hygiene expectations, and service responsibilities.",
  },
  {
    step: "02",
    title: "Define the Workforce Mix",
    text: "The requirement is divided by role, quantity, shift, experience, reporting structure, and deployment duration.",
  },
  {
    step: "03",
    title: "Screen for Suitability",
    text: "Suitable staff are shortlisted according to the job profile, availability, basic experience, and workplace expectations.",
  },
  {
    step: "04",
    title: "Deploy & Coordinate",
    text: "Selected manpower is deployed with role clarity, reporting details, shift timing, and ongoing coordination support.",
  },
];

const serviceAdvantages = [
  "Industry-specific role planning",
  "Skilled and unskilled manpower",
  "Shift and location coordination",
  "Basic staff screening",
  "Replacement support",
  "Ongoing client communication",
];

const faqs = [
  {
    question: "Can Platinum provide manpower for multiple locations?",
    answer:
      "Yes. Multi-location requirements can be reviewed and planned based on the number of sites, workforce quantity, role categories, shift structure, and deployment timeline.",
  },
  {
    question: "Can staffing be customised for our industry?",
    answer:
      "Yes. The workforce mix is planned around the actual working environment, role responsibility, operating hours, service expectations, and manpower availability.",
  },
  {
    question: "Do you support day, night, and rotational shifts?",
    answer:
      "Shift-based requirements can be supported for suitable roles, subject to location, manpower availability, working conditions, and the agreed service scope.",
  },
  {
    question: "Can we request only housekeeping or support staff?",
    answer:
      "Yes. You can request a single manpower category or a combined workforce plan covering housekeeping, facility support, helpers, customer assistance, healthcare, or hospitality roles.",
  },
  {
    question: "What information is required to start?",
    answer:
      "Share the industry, site location, required roles, number of workers, shift timing, experience preference, expected joining date, and any specific workplace conditions.",
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
    <div className="border-t border-white/15 last:border-b">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-8 py-7 text-left"
      >
        <span className="text-[19px] font-medium text-white transition-colors duration-300 hover:text-[#d6eaff] md:text-[21px]">
          {question}
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-[24px] font-light transition-all duration-300 ${
            open
              ? "rotate-45 border-white bg-white text-[#104B9C]"
              : "border-white/25 bg-white/5 text-white"
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
          <p className="max-w-[760px] pb-8 pr-10 text-[18px] leading-[1.5] text-white/68">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const selectedIndustry = industries[activeIndustry];

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-[#4f4f4f]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#D9EAFD] px-[6vw] pb-20 pt-[132px] text-white lg:px-[9vw] lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:30px_30px] opacity-20" />
        <div className="pointer-events-none absolute -right-40 -top-24 h-[620px] w-[620px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 top-20 h-[380px] w-[380px] rounded-full border border-white/10" />

        <div className="relative grid items-end gap-16 xl:grid-cols-[0.82fr_1.18fr] xl:gap-20">
          <div className="pb-4">
            <p className="mb-7 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
              Industries We Serve
            </p>

            <h1 className="max-w-[760px] text-[50px] font-light leading-[0.94] tracking-[-0.068em] text-black md:text-[72px] xl:text-[96px]">
              Workforce support shaped around every workplace.
            </h1>

            <p className="mt-9 max-w-[620px] text-[20px] leading-[1.42] text-black/65 md:text-[22px]">
              Industry-specific manpower for healthcare, hospitality, retail,
              transit, corporate, and commercial operations.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <ActionButton href="/contact" light>
                Discuss Your Industry
              </ActionButton>

              <a
                href="#industry-navigator"
                className="mt-8 border-b border-white/35 pb-1 text-[15px] font-semibold text-white transition-colors hover:border-white"
              >
                Explore industry support
              </a>
            </div>
          </div>

          <div className="grid min-h-[610px] grid-cols-2 gap-4 md:grid-cols-[0.78fr_1.22fr]">
            <div className="grid gap-4">
              <div className="relative min-h-[285px] overflow-hidden rounded-[10px] border border-white/15">
                <img
                  src={assets.hospital}
                  alt="Hospital manpower support"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/90 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 text-[20px] font-medium text-white">
                  Healthcare
                </p>
              </div>

              <div className="relative min-h-[285px] overflow-hidden rounded-[10px] border border-white/15 bg-[#d6eaff] p-7 text-black">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(16,75,156,0.22)_1px,transparent_1px)] bg-[length:21px_21px] opacity-35" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#104B9C]/20 bg-white text-[20px] text-[#104B9C]">
                    ↳
                  </span>
                  <div>
                    <p className="text-[44px] font-light leading-none tracking-[-0.06em] text-[#104B9C]">
                      6 Sectors
                    </p>
                    <p className="mt-3 max-w-[260px] text-[16px] leading-[1.38] text-black/60">
                      One coordinated manpower partner across different working
                      environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative min-h-[610px] overflow-hidden rounded-[10px] border border-white/15">
              <img
                src={assets.airport}
                alt="Professional industry workforce"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/92 via-[#104B9C]/12 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                  Industry-Focused Staffing
                </p>
                <p className="mt-4 max-w-[490px] text-[30px] font-light leading-[1.05] tracking-[-0.045em] text-white md:text-[42px]">
                  Different environments. Different priorities. One dependable
                  workforce process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-b border-black/10 bg-[#D9EAFD] px-[6vw] lg:px-[9vw]">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
          {industryStats.map((item, index) => (
            <article
              key={item.label}
              className={`py-9 sm:px-7 xl:py-11 ${
                index !== industryStats.length - 1 ? "xl:border-r" : ""
              } border-[#104B9C]/12 first:pl-0 last:pr-0`}
            >
              <p className="text-[40px] font-light leading-none tracking-[-0.06em] text-[#104B9C] md:text-[50px]">
                {item.value}
              </p>
              <p className="mt-3 text-[15px] font-medium text-black/58">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Industry Navigator */}
      <section
        id="industry-navigator"
        className="scroll-mt-24 bg-white px-[6vw] py-24 lg:px-[9vw] lg:py-28"
      >
        <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24">
          <div>
            <p className="font-semibold text-[#104B9C]">Industry Navigator</p>
            <p className="mt-6 max-w-[290px] text-[17px] leading-[1.45] text-black/55">
              Select a sector to view workforce roles, priorities, and operating
              environments.
            </p>
          </div>

          <SectionHeading>
            Staffing planned around how your industry actually operates.
          </SectionHeading>
        </div>

        <div className="mt-20 overflow-hidden rounded-[12px] border border-[#104B9C]/15 bg-[#f7fbff] shadow-[0_30px_90px_rgba(16,75,156,0.10)]">
          <div className="grid border-b border-[#104B9C]/12 sm:grid-cols-2 xl:grid-cols-6">
            {industries.map((industry, index) => {
              const isActive = activeIndustry === index;

              return (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  className={`group flex min-h-[110px] items-center justify-between gap-4 border-b border-r border-[#104B9C]/12 px-5 py-5 text-left transition-all duration-300 sm:last:border-b-0 xl:border-b-0 ${
                    isActive
                      ? "bg-[#104B9C] text-white"
                      : "bg-white text-black hover:bg-[#eaf2fb]"
                  }`}
                >
                  <div>
                    <span
                      className={`text-[12px] font-semibold uppercase tracking-[0.14em] ${
                        isActive ? "text-[#d6eaff]" : "text-[#104B9C]"
                      }`}
                    >
                      {industry.number}
                    </span>
                    <p className="mt-2 text-[17px] font-medium leading-[1.12]">
                      {industry.shortTitle}
                    </p>
                  </div>

                  <span
                    className={`text-[20px] transition-transform duration-300 ${
                      isActive ? "translate-x-1" : "group-hover:translate-x-1"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid min-h-[760px] xl:grid-cols-[0.96fr_1.04fr]">
            <div className="relative min-h-[520px] overflow-hidden bg-[#104B9C] xl:min-h-full">
              <img
                key={selectedIndustry.image}
                src={selectedIndustry.image}
                alt={`${selectedIndustry.title} manpower support`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/94 via-[#104B9C]/18 to-transparent" />

              <div className="absolute left-7 top-7 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                {selectedIndustry.accent}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-11">
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                  {selectedIndustry.label}
                </p>
                <h3 className="mt-4 max-w-[620px] text-[44px] font-light leading-[0.96] tracking-[-0.06em] md:text-[62px]">
                  {selectedIndustry.title}
                </h3>
                <p className="mt-6 max-w-[600px] text-[19px] leading-[1.42] text-white/75">
                  {selectedIndustry.summary}
                </p>
              </div>
            </div>

            <div className="bg-white p-7 md:p-10 xl:p-12">
              <div className="flex items-center gap-5">
                <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#104B9C]">
                  Sector {selectedIndustry.number}
                </span>
                <span className="h-px flex-1 bg-[#104B9C]/15" />
              </div>

              <p className="mt-8 text-[19px] leading-[1.48] text-black/65">
                {selectedIndustry.description}
              </p>

              <div className="mt-10 grid gap-9 md:grid-cols-2">
                <div>
                  <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                    Workforce Roles
                  </p>
                  <ul className="space-y-3">
                    {selectedIndustry.roles.map((role) => (
                      <li
                        key={role}
                        className="flex items-start gap-3 text-[16px] leading-[1.36] text-black/72"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#104B9C]" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                    Operating Priorities
                  </p>
                  <ul className="space-y-3">
                    {selectedIndustry.priorities.map((priority) => (
                      <li
                        key={priority}
                        className="flex items-start gap-3 text-[16px] leading-[1.36] text-black/72"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#104B9C]" />
                        <span>{priority}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-black/10 pt-8">
                <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                  Suitable Environments
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {selectedIndustry.environments.map((environment) => (
                    <span
                      key={environment}
                      className="rounded-full border border-[#104B9C]/18 bg-[#f2f7fd] px-4 py-2 text-[14px] font-medium text-[#104B9C]"
                    >
                      {environment}
                    </span>
                  ))}
                </div>
              </div>

              <ActionButton href="/contact">
                Request {selectedIndustry.shortTitle} Staff
              </ActionButton>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Priorities */}
      <section className="bg-[#eef2f5] px-[6vw] py-24 text-black lg:px-[9vw] lg:py-28">
        <div className="grid items-end gap-16 xl:grid-cols-[0.54fr_0.46fr] xl:gap-24">
          <SectionHeading>
            Every industry needs people who understand the environment.
          </SectionHeading>

          <p className="max-w-[540px] text-[20px] leading-[1.45] text-black/60">
            The role may change from one workplace to another, but dependable
            operations consistently rely on hygiene, discipline, conduct, and
            workforce availability.
          </p>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {operatingPriorities.map((item, index) => (
            <article
              key={item.number}
              className={`group min-h-[340px] rounded-[9px] border p-8 transition-all duration-300 hover:-translate-y-2 ${
                index === 1 || index === 3
                  ? "border-[#104B9C] bg-[#104B9C] text-white"
                  : "border-[#104B9C]/12 bg-white text-black"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[13px] font-semibold ${
                    index === 1 || index === 3
                      ? "text-[#d6eaff]"
                      : "text-[#104B9C]"
                  }`}
                >
                  {item.number}
                </span>
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === 1 || index === 3 ? "bg-[#d6eaff]" : "bg-[#104B9C]"
                  }`}
                />
              </div>

              <div className="mt-24">
                <h3 className="text-[31px] font-light leading-[1.02] tracking-[-0.05em]">
                  {item.title}
                </h3>
                <p
                  className={`mt-7 text-[17px] leading-[1.45] ${
                    index === 1 || index === 3
                      ? "text-white/70"
                      : "text-black/58"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Coverage Matrix */}
      <section className="bg-white px-[6vw] py-24 text-black lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.32fr_0.68fr] lg:gap-24">
          <div>
            <p className="font-semibold text-[#104B9C]">Workforce Coverage</p>
            <p className="mt-6 max-w-[310px] text-[17px] leading-[1.45] text-black/55">
              An overview of common workforce categories supported across our
              primary industries.
            </p>
          </div>

          <SectionHeading>
            One manpower partner for multiple operational roles.
          </SectionHeading>
        </div>

        <div className="mt-20 overflow-x-auto rounded-[10px] border border-[#104B9C]/15 bg-[#f7fbff]">
          <div className="min-w-[980px]">
            <div className="grid grid-cols-[1.5fr_repeat(6,1fr)] bg-[#104B9C] text-white">
              <div className="p-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#d6eaff]">
                Workforce Category
              </div>
              {industries.map((industry) => (
                <div
                  key={industry.shortTitle}
                  className="border-l border-white/12 p-5 text-center text-[14px] font-semibold"
                >
                  {industry.shortTitle}
                </div>
              ))}
            </div>

            {coverageMatrix.map((row, rowIndex) => (
              <div
                key={row.role}
                className={`grid grid-cols-[1.5fr_repeat(6,1fr)] border-b border-[#104B9C]/10 last:border-b-0 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-[#eef5fc]"
                }`}
              >
                <div className="p-5 text-[16px] font-medium text-black">
                  {row.role}
                </div>
                {row.coverage.map((available, index) => (
                  <div
                    key={`${row.role}-${industries[index].shortTitle}`}
                    className="flex items-center justify-center border-l border-[#104B9C]/10 p-5"
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-[14px] font-semibold ${
                        available
                          ? "bg-[#104B9C] text-white"
                          : "border border-black/10 bg-white text-black/25"
                      }`}
                    >
                      {available ? "✓" : "–"}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-[14px] leading-[1.4] text-black/45">
          Workforce availability and exact role coverage are confirmed after
          reviewing the site, location, shift, quantity, and service scope.
        </p>
      </section>

      {/* Visual Break */}
      <section className="bg-[#104B9C] px-[6vw] py-16 text-white lg:px-[9vw] lg:py-20">
        <div className="grid overflow-hidden rounded-[12px] border border-white/15 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="relative min-h-[500px] overflow-hidden">
            <img
              src={assets.workforce}
              alt="Platinum workforce for different industries"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#104B9C]/35" />
          </div>

          <div className="relative flex min-h-[500px] flex-col justify-center bg-[#0d438d] p-8 md:p-12 xl:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[length:24px_24px] opacity-20" />
            <div className="relative">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                Flexible Across Industries
              </p>
              <h2 className="mt-7 text-[42px] font-light leading-[0.98] tracking-[-0.06em] md:text-[58px]">
                The workforce plan changes with the workplace.
              </h2>
              <p className="mt-8 text-[19px] leading-[1.45] text-white/70">
                Staffing quantity, role profile, grooming, experience, shift,
                and supervision requirements are aligned with the operating
                environment instead of using one standard approach for every
                client.
              </p>
              <ActionButton href="/contact" light>
                Build Your Workforce Plan
              </ActionButton>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Process */}
      <section className="bg-[#D9EAFD] px-[6vw] py-24 text-black lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 xl:grid-cols-[0.37fr_0.63fr] xl:gap-24">
          <div className="xl:sticky xl:top-32 xl:self-start">
            <p className="font-semibold text-[#104B9C]">Industry Deployment</p>
            <h2 className="mt-8 max-w-[520px] text-[44px] font-light leading-[1] tracking-[-0.06em] md:text-[60px]">
              A staffing process built around site reality.
            </h2>
            <p className="mt-8 max-w-[470px] text-[18px] leading-[1.48] text-black/58">
              We begin with the workplace environment, then define the workforce
              mix and deployment structure needed for dependable daily support.
            </p>
          </div>

          <div className="space-y-5">
            {deploymentSteps.map((item, index) => (
              <article
                key={item.step}
                className="group grid gap-7 rounded-[9px] border border-[#104B9C]/12 bg-white p-7 transition-all duration-300 hover:-translate-x-2 hover:shadow-[0_24px_70px_rgba(16,75,156,0.12)] md:grid-cols-[0.14fr_0.34fr_0.52fr] md:items-start md:p-9"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#104B9C] text-[13px] font-bold text-white">
                  {item.step}
                </span>
                <h3 className="text-[28px] font-light leading-[1.05] tracking-[-0.045em] text-black transition-colors group-hover:text-[#104B9C] md:text-[32px]">
                  {item.title}
                </h3>
                <p className="text-[17px] leading-[1.46] text-black/58">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white px-[6vw] py-24 text-black lg:px-[9vw] lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[0.56fr_0.44fr] lg:gap-20">
          <div>
            <p className="font-semibold text-[#104B9C]">Why Platinum</p>
            <SectionHeading className="mt-8 max-w-[760px]">
              Industry knowledge supported by practical coordination.
            </SectionHeading>

            <div className="mt-14 grid gap-3 sm:grid-cols-2">
              {serviceAdvantages.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-[7px] border border-[#104B9C]/12 bg-[#f7fbff] p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#104B9C] text-[12px] font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-medium text-black/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <ActionButton href="/services">Explore Our Services</ActionButton>
          </div>

          <div className="relative min-h-[650px] overflow-hidden rounded-[10px] bg-[#104B9C] shadow-[0_35px_100px_rgba(16,75,156,0.18)]">
            <img
              src={assets.contactTeam}
              alt="Platinum manpower coordination team"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/92 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                Managed Support
              </p>
              <p className="mt-4 text-[31px] font-light leading-[1.06] tracking-[-0.045em]">
                One team to coordinate workforce requirements across different
                roles and sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#104B9C] px-[6vw] py-24 text-white lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.33fr_0.67fr] lg:gap-24">
          <div>
            <p className="font-semibold text-[#d6eaff]">Industry Questions</p>
            <p className="mt-6 max-w-[310px] text-[17px] leading-[1.45] text-white/58">
              Useful information before planning manpower for your workplace or
              facility.
            </p>
          </div>

          <div>
            <SectionHeading light>Frequently asked questions.</SectionHeading>

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
      <section className="relative overflow-hidden bg-[#D9EAFD] px-[6vw] py-24 text-black lg:px-[9vw] lg:py-28">
        <div className="pointer-events-none absolute -bottom-56 -right-32 h-[620px] w-[620px] rounded-full border border-[#104B9C]/10" />
        <div className="pointer-events-none absolute -bottom-24 right-20 h-[380px] w-[380px] rounded-full border border-[#104B9C]/10" />

        <div className="relative grid items-center gap-16 lg:grid-cols-[0.64fr_0.36fr] lg:gap-20">
          <div>
            <p className="mb-8 font-semibold text-[#104B9C]">
              Plan Your Industry Workforce
            </p>
            <SectionHeading className="max-w-[900px]">
              Share your industry, location, roles, shifts, and required staff
              quantity.
            </SectionHeading>

            <p className="mt-8 max-w-[670px] text-[20px] leading-[1.45] text-black/60">
              Platinum Manpower and Facility Management Services will review the
              requirement and help structure a practical workforce solution for
              your operations.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <ActionButton href="/contact">Request Workforce</ActionButton>

              <a
                href="tel:+919325158710"
                className="mt-8 inline-flex items-center border-b border-black/30 pb-1 text-[15px] font-semibold text-black transition-colors hover:border-[#104B9C] hover:text-[#104B9C]"
              >
                Call 93251 58710
              </a>
            </div>
          </div>

          <div className="rounded-[10px] border border-[#104B9C]/15 bg-white p-8 shadow-[0_25px_80px_rgba(16,75,156,0.12)] md:p-10">
            <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#104B9C]">
              Requirement Checklist
            </p>
            <div className="mt-8 space-y-5">
              {[
                "Industry and workplace type",
                "Site location",
                "Required workforce roles",
                "Number of staff",
                "Shift timing",
                "Expected joining date",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-black/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#104B9C] text-[12px] font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[17px] font-medium text-black/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
