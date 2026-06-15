"use client";

/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

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
    <Magnetic className="mt-7 w-fit" strength={14}>
      <a
        href={href}
        className={`group inline-flex items-stretch font-semibold outline-none ${
          dark ? "text-white" : "text-black"
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#d6eaff] text-black transition-all duration-500 group-hover:rotate-[-10deg] group-hover:scale-105">
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
  const activeSlide = aboutSlides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % aboutSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[420px] overflow-hidden rounded-[10px] bg-[#104B9C] shadow-[0_30px_80px_rgba(16,75,156,0.20)] lg:h-[460px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.title}
          className="absolute inset-0"
          initial={{
            opacity: 0,
            scale: 1.08,
            clipPath: "inset(0 0 100% 0)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            clipPath: "inset(0 0 0% 0)",
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
            clipPath: "inset(100% 0 0 0)",
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 4.2,
              ease: "linear",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#104B9C]/95 via-[#104B9C]/35 to-transparent" />

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-8 text-white"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.18,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Platinum Manpower
            </p>

            <h3 className="text-[34px] font-light leading-none tracking-[-0.05em]">
              {activeSlide.title}
            </h3>

            <p className="mt-4 max-w-[460px] text-[17px] leading-[1.35] text-white/75">
              {activeSlide.text}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute right-6 top-6 z-20 flex gap-2">
        {aboutSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={"Show " + slide.title}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "w-9 bg-white"
                : "w-2.5 bg-white/45 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[#082d5c] font-sans text-[#524f4b]">
      <Navbar />
      <ScrollProgress />

      {/* Fixed page background. All rounded section cards scroll above this layer. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#082d5c]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(214,234,255,0.18),transparent_28%),radial-gradient(circle_at_88%_34%,rgba(255,255,255,0.10),transparent_24%),linear-gradient(145deg,#082d5c_0%,#0b3c78_48%,#061f43_100%)]" />
        <div className="absolute -left-40 top-[12%] h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute -right-44 top-[48%] h-[620px] w-[620px] rounded-full border border-white/[0.08]" />
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative z-10 pb-2 pt-2 sm:pb-3 sm:pt-3 lg:pb-5 lg:pt-5">
        {/* Hero Banner */}
        <section className="relative mx-2 min-h-[calc(100svh-1rem)] w-auto overflow-hidden rounded-[26px] bg-[#104B9C] shadow-[0_32px_100px_rgba(2,18,43,0.32)] sm:mx-3 sm:min-h-[calc(100svh-1.5rem)] md:rounded-[34px] lg:mx-5 lg:min-h-[calc(100svh-2.5rem)]">
        <motion.img
          src={assets.heroBanner}
          alt="Platinum Manpower banner"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#104B9C]/80 via-[#104B9C]/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <FloatingShape
          duration={9}
          distance={18}
          className="absolute -right-32 top-[13%] h-[420px] w-[420px] rounded-full border border-white/20"
        />

        <FloatingShape
          duration={7}
          distance={12}
          delay={0.7}
          className="absolute -right-16 top-[19%] h-[290px] w-[290px] rounded-full border border-white/15"
        />

        <div className="absolute bottom-[7vw] left-[9vw] z-10 max-w-[620px]">
          <motion.p
            className="text-[22px] leading-[1.2] text-white drop-shadow-md md:text-[26px]"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Skilled, verified, and professionally managed manpower for hospitals,
            hotels, shopping malls, airports, offices, and commercial spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Magnetic className="mt-8 w-fit" strength={16}>
              <a
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-[4px] bg-[#d6eaff] px-7 py-3.5 text-[15px] font-semibold text-black transition-all duration-500 hover:bg-white hover:px-9"
              >
                Request Workforce
                <span className="transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute bottom-7 right-[9vw] z-10 hidden items-center gap-3 text-white/70 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
            Scroll
          </span>
          <span className="relative h-14 w-px overflow-hidden bg-white/25">
            <motion.span
              className="absolute left-0 top-0 h-5 w-px bg-white"
              animate={{ y: [-20, 56] }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </motion.div>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative mx-2 mb-3 mt-3 overflow-hidden rounded-[26px] bg-white px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] scroll-mt-24 sm:mx-3 sm:mb-4 sm:mt-4 md:rounded-[34px] lg:mx-5"
        >
        <FloatingShape
          duration={10}
          distance={14}
          className="absolute -left-36 top-28 h-72 w-72 rounded-full bg-[#104B9C]/[0.035]"
        />

        <Reveal>
          <p className="max-w-[280px] font-semibold text-[#104B9C]">
            About Platinum
          </p>
        </Reveal>

        <div className="relative mt-16 grid items-start gap-20 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal direction="right">
            <SectionHeading>
              We help businesses grow stronger with the right people behind
              their operations.
            </SectionHeading>

            <Button href="/contact">Contact Our Team</Button>
          </Reveal>

          <div className="grid gap-8">
            <ScaleReveal delay={0.08}>
              <AboutCarousel />
            </ScaleReveal>

            <Reveal delay={0.12}>
              <p className="max-w-[620px] text-[24px] leading-[1.22] text-[#4d4d4d]">
                At{" "}
                <strong>
                  PLATINUM MANPOWER AND FACILITY MANAGEMENT SERVICES
                </strong>
                , we provide skilled and unskilled manpower solutions for
                hospitals, hotels, shopping malls, and airports with a focus on
                reliability, professionalism, and long-term support.
              </p>
            </Reveal>
          </div>
        </div>

        <StaggerGroup
          className="relative mt-20 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
          stagger={0.14}
        >
          <StaggerItem>
            <StretchCard className="h-full">
              <div className="group h-full rounded-[8px] bg-[#104B9C] p-9 text-white shadow-[0_30px_80px_rgba(16,75,156,0.18)]">
                <h3 className="mb-4 text-[34px] font-medium tracking-[-0.04em]">
                  Our Promise
                </h3>

                <p className="text-[22px] leading-[1.25] text-white/80">
                  Reliable staff. Smooth operations. People-first service.
                </p>

                <div className="mt-10 h-px w-16 bg-white/40 transition-all duration-500 group-hover:w-full" />
              </div>
            </StretchCard>
          </StaggerItem>

          <StaggerItem>
            <StretchCard className="h-full">
              <div className="group h-full rounded-[8px] border border-[#104B9C]/15 bg-[#f7fbff] p-9">
                <p className="text-[20px] leading-[1.35] text-[#4f4f4f]">
                  Our team works closely with clients to understand staffing
                  needs and provide verified manpower that fits their operational
                  requirements.
                </p>

                <div className="mt-10 h-px w-16 bg-[#104B9C]/30 transition-all duration-500 group-hover:w-full" />
              </div>
            </StretchCard>
          </StaggerItem>
        </StaggerGroup>
      </section>

        {/* Services */}
        <section
          id="services"
          className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] scroll-mt-24 sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5"
        >
        <FloatingShape
          duration={8}
          distance={20}
          className="absolute -right-40 -top-32 h-[460px] w-[460px] rounded-full border border-white/10"
        />

        <div className="relative grid gap-20 lg:grid-cols-[1fr_0.78fr] lg:gap-28">
          <ClipReveal>
            <SectionHeading light>Our Services</SectionHeading>
          </ClipReveal>

          <Reveal direction="left" delay={0.08}>
            <p className="max-w-[520px] text-[20px] leading-[1.24] text-white/75">
              We provide dependable manpower and facility support services for
              daily operations, specialized staffing, housekeeping, and
              long-term workforce management.
            </p>

            <Button href="/services" dark>
              Explore Services
            </Button>
          </Reveal>
        </div>

        <StaggerGroup
          className="relative mt-24 grid gap-5 md:grid-cols-2 xl:grid-cols-5"
          delayChildren={0.1}
          stagger={0.08}
        >
          {services.map((service, index) => (
            <StaggerItem key={service.title} className="h-full">
              <StretchCard className="h-full">
                <article className="group flex min-h-[330px] h-full flex-col justify-between overflow-hidden rounded-[8px] border border-white/15 bg-white p-7 text-black shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                  <div>
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#104B9C] text-sm font-bold text-white transition-all duration-500 group-hover:rotate-[-10deg] group-hover:scale-110">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-[24px] font-semibold leading-[1.1] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#104B9C]">
                      {service.title}
                    </h3>
                  </div>

                  <div>
                    <p className="mt-8 text-[16px] leading-[1.35] text-[#4f4f4f]">
                      {service.text}
                    </p>

                    <div className="mt-7 h-[2px] w-10 bg-[#104B9C]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#104B9C]" />
                  </div>
                </article>
              </StretchCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

        {/* Staffing Approach */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[9vw] py-28 text-[#104B9C] shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
        <FloatingShape
          duration={9}
          distance={16}
          className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-[#104B9C]/[0.035]"
        />

        <div className="relative grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
          <Reveal direction="right">
            <p className="font-semibold">
              Our Staffing Approach
              <br />
              Structured. Simple. Reliable.
            </p>
          </Reveal>

          <ClipReveal delay={0.06}>
            <SectionHeading>
              From requirement understanding to ongoing support, our process is
              built for smooth manpower deployment.
            </SectionHeading>
          </ClipReveal>
        </div>

        <StaggerGroup
          className="relative mt-24 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          stagger={0.12}
        >
          {approach.map((item, index) => (
            <StaggerItem key={item.step} className="h-full">
              <StretchCard className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[8px] border border-[#104B9C]/15 bg-[#f7fbff] p-8">
                  <span className="mb-14 flex h-14 w-14 items-center justify-center rounded-full bg-[#104B9C] text-sm font-bold text-white transition-all duration-500 group-hover:scale-110">
                    {item.step}
                  </span>

                  <h3 className="text-[28px] font-semibold leading-[1.08] tracking-[-0.05em] text-black">
                    {item.title}
                  </h3>

                  <p className="mt-8 text-[17px] leading-[1.35] text-[#4f4f4f]">
                    {item.text}
                  </p>

                  {index < approach.length - 1 ? (
                    <span className="absolute right-6 top-9 hidden text-[25px] text-[#104B9C]/25 transition-transform duration-500 group-hover:translate-x-2 xl:block">
                      →
                    </span>
                  ) : null}

                  <span className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#104B9C] transition-all duration-500 group-hover:w-full" />
                </article>
              </StretchCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

        {/* Why Choose */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
        <FloatingShape
          duration={11}
          distance={22}
          className="absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full border border-white/10"
        />

        <div className="relative mb-20 grid gap-20 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal direction="right">
            <p className="font-semibold">
              Why Choose Platinum?
              <br />
              Skilled. Verified. Managed.
            </p>
          </Reveal>

          <ClipReveal delay={0.08}>
            <SectionHeading light>
              We support businesses with trained manpower, quick replacement,
              verified staff, and professional coordination.
            </SectionHeading>
          </ClipReveal>
        </div>

        <StaggerGroup
          className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          stagger={0.09}
        >
          {whyChoose.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <StretchCard className="h-full" activeScale={1.012}>
                <article className="group flex min-h-[280px] h-full flex-col justify-between overflow-hidden rounded-[8px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white hover:text-black">
                  <div>
                    <p className="mb-12 flex items-center gap-3 text-lg">
                      <span className="h-3 w-3 rounded-full bg-[#d6eaff] transition-all duration-500 group-hover:scale-[1.8] group-hover:bg-[#104B9C]" />
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="text-[30px] font-light leading-[1.08] tracking-[-0.05em]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-10 text-[18px] leading-[1.32] opacity-75">
                    {item.text}
                  </p>

                  <span className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#d6eaff] transition-all duration-500 group-hover:w-full group-hover:bg-[#104B9C]" />
                </article>
              </StretchCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

        {/* Industries */}
        <section
          id="industries"
          className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] scroll-mt-24 sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5"
        >
        <div className="grid gap-20 lg:grid-cols-[1fr_0.78fr] lg:gap-28">
          <ClipReveal>
            <SectionHeading>Industries We Serve</SectionHeading>
          </ClipReveal>

          <Reveal direction="left" delay={0.08}>
            <p className="max-w-[520px] text-[20px] leading-[1.24] text-[#4f4f4f]">
              We provide reliable manpower support for industries where
              cleanliness, discipline, responsibility, and operational
              continuity matter every day.
            </p>
          </Reveal>
        </div>

        <StaggerGroup
          className="mt-24 grid gap-5 lg:grid-cols-2"
          delayChildren={0.08}
          stagger={0.12}
        >
          {industries.map((industry) => (
            <StaggerItem key={industry.title} className="h-full">
              <StretchCard className="h-full" activeScale={1.008}>
                <article className="group grid h-full overflow-hidden rounded-[8px] border border-[#104B9C]/10 bg-[#f7fbff] shadow-[0_24px_70px_rgba(16,75,156,0.10)] lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-[360px] overflow-hidden">
                    <motion.img
                      src={industry.image}
                      alt={industry.title + " manpower support"}
                      className="absolute inset-0 h-full w-full object-cover"
                      whileHover={{ scale: 1.07 }}
                      transition={{
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div className="p-8">
                    <h3 className="text-[42px] font-light leading-[1] tracking-[-0.06em] text-black transition-colors duration-300 group-hover:text-[#104B9C]">
                      {industry.title}
                    </h3>

                    <div className="my-6 h-[3px] w-16 bg-[#104B9C] transition-all duration-500 group-hover:w-full" />

                    <p className="text-[18px] font-medium leading-[1.34] text-[#1f2937]">
                      {industry.text}
                    </p>

                    <ul className="mt-8 grid gap-3 text-[17px] text-[#4f4f4f]">
                      {industry.points.map((point, pointIndex) => (
                        <motion.li
                          key={point}
                          className="flex gap-3"
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: pointIndex * 0.06,
                            duration: 0.45,
                          }}
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#104B9C]" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StretchCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

        {/* Workforce Support */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
        <FloatingShape
          duration={8}
          distance={18}
          className="absolute -left-32 top-12 h-80 w-80 rounded-full border border-white/10"
        />

        <div className="relative grid items-center gap-20 lg:grid-cols-[0.4fr_0.6fr]">
          <Reveal direction="right">
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
          </Reveal>

          <ScaleReveal delay={0.1}>
            <ParallaxMedia
              src={assets.workforce}
              alt="Verified workforce team"
              distance={55}
              className="h-[560px] rounded-[10px] shadow-[0_35px_90px_rgba(0,0,0,0.24)] md:h-[640px]"
              overlayClassName="bg-gradient-to-t from-[#061b38]/20 to-transparent"
            >
              <div className="absolute bottom-6 right-6 z-10 rounded-[6px] border border-white/20 bg-white/10 px-5 py-4 text-white backdrop-blur-md">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#d6eaff]">
                  Workforce Support
                </p>
                <p className="mt-1 text-[18px] font-medium">
                  Reliable. Managed. Ready.
                </p>
              </div>
            </ParallaxMedia>
          </ScaleReveal>
        </div>
      </section>

        {/* Company Team */}
        <section
          id="team"
          className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] scroll-mt-24 sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5"
        >
        <div className="grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
          <Reveal direction="right">
            <p className="font-semibold text-[#104B9C]">
              Our Team
              <br />
              People Behind Platinum
            </p>
          </Reveal>

          <ClipReveal delay={0.08}>
            <SectionHeading>
              A dedicated team managing client coordination, staffing
              requirements, and reliable manpower deployment.
            </SectionHeading>
          </ClipReveal>
        </div>

        <StaggerGroup
          className="mt-24 grid gap-5 md:grid-cols-2"
          delayChildren={0.08}
          stagger={0.14}
        >
          {companyTeam.map((member) => (
            <StaggerItem key={member.name} className="h-full">
              <StretchCard className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[8px] border border-[#104B9C]/15 bg-[#f7fbff] p-10">
                  <div className="mb-14 flex h-20 w-20 items-center justify-center rounded-full bg-[#104B9C] text-[24px] font-semibold text-white transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                    {member.initials}
                  </div>

                  <h3 className="text-[42px] font-light uppercase leading-[1] tracking-[-0.06em] text-black transition-colors duration-300 group-hover:text-[#104B9C]">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-[22px] font-medium text-[#104B9C]">
                    {member.role}
                  </p>

                  <div className="mt-10 space-y-5">
                    <a
                      href={
                        "tel:+91" +
                        member.phone.replaceAll(" ", "").split("|")[0]
                      }
                      className="block text-[24px] font-semibold text-black transition hover:text-[#104B9C]"
                    >
                      {member.phone}
                    </a>

                    <a
                      href={"mailto:" + member.email}
                      className="block break-words text-[20px] font-medium text-[#4f4f4f] transition hover:text-[#104B9C]"
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

        {/* Contact */}
        <section
          id="contact"
          className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] scroll-mt-24 sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5"
        >
        <FloatingShape
          duration={10}
          distance={20}
          className="absolute -right-24 top-10 h-80 w-80 rounded-full border border-white/10"
        />

        <div className="relative grid items-start gap-20 lg:grid-cols-[0.38fr_0.62fr]">
          <Reveal direction="right">
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
          </Reveal>

          <StaggerGroup className="grid gap-5" stagger={0.14}>
            <StaggerItem>
              <StretchCard>
                <article className="group rounded-[8px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white/15">
                  <h3 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                    Contact Details
                  </h3>

                  <div className="mt-8 space-y-5">
                    <a
                      href="tel:+919325158710"
                      className="block text-[24px] font-semibold text-white transition-all duration-300 hover:translate-x-2 hover:opacity-75"
                    >
                      93251 58710
                    </a>

                    <a
                      href="mailto:contact@platinummanpowerservices.com"
                      className="block break-words text-[18px] font-medium text-white/75 transition-all duration-300 hover:translate-x-2 hover:text-white sm:text-[20px]"
                    >
                      contact@platinummanpowerservices.com
                    </a>
                  </div>
                </article>
              </StretchCard>
            </StaggerItem>

            <StaggerItem>
              <StretchCard>
                <article className="group rounded-[8px] border border-white/15 bg-white p-8 text-black">
                  <h3 className="text-[24px] font-semibold transition-colors duration-300 group-hover:text-[#104B9C]">
                    Office Address
                  </h3>

                  <p className="mt-5 max-w-[640px] text-[20px] leading-[1.35] text-[#4f4f4f]">
                    Row House no 2, Jai Maa Ashapura Society, Sinnar Phata,
                    Nashik, 422101
                  </p>

                  <div className="mt-8 h-[2px] w-12 bg-[#104B9C]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#104B9C]" />
                </article>
              </StretchCard>
            </StaggerItem>
          </StaggerGroup>
        </div>
        </section>

        <div className="mx-2 overflow-hidden rounded-[26px] shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 md:rounded-[34px] lg:mx-5">
          <Footer />
        </div>
      </div>
    </main>
  );
}
