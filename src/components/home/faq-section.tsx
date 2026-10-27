"use client";

import { useState } from "react";
import { faqs } from "@/content/home";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faqs" className="scroll-mt-24">
      <h2 className="text-2xl font-extrabold text-navy">Frequently Asked Questions</h2>
      <p className="mt-1 text-sm text-muted">Quick answers to common questions.</p>
      <div className="mt-5 divide-y divide-slate-100 overflow-hidden rounded-[24px] border border-slate-100 bg-white">
          {faqs.map((faq) => {
            const open = openId === faq.id;
            return (
              <div key={faq.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : faq.id)}
                >
                  <span className="text-sm font-semibold text-navy">{faq.question}</span>
                  <span className="text-lg leading-none text-muted">{open ? "–" : "+"}</span>
                </button>
                {open ? <p className="px-5 pb-4 text-sm leading-6 text-muted">{faq.answer}</p> : null}
              </div>
            );
          })}
      </div>
    </section>
  );
}
