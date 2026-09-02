const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzlT-EZBEee7xgVAThnJNzo5HBTWV2ARfQD4bcxoMAaqG1XzE5URuqWhQzRy3HeJrxR/exec";

function sheetPayload(lead) {
  return {
    nome: lead.fullName,
    telefone: lead.phone,
    email: lead.email || "",
    assunto: lead.subject,
    gclid: lead.gclid || "",
    gbraid: lead.gbraid || "",
    wbraid: lead.wbraid || "",
    url_pagina: lead.pageUrl,
    timestamp: lead.submittedAt
  };
}

export async function sendLeadToGoogleSheets(lead) {
  const payload = sheetPayload(lead);
  const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
    redirect: "follow",
    signal: AbortSignal.timeout(30_000)
  });

  if (!response.ok) {
    throw new Error(`Google Sheets webhook returned ${response.status}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const result = await response.json();
    if (result?.success === false || result?.ok === false) {
      throw new Error(result.message || "Google Sheets webhook rejected the lead");
    }
  } else {
    await response.text();
  }
}
