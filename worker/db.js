export async function saveLead(db, lead) {
  return db.prepare(`
    INSERT INTO leads (
      full_name,
      phone,
      subject,
      privacy_accepted,
      gclid,
      gbraid,
      wbraid,
      page_url,
      submitted_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    lead.fullName,
    lead.phone,
    lead.subject,
    1,
    lead.gclid,
    lead.gbraid,
    lead.wbraid,
    lead.pageUrl,
    lead.submittedAt
  ).run();
}
