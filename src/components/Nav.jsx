import logo from "../assets/logo.png";

export default function Nav({ t, lang, setLang, onHow, onPricing, onForm }) {
  return (
    <div className="navbar">
      <img src={logo} alt="easybuy" className="logo-img" />
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <div className="navlinks">
          <span onClick={onHow}>{t.navHow}</span>
          <span onClick={onPricing}>{t.navPricing}</span>
          <span onClick={onForm}>{t.navForm}</span>
        </div>
        <div className="langpill" onClick={() => setLang((l) => (l === "ro" ? "ru" : "ro"))}>
          <span>{lang === "ro" ? "RU" : "RO"}</span>
        </div>
      </div>
    </div>
  );
}
