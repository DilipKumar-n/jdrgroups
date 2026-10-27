import Image from "next/image";

export function DeviceShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#1b2433] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="mb-2 flex items-center gap-1.5 px-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-3 h-5 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-white">
          <div className="flex items-center justify-between px-4 py-3 text-[10px] font-semibold text-slate-500">
            <span className="text-navy">Homespace Interiors</span>
            <span className="hidden gap-3 sm:flex">
              <span>Home</span>
              <span>Projects</span>
              <span>Services</span>
              <span>About</span>
            </span>
          </div>
          <div className="relative h-[250px] sm:h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
              alt="Interior living room mockup for a local business website"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
            <div className="absolute left-5 top-8 max-w-[210px]">
              <p className="text-xl font-extrabold leading-tight text-navy sm:text-2xl">
                Beautiful Spaces.
                <br />
                Better Living.
              </p>
              <span className="mt-3 inline-flex rounded-full bg-navy px-3 py-1 text-[10px] font-semibold text-white">
                Explore the Project
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 right-4 w-[150px] overflow-hidden rounded-[28px] border-[6px] border-[#1b2433] bg-white shadow-2xl sm:right-10 sm:w-[170px]">
        <div className="mx-auto mt-1.5 h-1.5 w-10 rounded-full bg-slate-300" />
        <div className="px-3 pb-3 pt-2">
          <p className="text-[9px] font-bold text-navy">Glow & Bloom</p>
          <div className="relative mt-2 h-24 overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80"
              alt="Salon appointment booking mockup"
              fill
              className="object-cover"
              sizes="170px"
            />
          </div>
          <p className="mt-2 text-[10px] font-bold text-navy">Book Your Appointment</p>
          <div className="mt-2 h-6 rounded-full bg-brand" />
        </div>
      </div>

      <p className="absolute -right-2 top-6 max-w-[120px] rotate-6 text-right font-semibold italic leading-tight text-white sm:-right-8 sm:top-10 sm:max-w-[140px]">
        Your Local Business
        <br />
        Online. Better.
      </p>
    </div>
  );
}
