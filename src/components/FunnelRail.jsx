import { Fragment } from "react";

export default function FunnelRail({ t, goTop, goHow, goPricing, goForm }) {
  const steps = [
    { n: 1, label: t.fs1, go: goTop },
    { n: 2, label: t.fs2, go: goHow },
    { n: 3, label: t.fs3, go: goPricing },
    { n: 4, label: t.fs4, go: goForm },
  ];
  return (
    <div className="rail">
      {steps.map((s, i) => (
        <Fragment key={s.n}>
          <div className="rail-step" onClick={s.go}>
            <div className="rail-dot">{s.n}</div>
            <div className="rail-label">{s.label}</div>
          </div>
          {i < steps.length - 1 && <div className="rail-line"></div>}
        </Fragment>
      ))}
    </div>
  );
}
