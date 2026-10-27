import { testimonials } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section>
      <h2 className="text-2xl font-extrabold text-navy">What Our Clients Say</h2>
      <p className="mt-1 text-sm text-muted">Trusted by local businesses across Bengaluru.</p>
      <div className="mt-5 grid gap-4">
        {testimonials.map((item) => (
          <figure
            key={item.id}
            className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,40,90,0.05)]"
          >
            <blockquote className="text-sm leading-7 text-navy/80">“{item.quote}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-mint text-sm font-bold text-navy">
                {item.initials}
              </span>
              <span>
                <span className="block text-sm font-bold text-navy">{item.name}</span>
                <span className="text-xs text-muted">{item.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
