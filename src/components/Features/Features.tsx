import "./Features.css";

type Props = { expanded: boolean };

export default function Features({ expanded }: Props) {
  return (
    <section id="features" className="features">
      <div className={`cards ${expanded ? "cards-hidden" : ""}`}>
        <article className="card">
          <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
            <path
              fill="currentColor"
              d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zM3 9h2V7H3v2zm4 8h14v-2H7v2zM7 7v2h14V7H7zm0 6h14v-2H7v2z"
            />
          </svg>
          <h3>Documente directoare</h3>
          <p>
            Ghiduri, proceduri și instrucțiuni de lucru pentru sistemul S.M.I.
          </p>
        </article>

        <article className="card">
          <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
            <path
              fill="currentColor"
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h4v2h-6V7h2v6z"
            />
          </svg>
          <h3>Evaluare și audit</h3>
          <p>
            Planificare, audituri interne și instrumente pentru îmbunătățire
            continuă.
          </p>
        </article>

        <article className="card">
          <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
            <path
              fill="currentColor"
              d="M12 7a2 2 0 100 4 2 2 0 000-4zm0 10c-4 0-6-2-6-3 0-2 4-3 6-3s6 1 6 3c0 1-2 3-6 3z"
            />
          </svg>
          <h3>Suport pentru personal</h3>
          <p>
            Instruire, gestionare documente și sprijin pentru implementare la
            nivel de entitate.
          </p>
        </article>
      </div>
    </section>
  );
}
