export default function TrustBadges({ badges }) {
  return (
    <div className="badges">
      {badges.map((label, i) => (
        <div className="badge" key={i}>
          <div className="badge-dot"></div>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
