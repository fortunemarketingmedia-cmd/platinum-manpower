"use client";

export default function HeroBanner() {
  return (
    <section className="px-8 pt-32 pb-6 bg-white">
      <div className="relative overflow-hidden h-[820px]">

        {/* Background */}
        <img
          src="/hero.jpg"
          alt="Platinum Manpower"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content Box */}
        <div className="absolute left-[12%] top-1/2 -translate-y-1/2">

          <div className="border-[5px] border-[#0D5EA8] w-[330px] h-[620px] p-12 flex flex-col justify-between">

            <div>

              <p className="uppercase tracking-[0.25em] text-white text-sm font-semibold">
                Platinum Manpower
              </p>

              <h1 className="text-white font-bold text-7xl leading-[0.9] mt-8">
                Premium
                <br />
                Workforce
                <br />
                Solutions
              </h1>

              <p className="text-white/80 mt-8 text-lg leading-8 max-w-[220px]">
                Recruitment, staffing and workforce management solutions
                for modern businesses.
              </p>

            </div>

            <button className="group text-white text-2xl flex items-center gap-4">
              Explore

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>

          </div>

        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-32 right-16 flex gap-5">
          <div className="w-12 h-[4px] bg-white/50" />
          <div className="w-12 h-[4px] bg-white/50" />
          <div className="w-12 h-[4px] bg-[#0D5EA8]" />
        </div>

      </div>
    </section>
  );
}