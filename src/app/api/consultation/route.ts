import { NextResponse } from "next/server";
import { validateConsultation, type ConsultationPayload } from "@/lib/consultation";

const leads: Array<ConsultationPayload & { receivedAt: string }> = [];

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const payload = body as Partial<ConsultationPayload>;
  const result = validateConsultation({
    name: String(payload.name ?? ""),
    businessName: String(payload.businessName ?? ""),
    serviceId: String(payload.serviceId ?? ""),
    whatsapp: String(payload.whatsapp ?? ""),
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });
  }

  leads.push({ ...result.data, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
