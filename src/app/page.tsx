import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />

      <HeroBanner />  
{/* WHY CHOOSE US */}
<section className="bg-[#f7f8fa] py-32 overflow-hidden">
  <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
    <div className="grid lg:grid-cols-2 gap-20 items-start">

      {/* LEFT */}
      <div className="flex flex-col justify-between h-full">

        <div>
          <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-8">
            Why Choose Us
          </p>

          <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[700px] mb-12">
            Trusted Workforce Solutions For Every Industry
          </h2>

          <p className="text-neutral-500 text-lg leading-[2] max-w-[650px]">
            We deliver dependable manpower, staffing, payroll management,
            facility support, and workforce solutions that help organizations
            improve productivity, maintain compliance, and scale operations
            efficiently.
          </p>
        </div>

        {/* EXPERIENCE BLOCK */}
        <div className="flex items-center gap-8 mt-24">

          <div className="w-[180px] h-[180px] border-[5px] border-[#0D5EA8] flex items-center justify-center">
            <span className="text-8xl font-bold">
              15
            </span>
          </div>

          <div>
            <h3 className="text-4xl leading-tight">
              Years
              <br />
              Industry
              <br />
              Experience
            </h3>
          </div>

        </div>

      </div>     

      {/* RIGHT */}
      <div className="relative flex justify-center">

        {/* Dot Pattern */}
        <div className="absolute -bottom-14 -left-14 w-[500px] h-[350px] opacity-15 bg-[radial-gradient(#0D5EA8_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Image */}
        <img
          src="/why-choose-us.jpg"
          alt="Platinum Manpower Workforce Solutions"
          className="relative z-10 w-full max-w-[650px] h-[900px] object-cover"
        />

        {/* Accent Bar */}
        <div className="absolute top-10 -right-10 w-3 h-48 bg-[#0D5EA8]" />

      </div>

    </div>
  </div>
</section>

     {/* INDUSTRIES WE SERVE */}
<section className="py-36 bg-white">
  <div className="max-w-[1600px] mx-auto px-8 lg:px-14">

    {/* Header */}
    <div className="mb-24">
      {/* Premium accent line */}
      <div className="w-20 h-[3px] bg-[#0D5EA8] mb-8" />
      
      <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">
        Industries We Serve
      </p>

      <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[900px]">
        Providing workforce solutions across diverse industries.
      </h2>
    </div>

    {/* Industries Grid */}
    <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16">

      {[
        {
          no: "01",
          title: "Construction",
          desc: "Skilled labour, supervisors, engineers and project workforce."
        },
        {
          no: "02",
          title: "Manufacturing",
          desc: "Production staff, machine operators and plant workforce."
        },
        {
          no: "03",
          title: "Logistics",
          desc: "Warehouse, supply chain and transportation manpower."
        },
        {
          no: "04",
          title: "Healthcare",
          desc: "Medical support staff, technicians and administration."
        },
        {
          no: "05",
          title: "Hospitality",
          desc: "Hotels, restaurants, facilities and service workforce."
        },
        {
          no: "06",
          title: "Retail",
          desc: "Sales teams, customer support and store operations."
        }
      ].map((industry) => (
        <div
          key={industry.no}
          className="group border-b border-neutral-200 pb-10 cursor-pointer"
        >
          <div className="flex gap-8">

            <span className="text-neutral-300 text-5xl font-semibold min-w-[90px] transition-all duration-500 group-hover:text-[#0D5EA8]">
              {industry.no}
            </span>

            <div>
              <h3 className="text-4xl lg:text-5xl font-medium mb-4 transition-all duration-500 group-hover:translate-x-2">
                {industry.title}
              </h3>

              <p className="text-neutral-500 text-lg leading-relaxed max-w-[450px]">
                {industry.desc}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>

{/* SERVICES */}
<section className="py-36 bg-[#f7f8fa]">
  <div className="max-w-[1600px] mx-auto px-8 lg:px-14">

    {/* Heading */}
    <div className="mb-24">
      {/* Premium accent line */}
      <div className="w-20 h-[3px] bg-[#0D5EA8] mb-8" />
      
      <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">
        Service Snapshot
      </p>

      <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[900px]">
        Workforce solutions tailored for every business need.
      </h2>
    </div>

    {/* Cards */}
    <div className="grid lg:grid-cols-3 gap-8">

      {[
        {
          number: "01",
          title: "Recruitment & Staffing",
          description:
            "Permanent, temporary and project-based hiring solutions."
        },
        {
          number: "02",
          title: "Contract Workforce",
          description:
            "Flexible workforce deployment for operational scalability."
        },
        {
          number: "03",
          title: "Payroll Management",
          description:
            "Accurate payroll processing and statutory compliance."
        },
        {
          number: "04",
          title: "HR Outsourcing",
          description:
            "End-to-end HR administration and employee management."
        },
        {
          number: "05",
          title: "Executive Search",
          description:
            "Leadership hiring and specialized talent acquisition."
        },
        {
          number: "06",
          title: "Compliance Support",
          description:
            "Labour law compliance, documentation and workforce governance."
        }
      ].map((service) => (
        <div
          key={service.number}
          className="group bg-white p-12 border border-neutral-200 hover:border-[#0D5EA8] transition-all duration-500 min-h-[320px] flex flex-col justify-between"
        >
          <span className="text-6xl font-semibold text-neutral-200 group-hover:text-[#0D5EA8] transition-all duration-500">
            {service.number}
          </span>

          <div>
            <h3 className="text-3xl font-medium mb-5">
              {service.title}
            </h3>

            <p className="text-neutral-500 leading-8">
              {service.description}
            </p>
          </div>

          <div className="flex justify-end">
            <span className="text-3xl text-[#0D5EA8] group-hover:translate-x-2 transition-all duration-500">
              →
            </span>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* STATISTICS */}
<section className="py-36 bg-white">
  <div className="max-w-[1600px] mx-auto px-8 lg:px-14">

    {/* Heading */}
    <div className="mb-20">
      {/* Premium accent line */}
      <div className="w-20 h-[3px] bg-[#0D5EA8] mb-8" />
      
      <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">
        Our Impact
      </p>

      <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[900px]">
        Trusted workforce partner for businesses across industries.
      </h2>
    </div>

    {/* Image */}
    <div className="relative">

      <img
        src="/statistics-banner.jpg"
        alt="Workforce Statistics"
        className="w-full h-[700px] object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* Floating Stats Card */}
      <div className="absolute left-1/2 bottom-[-80px] -translate-x-1/2 w-[95%] lg:w-[90%] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

        <div className="grid grid-cols-2 lg:grid-cols-4">

          <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-neutral-200">
            <h3 className="text-5xl lg:text-7xl font-semibold leading-none">
              5000+
            </h3>

            <p className="mt-4 text-neutral-500 uppercase tracking-[0.2em] text-sm">
              Workers Deployed
            </p>
          </div>

          <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-neutral-200">
            <h3 className="text-5xl lg:text-7xl font-semibold leading-none">
              150+
            </h3>

            <p className="mt-4 text-neutral-500 uppercase tracking-[0.2em] text-sm">
              Clients Served
            </p>
          </div>

          <div className="p-10 lg:p-14 border-r border-neutral-200">
            <h3 className="text-5xl lg:text-7xl font-semibold leading-none">
              25+
            </h3>

            <p className="mt-4 text-neutral-500 uppercase tracking-[0.2em] text-sm">
              Industries
            </p>
          </div>

          <div className="p-10 lg:p-14">
            <h3 className="text-5xl lg:text-7xl font-semibold leading-none">
              98%
            </h3>

            <p className="mt-4 text-neutral-500 uppercase tracking-[0.2em] text-sm">
              Retention Rate
            </p>
          </div>

        </div>
      </div>

    </div>

    {/* Extra Space For Floating Card */}
    <div className="h-[160px]" />

  </div>
</section>

{/* TESTIMONIALS */}
<section className="py-36 bg-[#f8f8f8] relative overflow-hidden">

  {/* Dot Pattern - Branded with Platinum Blue */}
  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#0D5EA8_1px,transparent_1px)] [background-size:16px_16px]" />

  <div className="relative max-w-[1600px] mx-auto px-8 lg:px-14">

    {/* Heading */}
    <div className="flex justify-between items-center mb-24">

      <div>
        {/* Premium accent line */}
        <div className="w-20 h-[3px] bg-[#0D5EA8] mb-8" />
        
        <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">
          Testimonials
        </p>

        <h2 className="text-5xl lg:text-7xl font-semibold leading-none">
          What Our Clients Say
        </h2>
      </div>

      <div className="hidden lg:flex gap-6 text-4xl">
        <button className="text-neutral-400 hover:text-[#0D5EA8] transition-all duration-300">
          ←
        </button>

        <button className="text-neutral-400 hover:text-[#0D5EA8] transition-all duration-300">
          →
        </button>
      </div>

    </div>

    {/* Testimonials */}
    <div className="grid lg:grid-cols-2 gap-10">

      {/* Card 1 */}
      <div className="bg-white p-14 relative">

        <div className="flex items-center gap-5 mb-10">

          <img
            src="/client1.jpg"
            alt=""
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h3 className="text-2xl">
              Rajesh Sharma
            </h3>

            <p className="text-neutral-500">
              Operations Director • Manufacturing
            </p>
          </div>

        </div>

        <div className="absolute top-10 right-10 text-[120px] leading-none text-[#0D5EA8] opacity-20">
          "
        </div>

        <p className="text-xl text-neutral-500 leading-[2] max-w-[600px]">
          Platinum Manpower has consistently delivered skilled workforce
          solutions with professionalism, speed, and reliability.
          Their team understands operational requirements and provides
          exceptional support throughout the hiring process.
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white p-14 relative">

        <div className="flex items-center gap-5 mb-10">

          <img
            src="/client2.jpg"
            alt=""
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h3 className="text-2xl">
              Priya Mehta
            </h3>

            <p className="text-neutral-500">
              HR Head • Logistics
            </p>
          </div>

        </div>

        <div className="absolute top-10 right-10 text-[120px] leading-none text-[#0D5EA8] opacity-20">
          "
        </div>

        <p className="text-xl text-neutral-500 leading-[2] max-w-[600px]">
          Their ability to source qualified candidates quickly has
          significantly improved our recruitment process. We consider
          Platinum Manpower a trusted workforce partner.
        </p>

      </div>

    </div>

    {/* Client Logos - Premium subtle branding */}
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 items-center mt-32 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

      <img src="/logo1.png" alt="" className="h-10 object-contain" />
      <img src="/logo2.png" alt="" className="h-10 object-contain" />
      <img src="/logo3.png" alt="" className="h-10 object-contain" />
      <img src="/logo4.png" alt="" className="h-10 object-contain" />
      <img src="/logo5.png" alt="" className="h-10 object-contain" />

    </div>

  </div>
</section>

{/* CTA */}
<section className="py-36 bg-white overflow-hidden">
  <div className="max-w-[1600px] mx-auto px-8 lg:px-14">

    <div className="relative">

      {/* Background Image */}
      <div className="relative h-[700px] overflow-hidden">

        <img
          src="/cta-banner.jpg"
          alt="Workforce Solutions"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

      </div>

      {/* Floating Card */}
      <div className="relative lg:absolute lg:left-20 lg:bottom-[-80px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] max-w-[700px]">

        {/* Platinum Accent Bar */}
        <div className="absolute top-0 left-0 w-2 h-full bg-[#0D5EA8]" />

        <div className="p-12 lg:p-16">

          <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">
            Ready To Get Started
          </p>

          <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] mb-8">
            Let's Build
            <br />
            Your Workforce.
          </h2>

          <p className="text-neutral-500 text-lg leading-8 mb-10">
            From recruitment and staffing to payroll management and workforce
            solutions, we help businesses scale with confidence.
          </p>

          <button className="group flex items-center gap-4 text-lg font-medium hover:text-[#0D5EA8] transition-all duration-300">
            Contact Us

            <span className="transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </button>

        </div>

      </div>

    </div>

    {/* Space for Floating Card */}
    <div className="h-[180px] hidden lg:block" />

  </div>
</section>
      <Footer />
    </main>
  );
}