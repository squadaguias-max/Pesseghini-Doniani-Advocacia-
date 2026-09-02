import { sendLeadToGoogleSheets } from "../worker/googleSheets.js";

const subjects = new Set([
  "Divórcio",
  "Guarda de filhos",
  "Pensão alimentícia",
  "União estável",
  "Inventário e partilha",
  "Outro"
]);

function cleanOptional(value, maxLength = 255) {
  if (typeof value !== "string") return null;
  const clean = value.trim();
  return clean ? clean.slice(0, maxLength) : null;
}

function validateLead(body) {
  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const phoneDigits = phone.replace(/\D/g, "");
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";

  if (fullName.length < 3 || fullName.length > 140) return null;
  if (phone.length > 30 || phoneDigits.length < 10 || phoneDigits.length > 13) return null;
  if (email && (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return null;
  if (!subjects.has(subject) || body.privacyAccepted !== true) return null;

  let pageUrl;
  try {
    pageUrl = new URL(body.pageUrl);
    if (!["http:", "https:"].includes(pageUrl.protocol)) return null;
  } catch {
    return null;
  }

  return {
    fullName,
    phone,
    email: email || null,
    subject,
    gclid: cleanOptional(body.gclid),
    gbraid: cleanOptional(body.gbraid),
    wbraid: cleanOptional(body.wbraid),
    pageUrl: pageUrl.toString().slice(0, 2048),
    submittedAt: new Date().toISOString()
  };
}

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Método não permitido." });
  }

  const contentLength = Number(request.headers["content-length"] || 0);
  if (contentLength > 16_384) return response.status(413).json({ error: "Dados inválidos." });

  let body = request.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return response.status(400).json({ error: "Dados inválidos." });
    }
  }

  const lead = validateLead(body || {});
  if (!lead) return response.status(400).json({ error: "Confira os campos obrigatórios." });

  try {
    await sendLeadToGoogleSheets(lead);
    return response.status(201).json({ ok: true });
  } catch (error) {
    console.error("Google Sheets delivery failed", error);
    return response.status(502).json({ error: "Não foi possível enviar agora. Tente novamente." });
  }
}
