export default function StickyBar({ t, onCta }) {
  return (
    <div className="sticky-bar">
      <div className="sticky-text">{t.stickyText}</div>
      <button className="sticky-cta" onClick={onCta}>{t.stickyCta}</button>
    </div>
  );
}
