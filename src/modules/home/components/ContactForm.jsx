import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "../../../config/template.config";

const subjectOptions = [
  "Divórcio",
  "Guarda de filhos",
  "Pensão alimentícia",
  "União estável",
  "Inventário e partilha",
  "Outro"
];

const emptyTracking = {
  gclid: "",
  gbraid: "",
  wbraid: "",
  pageUrl: "",
  submittedAt: ""
};

export function ContactForm() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [tracking, setTracking] = useState(emptyTracking);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTracking({
      gclid: params.get("gclid") || "",
      gbraid: params.get("gbraid") || "",
      wbraid: params.get("wbraid") || "",
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString()
    });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!privacyAccepted || status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submittedAt = new Date().toISOString();
    setTracking((current) => ({ ...current, submittedAt }));
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      privacyAccepted,
      gclid: tracking.gclid,
      gbraid: tracking.gbraid,
      wbraid: tracking.wbraid,
      pageUrl: tracking.pageUrl || window.location.href,
      submittedAt
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Não foi possível enviar agora. Tente novamente.");

      setStatus("success");
      window.setTimeout(() => {
        window.location.assign(whatsappUrl());
      }, 1800);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Não foi possível enviar agora. Tente novamente.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="fullName">Nome completo <span aria-hidden="true">*</span></label>
        <input id="fullName" name="fullName" type="text" autoComplete="name" minLength="3" maxLength="140" required />
      </div>

      <div className="form-field">
        <label htmlFor="phone">Telefone/WhatsApp <span aria-hidden="true">*</span></label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength="30" required />
      </div>

      <div className="form-field">
        <label htmlFor="subject">Assunto <span aria-hidden="true">*</span></label>
        <select id="subject" name="subject" defaultValue="" required>
          <option value="" disabled>Selecione uma opção</option>
          {subjectOptions.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
        </select>
      </div>

      <input type="hidden" name="gclid" value={tracking.gclid} readOnly />
      <input type="hidden" name="gbraid" value={tracking.gbraid} readOnly />
      <input type="hidden" name="wbraid" value={tracking.wbraid} readOnly />
      <input type="hidden" name="page_url" value={tracking.pageUrl} readOnly />
      <input type="hidden" name="submitted_at" value={tracking.submittedAt} readOnly />

      <label className="privacy-consent">
        <input
          type="checkbox"
          name="privacyAccepted"
          checked={privacyAccepted}
          onChange={(event) => setPrivacyAccepted(event.target.checked)}
          required
        />
        <span>Li e concordo com a <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>.</span>
      </label>

      <button className="button button-gold contact-button" type="submit" disabled={!privacyAccepted || status === "submitting" || status === "success"}>
        {status === "submitting" ? "Enviando..." : "Quero conversar"}
        {status !== "submitting" && <ArrowRight aria-hidden="true" />}
      </button>

      {status === "success" && (
        <p className="form-message form-message-success" role="status">Recebemos seus dados, nossa equipe entra em contato em breve.</p>
      )}
      {status === "error" && (
        <p className="form-message form-message-error" role="alert">{errorMessage}</p>
      )}
    </form>
  );
}
