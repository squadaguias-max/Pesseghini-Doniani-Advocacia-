import { saveLead } from "./db";
import { sendLeadToGoogleSheets } from "./googleSheets";

const subjects = new Set([
  "Divórcio",
  "Guarda de filhos",
  "Pensão alimentícia",
  "União estável",
  "Inventário e partilha",
  "Outro"
]);

const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store"
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: jsonHeaders });
}

function cleanOptional(value, maxLength = 255) {
  if (typeof value !== "string") return null;
  const clean = value.trim();
  return clean ? clean.slice(0, maxLength) : null;
}

function validateLead(body) {
  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const phoneDigits = phone.replace(/\D/g, "");
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";

  if (fullName.length < 3 || fullName.length > 140) return null;
  if (phone.length > 30 || phoneDigits.length < 10 || phoneDigits.length > 13) return null;
  if (!subjects.has(subject) || body.privacyAccepted !== true) return null;

  let pageUrl;
  try {
    pageUrl = new URL(body.pageUrl);
    if (!['http:', 'https:'].includes(pageUrl.protocol)) return null;
  } catch {
    return null;
  }

  return {
    fullName,
    phone,
    subject,
    gclid: cleanOptional(body.gclid),
    gbraid: cleanOptional(body.gbraid),
    wbraid: cleanOptional(body.wbraid),
    pageUrl: pageUrl.toString().slice(0, 2048),
    submittedAt: new Date().toISOString()
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/leads" && request.method === "POST") {
      const contentLength = Number(request.headers.get("content-length") || 0);
      if (contentLength > 16_384) return json({ error: "Dados inválidos." }, 413);

      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: "Dados inválidos." }, 400);
      }

      const lead = validateLead(body);
      if (!lead) return json({ error: "Confira os campos obrigatórios." }, 400);

      try {
        await sendLeadToGoogleSheets(lead);
      } catch (error) {
        console.error("Google Sheets delivery failed", error);
        return json({ error: "Não foi possível enviar agora. Tente novamente." }, 500);
      }

      if (env.DB) {
        try {
          await saveLead(env.DB, lead);
        } catch (error) {
          console.error("Lead backup persistence failed", error);
        }
      }

      return json({ ok: true }, 201);
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ error: "Não encontrado." }, 404);
    }

    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response("Not found", { status: 404 });
  }
};
