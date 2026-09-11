import { forwardRef } from "react";
import bottle05 from "../assets/bottle-05.png";
import bottle1 from "../assets/bottle-1.png";
import bottle15 from "../assets/bottle-15.png";

const STEP_IMAGES = [bottle05, bottle1, bottle15];

const HowItWorks = forwardRef(function HowItWorks({ t, steps, onNext }, ref) {
  return (
    <div className="how-wrap" ref={ref}>
      <div className="center-head">
        <div className="eyebrow">{t.howEyebrow}</div>
        <div className="h1sec">{t.howTitle}</div>
      </div>
      <div className="steps-row">
        {steps.map((s) => (
          <div className="step-card" key={s.n}>
            <img src={STEP_IMAGES[s.n - 1]} alt="" className="bottle-photo" />
            <div className="step-num">{s.n}</div>
            <div className="step-title">{s.title}</div>
            <div className="step-body">{s.body}</div>
          </div>
        ))}
      </div>
      <button className="link-arrow" onClick={onNext}>
        <span>{t.howNext}</span>
        <span>→</span>
      </button>
    </div>
  );
});

export default HowItWorks;
