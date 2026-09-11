import { forwardRef, useState } from "react";
import { FORMATS, STD_PRICE, OFFER_PRICE, OFFER_QTY, FREE_DELIVERY_LEI } from "../data/content.js";

const OrderForm = forwardRef(function OrderForm({ t, lang, plan, setPlan }, ref) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", format: "0,5L", qty: 1 });

  const unit = form.qty >= OFFER_QTY ? OFFER_PRICE[form.format] : STD_PRICE[form.format];
  const total = Math.round(unit * form.qty);
  const freeDelivery = total >= FREE_DELIVERY_LEI;

  async function submitForm(e) {
    e.preventDefault();
    const orderTypeValue = plan === "sub" ? "Abonament" : "Comandă unică";

    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          address: form.address,
          city: form.city,
          format: form.format,
          qty: form.qty,
          plan: orderTypeValue,
        }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data && data.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="form-wrap" ref={ref}>
      <form className="form-card" onSubmit={submitForm}>
        <div className="form-title">{t.formTitle}</div>
        <div className="form-sub">{t.formSub}</div>
        {submitted && <div className="success-banner">{t.formSuccess}</div>}
        {error && <div className="success-banner" style={{ background: "var(--tint)", borderColor: "var(--urgent)", color: "var(--urgent)" }}>{t.formError}</div>}
        {!submitted && (
          <div className="form-fields">
            <input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder={t.fName} />
            <input required value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder={t.fPhone} />
            <input required value={form.address} onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))} placeholder={t.fAddress} />
            <input required value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))} placeholder={t.fCity} />
            <select value={form.format} onChange={(e) => setForm((f) => ({ ...f, format: e.target.value }))}>
              {FORMATS.map((fmt) => (
                <option key={fmt} value={fmt}>{fmt}</option>
              ))}
            </select>
            <div className="qty-row">
              <div className="lbl">{t.fQty}</div>
              <div className="qty-controls">
                <button type="button" className="qty-btn qty-minus" onClick={() => setForm((f) => ({ ...f, qty: Math.max(1, f.qty - 1) }))}>−</button>
                <div className="qty-val">{form.qty}</div>
                <button type="button" className="qty-btn qty-plus" onClick={() => setForm((f) => ({ ...f, qty: Math.min(50, f.qty + 1) }))}>+</button>
              </div>
            </div>
            <div className="plan-pills">
              <div className={"pill once" + (plan === "once" ? " active" : "")} onClick={() => setPlan("once")}>{t.planOnceLabel}</div>
              <div className={"pill" + (plan === "sub" ? " active" : "")} onClick={() => setPlan("sub")}>{t.planSubLabel}</div>
            </div>
            <div className="total-box">
              <div className="total-row">
                <div className="total-lbl">{t.fTotal}</div>
                <div className="total-val">{total} {lang === "ro" ? "lei" : "лей"}</div>
              </div>
              <div className="fd-msg" style={{ color: freeDelivery ? "var(--green)" : "var(--urgent)" }}>
                {freeDelivery ? t.freeDeliveryYes : t.freeDeliveryNo(FREE_DELIVERY_LEI - total)}
              </div>
            </div>
            <button className="submit-btn" type="submit" disabled={submitting || !form.name || !form.phone || !form.address || !form.city}>
              {submitting ? t.formSubmitting : t.formCta}
            </button>
          </div>
        )}
      </form>
    </div>
  );
});

export default OrderForm;
