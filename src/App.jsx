import { useRef, useState } from "react";
import Nav from "./components/Nav.jsx";
import FunnelRail from "./components/FunnelRail.jsx";
import Hero from "./components/Hero.jsx";
import TrustBadges from "./components/TrustBadges.jsx";
import WaterStory from "./components/WaterStory.jsx";
import Attestation from "./components/Attestation.jsx";
import WhoCanDrink from "./components/WhoCanDrink.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import OrderForm from "./components/OrderForm.jsx";
import Faq from "./components/Faq.jsx";
import StickyBar from "./components/StickyBar.jsx";
import { COPY, BADGES, STEPS, TESTIMONIALS, FAQS, PRICE_ROWS, OFFER_ROWS, ELEVENLABS_AGENT_ID } from "./data/content.js";

export default function App() {
  const [lang, setLang] = useState("ro");
  const [plan, setPlan] = useState("sub");

  const howRef = useRef(null);
  const pricingRef = useRef(null);
  const formRef = useRef(null);

  const t = COPY[lang];
  const scrollTo = (ref) => ref.current && ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div style={{ display: "flex", flexDirection: "column", paddingBottom: 110 }}>
      <Nav t={t} lang={lang} setLang={setLang} onHow={() => scrollTo(howRef)} onPricing={() => scrollTo(pricingRef)} onForm={() => scrollTo(formRef)} />
      <FunnelRail t={t} goTop={scrollTop} goHow={() => scrollTo(howRef)} goPricing={() => scrollTo(pricingRef)} goForm={() => scrollTo(formRef)} />

      <Hero t={t} onCta={() => scrollTo(formRef)} onSecondary={() => scrollTo(pricingRef)} onScrollHint={() => scrollTo(howRef)} />
      <TrustBadges badges={BADGES[lang]} />
      <WaterStory t={t} />
      <Attestation t={t} />
      <WhoCanDrink t={t} />

      <HowItWorks ref={howRef} t={t} steps={STEPS[lang]} onNext={() => scrollTo(pricingRef)} />

      <Pricing
        ref={pricingRef}
        t={t}
        priceRows={PRICE_ROWS[lang]}
        offerRows={OFFER_ROWS[lang]}
        onSelectOnce={() => { setPlan("once"); scrollTo(formRef); }}
        onSelectSub={() => { setPlan("sub"); scrollTo(formRef); }}
      />

      <Testimonials t={t} testimonials={TESTIMONIALS[lang]} />

      <OrderForm ref={formRef} t={t} lang={lang} plan={plan} setPlan={setPlan} />

      <Faq t={t} faqs={FAQS[lang]} />

      <div className="footer-pad"></div>
      <StickyBar t={t} onCta={() => scrollTo(formRef)} />

      <elevenlabs-convai agent-id={ELEVENLABS_AGENT_ID}></elevenlabs-convai>
    </div>
  );
}
