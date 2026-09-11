import { forwardRef } from "react";
import bottle1 from "../assets/bottle-1.png";
import bottle5 from "../assets/bottle-5.png";

const Pricing = forwardRef(function Pricing({ t, priceRows, offerRows, onSelectOnce, onSelectSub }, ref) {
  return (
    <div className="pricing-wrap" ref={ref}>
      <div className="center-head">
        <div className="eyebrow">{t.priceEyebrow}</div>
        <div className="h1sec">{t.priceTitle}</div>
      </div>

      <div className="plan-row">
        <div className="plan-card">
          <div className="plan-icon"><img src={bottle1} alt="" className="bottle-photo" style={{ height: 100 }} /></div>
          <div className="plan-label">{t.planOnceLabel}</div>
          <div className="plan-price">{t.planOncePrice}</div>
          <div className="plan-body">{t.planOnceBody}</div>
          <button className="plan-cta" onClick={onSelectOnce}>{t.planOnceCta}</button>
        </div>
        <div className="plan-card sub">
          <div className="plan-ribbon">{t.planSubBadge}</div>
          <div className="plan-icon"><img src={bottle5} alt="" className="bottle-photo" style={{ height: 110 }} /></div>
          <div className="plan-label">{t.planSubLabel}</div>
          <div className="plan-price">{t.planSubPrice}</div>
          <div className="plan-body">{t.planSubBody}</div>
          <button className="plan-cta filled" onClick={onSelectSub}>{t.planSubCta}</button>
        </div>
      </div>

      <div className="pricelist-wrap">
        <div className="pricelist-title">{t.priceListTitle}</div>
        <div className="pricelist">
          {priceRows.map((r, i) => (
            <div className="pricerow" key={i}>
              <div><div className="pr-name">{r.name}</div><div className="pr-pack">{r.pack}</div></div>
              <div className="pr-price">{r.price}</div>
            </div>
          ))}
        </div>
        <div className="offerbox">
          <div className="offer-head">
            <div className="offer-tag">{t.offerBadge}</div>
            <div className="offer-title">{t.offerTitle}</div>
          </div>
          {offerRows.map((r, i) => (
            <div className="offer-row" key={i}>
              <div><div className="pr-name">{r.name}</div><div className="pr-pack">{r.pack}</div></div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div className="old-price">{r.old}</div>
                <div className="new-price">{r.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Pricing;
