import attestImg from "../assets/attestation.jpg";

export default function Attestation({ t }) {
  return (
    <div className="section">
      <div className="attest-card">
        <div className="attest-check">✓</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 13, flex: 1 }}>
          <div className="attest-title">{t.attestTitle}</div>
          <p className="body-p">{t.attestBody1}</p>
          <p className="body-p">{t.attestBody2}</p>
          <p className="body-p">{t.attestBody3}</p>
        </div>
        <img src={attestImg} alt="Bilbor - apă atestată pentru alimentația bebelușilor" className="attest-img" />
      </div>
    </div>
  );
}
