import bottle15 from "../assets/bottle-15.png";

export default function Hero({ t, onCta, onSecondary, onScrollHint }) {
  return (
    <div className="hero">
      <div className="hero-glow"></div>
      <div className="hero-left">
        <div className="hero-badge">{t.heroBadge}</div>
        <h1>{t.heroTitle}</h1>
        <p>{t.heroSub}</p>
        <div className="hero-cta-row">
          <button className="btn-white" onClick={onCta}>{t.heroCta}</button>
          <button className="link-underline" onClick={onSecondary}>{t.heroSecondary}</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={bottle15} alt="Bilbor 1,5L" className="bottle-photo" style={{ height: 460 }} />
      </div>
      <button className="scroll-hint" onClick={onScrollHint}>
        <span>{t.scrollHint}</span>
        <div className="chevron"></div>
      </button>
    </div>
  );
}
