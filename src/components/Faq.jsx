import { useState } from "react";

export default function Faq({ t, faqs }) {
  const [open, setOpen] = useState({});
  return (
    <div className="faq-wrap">
      <div className="h1sec" style={{ textAlign: "center" }}>{t.faqTitle}</div>
      {faqs.map((f, i) => (
        <div className="faq-item" key={i} onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}>
          <div className="faq-q-row">
            <div className="faq-q">{f.q}</div>
            <div className="faq-sign">{open[i] ? "−" : "+"}</div>
          </div>
          {open[i] && <div className="faq-a">{f.a}</div>}
        </div>
      ))}
    </div>
  );
}
