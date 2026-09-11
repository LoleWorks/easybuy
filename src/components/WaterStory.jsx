export default function WaterStory({ t }) {
  return (
    <div className="section">
      <div className="section-narrow">
        <div className="eyebrow">{t.storyEyebrow}</div>
        <div className="h2">{t.storyTitle}</div>
        <p className="body-p">{t.storyBody1}</p>
        <p className="body-p">{t.storyBody2}</p>
        <p className="body-p">{t.storyBody3}</p>
      </div>
    </div>
  );
}
