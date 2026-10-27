import { processIcons } from "@/components/ui/icons";
import { processSteps } from "@/content/home";

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 py-2">
      <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Our 5-Step Process</h2>
      <p className="mt-1 text-sm text-muted">From discussion to launch, we keep it simple and transparent.</p>
      <ol className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
        {processSteps.map((step) => {
          const Icon = processIcons[step.icon];
          return (
            <li key={step.id} className="text-center">
              <span className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-navy text-xs font-bold text-white">
                {step.step}
              </span>
              <span className="mx-auto mt-4 grid h-16 w-16 place-items-center rounded-full border border-slate-100 bg-white text-navy shadow-sm">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-3 text-sm font-bold text-navy">{step.title}</h3>
              <p className="mt-1 text-xs leading-5 text-muted">{step.description}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
