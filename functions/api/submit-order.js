// Cloudflare Pages Function — POST /api/submit-order
// Receives the landing page's order form and forwards it to the same
// Google Sheet order tracker that Ana (the ElevenLabs WhatsApp agent)
// writes to via her `log_order_to_sheet` tool.
//
// The write secret is read from the GOOGLE_SHEET_SECRET environment
// variable (set it in the Cloudflare Pages dashboard under
// Settings -> Environment variables -> Production, as "Secret" type)
// so it never ships to the browser.

const SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbw_3fj4mVPws74unGDoZZVn91BnMTNUtvDX6HdNjRzVWSw0zdcZjHWtow5tzGoD6Y0n/exec";

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const { name, phone, address, city, format, qty, plan } = body || {};
  if (!name || !phone || !address || !city || !format || !qty) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }

  const payload = {
    secret: env.GOOGLE_SHEET_SECRET,
    order_id: "",
    client_name: String(name),
    phone: String(phone),
    address: String(address),
    city: String(city),
    order_items: `Bilbor plată ${format} bax x${qty}`,
    quantity: String(qty),
    order_type: plan === "Abonament" ? "Abonament" : "Comandă unică",
    preferred_delivery_time: "Nespecificat",
  };

  try {
    const upstream = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const text = await upstream.text();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = null;
    }
    const sheetOk = upstream.ok && !(parsed && parsed.status === "error");

    if (!sheetOk) {
      return json({ ok: false, error: "sheet_write_failed", detail: text }, 502);
    }
    return json({ ok: true, sheet_response: text }, 200);
  } catch (err) {
    return json({ ok: false, error: "sheet_unreachable" }, 502);
  }
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
