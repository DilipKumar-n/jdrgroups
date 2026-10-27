import Image from "next/image";
import { demos } from "@/content/home";

export function DemosSection() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-2">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Explore Our Demo Websites</h2>
          <p className="mt-1 text-sm text-muted">
            Realistic demos to show what’s possible. These are sample projects, not live client sites.
          </p>
        </div>
        <a href="#portfolio" className="hidden text-sm font-semibold text-navy/70 hover:text-navy sm:inline">
          View All Demos
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {demos.map((demo) => (
          <article
            key={demo.id}
            className="overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_10px_30px_rgba(15,40,90,0.05)]"
          >
            <div className="relative h-40">
              <Image
                src={demo.image}
                alt={demo.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-navy">
                {demo.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-navy">{demo.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {demo.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#contact" className="mt-4 inline-flex text-sm font-semibold text-navy hover:text-brand-dark">
                View Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
