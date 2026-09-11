export default function WhoCanDrink({ t }) {
  return (
    <div className="section">
      <div className="section-narrow">
        <div className="h2" style={{ fontSize: 24 }}>{t.whoTitle}</div>
        <div className="who-row">
          <div className="who-card"><div className="who-dot"></div><span>{t.who1}</span></div>
          <div className="who-card"><div className="who-dot"></div><span>{t.who2}</span></div>
          <div className="who-card"><div className="who-dot"></div><span>{t.who3}</span></div>
        </div>
      </div>
    </div>
  );
}
