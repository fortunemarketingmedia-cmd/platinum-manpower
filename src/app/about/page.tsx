"use client";

/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import {
  ClipReveal,
  FloatingShape,
  Magnetic,
  ParallaxMedia,
  Reveal,
  ScaleReveal,
  ScrollProgress,
  StaggerGroup,
  StaggerItem,
  StretchCard,
} from "@/components/motion/MotionEffects";

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
    <Magnetic className="mt-8 w-fit" strength={14}>
      <a
        href={href}
        className={`group inline-flex items-stretch font-semibold outline-none ${
          dark ? "text-white" : "text-black"
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#d6eaff] text-black transition-all duration-500 group-hover:-rotate-12 group-hover:scale-105">
          ↳
        </span>

        <span
          className={`ml-1 flex h-12 items-center justify-center rounded-[4px] border px-5 transition-all duration-500 group-hover:px-7 ${
            dark
              ? "border-white/35 group-hover:border-white/75 group-hover:bg-white/10"
              : "border-black/25 group-hover:border-black/60 group-hover:bg-black/[0.03]"
          }`}
        >
          {children}
        </span>
      </a>
    </Magnetic>
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
    <motion.div
      className="border-t border-black/10"
      layout
      transition={{
        layout: {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left text-[19px] font-medium text-black transition-colors duration-300 hover:text-[#104B9C]"
      >
        <span>{question}</span>

        <motion.span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-[25px] font-light transition-colors duration-300 group-hover:border-[#104B9C]/30 group-hover:bg-[#104B9C] group-hover:text-white"
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {open ? "−" : "+"}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="answer"
            initial={{
              height: 0,
              opacity: 0,
              y: -10,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              y: 0,
            }}
            exit={{
              height: 0,
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <p className="max-w-[760px] pb-8 text-[18px] leading-[1.45] text-[#4f4f4f]">
              {answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AboutPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const selectedIndustry = industries[activeIndustry];

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-[#524f4b]">
      <Navbar />
      <ScrollProgress />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#D9EAFD] px-[9vw] pb-20 pt-[132px] text-white">
        <FloatingShape
          duration={10}
          distance={18}
          className="absolute -right-40 top-14 h-[520px] w-[520px] rounded-full border border-[#104B9C]/10"
        />

        <FloatingShape
          duration={8}
          distance={13}
          delay={0.6}
          className="absolute -right-20 top-32 h-[360px] w-[360px] rounded-full border border-[#104B9C]/10"
        />

        <div className="relative grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{
              opacity: 0,
              y: 48,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-7 text-[15px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
              About Platinum Manpower
            </p>

            <h1 className="max-w-[720px] text-[48px] font-light leading-[0.98] tracking-[-0.065em] text-black md:text-[68px] lg:text-[82px] xl:text-[92px]">
              Reliable workforce support.
            </h1>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:pb-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.25,
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {[
              "We provide skilled and unskilled manpower solutions for hospitals, hotels, shopping malls, airports, offices, and commercial spaces.",
              "Our focus is simple: reliable staff, smooth operations, professional coordination, and long-term client support.",
            ].map((text) => (
              <motion.p
                key={text}
                className="max-w-[360px] text-[18px] leading-[1.42] text-black/70"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 28,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mt-14 overflow-hidden rounded-[10px] border border-white/15 bg-white/10 shadow-[0_35px_100px_rgba(0,0,0,0.18)]"
          initial={{
            opacity: 0,
            y: 42,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.img
            src={assets.hero}
            alt="Platinum manpower banner"
            className="h-[300px] w-full object-cover md:h-[360px] xl:h-[420px]"
            initial={{
              scale: 1.08,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#104B9C]/10 via-transparent to-[#104B9C]/10" />
        </motion.div>
      </section>

      {/* Intro Visual */}
      <section className="relative overflow-hidden bg-[#f1f5f8] px-[9vw] py-28 text-black">
        <FloatingShape
          duration={9}
          distance={16}
          className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#104B9C]/[0.04]"
        />

        <div className="relative grid items-center gap-20 lg:grid-cols-[0.45fr_0.55fr]">
          <Reveal direction="right">
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
          </Reveal>

          <ScaleReveal delay={0.1}>
            <div className="relative">
              <FloatingShape
                duration={7}
                distance={12}
                className="absolute -bottom-8 -left-8 h-52 w-52 rounded-full bg-[#104B9C]/10"
              />

              <div className="relative overflow-hidden rounded-[10px] shadow-[0_35px_100px_rgba(16,75,156,0.18)]">
                <motion.img
                  src={assets.staffGroup}
                  alt="Platinum manpower team"
                  className="h-[620px] w-full object-cover"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* Performance Standards */}
      <section className="relative overflow-hidden bg-[#104B9C] px-[9vw] py-28 text-white">
        <FloatingShape
          duration={11}
          distance={20}
          className="absolute -right-36 top-24 h-[430px] w-[430px] rounded-full border border-white/10"
        />

        <ClipReveal>
          <SectionHeading light>
            Built for reliable staffing and managed workplace support.
          </SectionHeading>
        </ClipReveal>

        <div className="relative mt-24 grid items-start gap-20 lg:grid-cols-[0.95fr_1.05fr]">
          <ScaleReveal>
            <div className="relative min-h-[640px] overflow-hidden rounded-[8px] border border-white/15 bg-white/10 p-10">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[length:28px_28px] opacity-30" />

              <ParallaxMedia
                src={assets.workforce}
                alt="Platinum workforce"
                distance={48}
                className="relative mx-auto h-[560px] w-full rounded-[6px]"
              />
            </div>
          </ScaleReveal>

          <Reveal direction="left" delay={0.08}>
            <h3 className="mb-8 text-[38px] font-light tracking-[-0.055em]">
              Key Standards
            </h3>

            <StaggerGroup
              className="border-t border-white/25"
              delayChildren={0.08}
              stagger={0.08}
            >
              {keyStats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    className="group grid grid-cols-[0.9fr_1.1fr] gap-8 border-b border-white/25 py-6"
                    whileHover={{
                      x: 8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    }}
                  >
                    <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/55 transition-colors duration-300 group-hover:text-white/80">
                      {stat.label}
                    </p>

                    <p className="text-right text-[24px] font-light leading-[1.1] tracking-[-0.04em] text-white md:text-[30px]">
                      {stat.value}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      {/* Strength Callouts */}
      <section className="relative overflow-hidden bg-[#e9edf2] px-[9vw] py-28 text-black">
        <FloatingShape
          duration={9}
          distance={15}
          className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-[#104B9C]/[0.04]"
        />

        <div className="relative grid items-center gap-16 lg:grid-cols-[0.33fr_0.34fr_0.33fr]">
          <StaggerGroup className="grid gap-24" stagger={0.15}>
            {standards.slice(0, 2).map((item) => (
              <StaggerItem key={item.title}>
                <StretchCard>
                  <article className="group rounded-[8px] p-3 transition-colors duration-300 hover:bg-white/70">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-[#104B9C] transition-transform duration-500 group-hover:scale-[1.7]" />
                      <h3 className="text-[22px] font-medium">{item.title}</h3>
                    </div>

                    <p className="text-[18px] leading-[1.4] text-[#4f4f4f]">
                      {item.text}
                    </p>
                  </article>
                </StretchCard>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <ScaleReveal delay={0.08}>
            <div className="overflow-hidden rounded-[8px] shadow-[0_35px_90px_rgba(0,0,0,0.12)]">
              <motion.img
                src={assets.contactTeam}
                alt="Managed workforce"
                className="mx-auto h-[720px] w-full object-cover"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </ScaleReveal>

          <StaggerGroup className="grid gap-24" stagger={0.15}>
            {standards.slice(2).map((item) => (
              <StaggerItem key={item.title}>
                <StretchCard>
                  <article className="group rounded-[8px] p-3 transition-colors duration-300 hover:bg-white/70">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-[#104B9C] transition-transform duration-500 group-hover:scale-[1.7]" />
                      <h3 className="text-[22px] font-medium">{item.title}</h3>
                    </div>

                    <p className="text-[18px] leading-[1.4] text-[#4f4f4f]">
                      {item.text}
                    </p>
                  </article>
                </StretchCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

{/* Service Cards */}
<section className="relative overflow-hidden bg-white px-[9vw] py-28 text-black">
  <div className="grid gap-20 lg:grid-cols-[0.36fr_0.64fr]">
    <Reveal direction="right">
      <p className="font-semibold text-[#104B9C]">
        Workforce Capabilities
      </p>
    </Reveal>

    <ClipReveal delay={0.06}>
      <SectionHeading>
        Practical staffing support for daily operations.
      </SectionHeading>
    </ClipReveal>
  </div>

  <StaggerGroup
    className="mt-24 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
    delayChildren={0.08}
    stagger={0.12}
  >
    {serviceCards.map((card) => (
      <StaggerItem
        key={card.title}
        className="h-full min-w-0"
      >
        <StretchCard
          className="h-full"
          activeScale={1.006}
        >
          <article className="group flex h-full flex-col rounded-[10px] border border-[#104B9C]/12 bg-[#f7fbff] p-5 transition-shadow duration-500 hover:shadow-[0_28px_70px_rgba(16,75,156,0.14)] md:p-6">
            <div className="overflow-hidden rounded-[8px]">
              <motion.img
                src={card.image}
                alt={card.title}
                className="h-[360px] w-full object-cover md:h-[390px] xl:h-[420px]"
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            <div className="flex flex-1 flex-col">
              <h3 className="mt-8 text-[26px] font-medium tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#104B9C]">
                {card.title}
              </h3>

              <p className="mt-5 flex-1 text-[18px] leading-[1.42] text-[#4f4f4f]">
                {card.text}
              </p>

              <div className="mt-8 h-[2px] w-12 bg-[#104B9C]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#104B9C]" />
            </div>
          </article>
        </StretchCard>
      </StaggerItem>
    ))}
  </StaggerGroup>
</section>

      {/* Process Timeline */}
      <section className="relative overflow-hidden bg-white px-[9vw] py-28 text-black">
        <FloatingShape
          duration={9}
          distance={14}
          className="absolute -right-28 bottom-8 h-72 w-72 rounded-full bg-[#104B9C]/[0.035]"
        />

        <div className="relative grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
          <Reveal direction="right">
            <p className="font-semibold text-[#104B9C]">
              Staffing Process
              <br />
              Structured Support
            </p>
          </Reveal>

          <ClipReveal delay={0.06}>
            <SectionHeading>
              A clear process from requirement understanding to ongoing support.
            </SectionHeading>
          </ClipReveal>
        </div>

        <StaggerGroup
          className="relative mt-24 grid gap-8 lg:grid-cols-4"
          stagger={0.12}
        >
          {process.map((item, index) => (
            <StaggerItem key={item.year} className="h-full">
              <StretchCard className="h-full">
                <article className="group relative h-full rounded-[8px] p-2">
                  <div className="mb-7 inline-flex rounded-[4px] border border-black/15 px-5 py-3 text-[18px] font-medium transition-all duration-500 group-hover:border-[#104B9C] group-hover:bg-[#104B9C] group-hover:text-white">
                    {item.year}
                  </div>

                  <div className="mb-8 h-px w-full bg-[repeating-linear-gradient(90deg,rgba(16,75,156,0.35)_0_2px,transparent_2px_14px)]" />

                  <h3 className="text-[28px] font-light leading-[1.08] tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#104B9C]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[18px] leading-[1.38] text-[#4f4f4f]">
                    {item.text}
                  </p>

                  {index < process.length - 1 ? (
                    <span className="absolute right-0 top-5 hidden text-[25px] text-[#104B9C]/25 transition-transform duration-500 group-hover:translate-x-2 lg:block">
                      →
                    </span>
                  ) : null}
                </article>
              </StretchCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Industries Carousel */}
      <section className="relative overflow-hidden bg-[#104B9C] px-[9vw] py-28 text-white">
        <FloatingShape
          duration={11}
          distance={20}
          className="absolute -left-32 top-20 h-[390px] w-[390px] rounded-full border border-white/10"
        />

        <div className="relative grid gap-20 lg:grid-cols-[0.34fr_0.66fr]">
          <Reveal direction="right">
            <p className="font-semibold text-[#d6eaff]">
              Industries We Support
            </p>
          </Reveal>

          <ClipReveal delay={0.06}>
            <SectionHeading light>
              Manpower solutions for workplaces where discipline, hygiene, and
              responsibility matter.
            </SectionHeading>
          </ClipReveal>
        </div>

        <ScaleReveal delay={0.08}>
          <div className="relative mt-24 grid overflow-hidden rounded-[12px] border border-white/15 bg-white/10 backdrop-blur-sm lg:grid-cols-[0.42fr_0.58fr]">
            <div className="border-b border-white/15 lg:border-b-0 lg:border-r">
              {industries.map((industry, index) => {
                const isActive = activeIndustry === index;

                return (
                  <motion.button
                    key={industry.title}
                    type="button"
                    onClick={() => setActiveIndustry(index)}
                    whileHover={{
                      x: isActive ? 0 : 6,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    className={`group flex w-full items-center justify-between gap-8 border-b border-white/15 px-7 py-7 text-left transition-colors duration-500 last:border-b-0 ${
                      isActive
                        ? "bg-white text-[#104B9C]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="flex items-center gap-5">
                      <motion.span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold ${
                          isActive
                            ? "bg-[#104B9C] text-white"
                            : "bg-white/10 text-white"
                        }`}
                        animate={{
                          rotate: isActive ? -8 : 0,
                          scale: isActive ? 1.08 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 20,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>

                      <span className="text-[26px] font-light leading-none tracking-[-0.05em] md:text-[34px]">
                        {industry.title}
                      </span>
                    </span>

                    <span
                      className={`text-[28px] font-light transition-all duration-500 ${
                        isActive
                          ? "translate-x-1 text-[#104B9C]"
                          : "text-white/60 group-hover:translate-x-2 group-hover:text-white"
                      }`}
                    >
                      →
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <div className="relative min-h-[620px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndustry.title}
                  className="absolute inset-0"
                  initial={{
                    opacity: 0,
                    scale: 1.06,
                    x: 35,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.02,
                    x: -25,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.img
                    src={selectedIndustry.image}
                    alt={selectedIndustry.title + " manpower support"}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{
                      scale: 1.08,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/95 via-[#104B9C]/45 to-transparent" />

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="mb-5 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                      Industry Support
                    </p>

                    <h3 className="max-w-[620px] text-[46px] font-light leading-[0.95] tracking-[-0.06em] text-white md:text-[66px]">
                      {selectedIndustry.title}
                    </h3>

                    <p className="mt-7 max-w-[620px] text-[20px] leading-[1.38] text-white/80">
                      {selectedIndustry.text}
                    </p>

                    <motion.div
                      className="mt-9 flex flex-wrap gap-3"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            delayChildren: 0.25,
                            staggerChildren: 0.06,
                          },
                        },
                      }}
                    >
                      {selectedIndustry.points.map((point) => (
                        <motion.span
                          key={point}
                          className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[14px] font-medium text-white backdrop-blur-sm"
                          variants={{
                            hidden: {
                              opacity: 0,
                              y: 16,
                            },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.45,
                              },
                            },
                          }}
                        >
                          {point}
                        </motion.span>
                      ))}
                    </motion.div>

                    <Magnetic className="mt-10 w-fit" strength={14}>
                      <a
                        href="/contact"
                        className="group inline-flex items-center gap-3 rounded-[4px] bg-[#d6eaff] px-6 py-3 text-[15px] font-semibold text-black transition-all duration-500 hover:bg-white hover:px-8"
                      >
                        Request Workforce
                        <span className="transition-transform duration-500 group-hover:translate-x-2">
                          →
                        </span>
                      </a>
                    </Magnetic>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScaleReveal>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden bg-white px-[9vw] py-28 text-black">
        <div className="grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
          <Reveal direction="right">
            <p className="font-semibold text-[#104B9C]">
              Company Team
              <br />
              People Behind Platinum
            </p>
          </Reveal>

          <ClipReveal delay={0.06}>
            <SectionHeading>
              A dedicated team managing client coordination and reliable manpower
              deployment.
            </SectionHeading>
          </ClipReveal>
        </div>

        <StaggerGroup
          className="mt-24 grid gap-5 md:grid-cols-2"
          stagger={0.14}
        >
          {team.map((member) => (
            <StaggerItem key={member.name} className="h-full">
              <StretchCard className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[8px] border border-[#104B9C]/15 bg-[#f7fbff] p-10">
                  <div className="mb-14 flex h-20 w-20 items-center justify-center rounded-full bg-[#104B9C] text-[24px] font-semibold text-white transition-all duration-500 group-hover:-rotate-8 group-hover:scale-110">
                    {member.initials}
                  </div>

                  <h3 className="text-[42px] font-light uppercase leading-[1] tracking-[-0.06em] transition-colors duration-300 group-hover:text-[#104B9C]">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-[22px] font-medium text-[#104B9C]">
                    {member.role}
                  </p>

                  <div className="mt-10 space-y-5">
                    <a
                      href={"tel:+91" + member.call}
                      className="block text-[24px] font-semibold text-black transition-all duration-300 hover:translate-x-2 hover:text-[#104B9C]"
                    >
                      {member.phone}
                    </a>

                    <a
                      href={"mailto:" + member.email}
                      className="block break-words text-[20px] font-medium text-[#4f4f4f] transition-all duration-300 hover:translate-x-2 hover:text-[#104B9C]"
                    >
                      {member.email}
                    </a>
                  </div>

                  <span className="absolute bottom-0 left-0 h-[5px] w-0 bg-[#104B9C] transition-all duration-500 group-hover:w-full" />
                </article>
              </StretchCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-white px-[9vw] py-28 text-black">
        <FloatingShape
          duration={9}
          distance={14}
          className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-[#104B9C]/[0.035]"
        />

        <div className="relative grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
          <Reveal direction="right">
            <p className="font-semibold text-[#104B9C]">Common Questions</p>
          </Reveal>

          <div>
            <ClipReveal delay={0.06}>
              <SectionHeading>Facts About Our Services</SectionHeading>
            </ClipReveal>

            <StaggerGroup className="mt-16" stagger={0.08}>
              {faqs.map((faq) => (
                <StaggerItem key={faq.question}>
                  <FaqItem
                    question={faq.question}
                    answer={faq.answer}
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#104B9C] px-[9vw] py-28 text-white">
        <FloatingShape
          duration={10}
          distance={18}
          className="absolute -left-28 bottom-10 h-80 w-80 rounded-full border border-white/10"
        />

        <div className="relative grid items-center gap-20 lg:grid-cols-[0.45fr_0.55fr]">
          <Reveal direction="right">
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
          </Reveal>

          <ScaleReveal delay={0.1}>
            <ParallaxMedia
              src={assets.contactTeam}
              alt="Platinum contact team"
              distance={52}
              className="h-[560px] rounded-[8px] shadow-[0_35px_100px_rgba(0,0,0,0.22)]"
              overlayClassName="bg-gradient-to-t from-[#061b38]/20 to-transparent"
            />
          </ScaleReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
