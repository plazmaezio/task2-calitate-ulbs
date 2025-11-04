import "./Hero.css";
type Props = { expanded: boolean; onToggle: () => void };

export default function Hero({ expanded, onToggle }: Props) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h2>Serviciul „Asigurarea Calității" (S.A.C.)</h2>
        <p>
          Misiunea S.A.C. este de a dezvolta un sistem coerent de management al
          calității la Universitatea „Lucian Blaga” din Sibiu — proceduri,
          documente și suport pentru implementare.
        </p>
        <div className="hero-cta">
          <button className="btn" onClick={onToggle} aria-expanded={expanded}>
            {expanded ? "Ascunde" : "Mai multe"}
          </button>
        </div>
      </div>
    </section>
  );
}
