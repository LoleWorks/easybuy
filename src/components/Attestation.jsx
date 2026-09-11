export default function Attestation({ t }) {
  return (
    <div className="section">
      <div className="attest-card">
        <div className="attest-check">✓</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <div className="attest-title">{t.attestTitle}</div>
          <p className="body-p">{t.attestBody1}</p>
          <p className="body-p">{t.attestBody2}</p>
          <p className="body-p">{t.attestBody3}</p>
        </div>
      </div>
    </div>
  );
}
