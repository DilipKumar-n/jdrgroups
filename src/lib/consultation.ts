import { services } from "@/content/home";

export type ConsultationPayload = {
  name: string;
  businessName: string;
  serviceId: string;
  whatsapp: string;
};

const WHATSAPP_DIGITS = /^[0-9]{10,15}$/;

export function normalizeWhatsapp(value: string) {
  return value.replace(/\D/g, "");
}

export function validateConsultation(input: ConsultationPayload) {
  const errors: Partial<Record<keyof ConsultationPayload, string>> = {};
  const name = input.name.trim();
  const businessName = input.businessName.trim();
  const serviceId = input.serviceId.trim();
  const whatsapp = normalizeWhatsapp(input.whatsapp);

  if (name.length < 2) errors.name = "Please enter your name.";
  if (businessName.length < 2) errors.businessName = "Please enter your business name.";
  if (!services.some((service) => service.id === serviceId)) {
    errors.serviceId = "Please select a service.";
  }
  if (!WHATSAPP_DIGITS.test(whatsapp)) {
    errors.whatsapp = "Enter a valid WhatsApp number.";
  }

  return {
    errors,
    data: { name, businessName, serviceId, whatsapp } satisfies ConsultationPayload,
    ok: Object.keys(errors).length === 0,
  };
}

export function serviceLabel(serviceId: string) {
  return services.find((service) => service.id === serviceId)?.name ?? serviceId;
}

export function consultationWhatsappMessage(data: ConsultationPayload) {
  return [
    "Hi JDR Groups, I'd like a free consultation.",
    `Name: ${data.name}`,
    `Business: ${data.businessName}`,
    `Service: ${serviceLabel(data.serviceId)}`,
    `WhatsApp: ${data.whatsapp}`,
  ].join("\n");
}
