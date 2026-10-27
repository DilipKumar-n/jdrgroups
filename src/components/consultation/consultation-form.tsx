"use client";

import { useState, type FormEvent } from "react";
import { useConsultation } from "@/components/consultation/consultation-provider";
import { Button } from "@/components/ui/button";
import { services } from "@/content/home";
import {
  consultationWhatsappMessage,
  validateConsultation,
  type ConsultationPayload,
} from "@/lib/consultation";
import { whatsappUrl } from "@/lib/whatsapp";

const empty: ConsultationPayload = {
  name: "",
  businessName: "",
  serviceId: "starter",
  whatsapp: "",
};

export function ConsultationForm() {
  const { selectedService, setSelectedService } = useConsultation();
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = { ...values, serviceId: selectedService };
    const result = validateConsultation(payload);
    setErrors(result.errors);
    if (!result.ok) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const json = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !json.ok) {
        throw new Error(json.error ?? "Unable to send your request.");
      }
      setStatus("success");
      setMessage("Thanks. We’ll share a custom quote on WhatsApp shortly.");
      window.open(whatsappUrl(consultationWhatsappMessage(result.data)), "_blank", "noopener,noreferrer");
      setValues({ ...empty, serviceId: selectedService });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <Field
        label="Your Name"
        name="name"
        value={values.name}
        error={errors.name}
        onChange={(value) => setValues((current) => ({ ...current, name: value }))}
      />
      <Field
        label="Business Name"
        name="businessName"
        value={values.businessName}
        error={errors.businessName}
        onChange={(value) => setValues((current) => ({ ...current, businessName: value }))}
      />
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy">
          Service Required <span className="text-red-500">*</span>
        </span>
        <select
          name="serviceId"
          value={selectedService}
          onChange={(event) => setSelectedService(event.target.value)}
          className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-navy outline-none ring-brand/30 focus:ring-2"
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        {errors.serviceId ? <p className="mt-1 text-xs text-red-600">{errors.serviceId}</p> : null}
      </label>
      <Field
        label="WhatsApp Number"
        name="whatsapp"
        type="tel"
        inputMode="tel"
        value={values.whatsapp}
        error={errors.whatsapp}
        onChange={(value) => setValues((current) => ({ ...current, whatsapp: value }))}
      />
      {message ? (
        <p className={`text-sm ${status === "error" ? "text-red-600" : "text-brand-dark"}`}>{message}</p>
      ) : null}
      <Button type="submit" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  inputMode,
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  inputMode?: "tel" | "text";
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy">
        {label} <span className="text-red-500">*</span>
      </span>
      <input
        name={name}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-navy outline-none ring-brand/30 focus:ring-2"
      />
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </label>
  );
}
