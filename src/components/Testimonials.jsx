export default function Testimonials({ t, testimonials }) {
  return (
    <div className="test-wrap">
      <div className="h1sec" style={{ textAlign: "center" }}>{t.testTitle}</div>
      <div className="test-row">
        {testimonials.map((q, i) => (
          <div className="test-card" key={i}>
            <div className="test-quote">"{q.text}"</div>
            <div className="test-who">
              <div className="test-avatar">{q.initial}</div>
              <div className="test-name">{q.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
