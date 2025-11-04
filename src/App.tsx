import "./App.css";
import logo from "./assets/LOGO-ULBS_orizontal_negativ.png";
import { useState, useRef, useEffect } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);

  const expandedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!expanded) return;
    // wait a short moment to let the expansion animation start, then scroll
    const t = setTimeout(() => {
      if (expandedRef.current) {
        // compute an offset so we don't scroll too far down
        const rect = expandedRef.current.getBoundingClientRect();
        const offset = 48; // px of space from top of viewport
        const targetY = (window.scrollY + rect.top - offset) / 3;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }
    }, 80);
    return () => clearTimeout(t);
  }, [expanded]);

  return (
    <div className="app-root">
      <header className="site-header">
        <div className="header-inner">
          <img src={logo} alt="ULBS logo" className="brand-logo" />
          <div className="brand-text">
            <h1>Asigurarea calității — ULBS</h1>
            <p className="subtitle">
              Departamentul pentru Asigurarea Calității
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <h2>Serviciul „Asigurarea Calității" (S.A.C.)</h2>
            <p>
              Misiunea S.A.C. este de a dezvolta un sistem coerent de management
              al calității la Universitatea „Lucian Blaga” din Sibiu —
              proceduri, documente și suport pentru implementare.
            </p>
            <div className="hero-cta">
              <button
                className="btn"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
              >
                {expanded ? "Ascunde" : "Mai multe"}
              </button>
            </div>
          </div>
        </section>

        <div className="main-panel">
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
                  Ghiduri, proceduri și instrucțiuni de lucru pentru sistemul
                  S.M.I.
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
                  Planificare, audituri interne și instrumente pentru
                  îmbunătățire continuă.
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
                  Instruire, gestionare documente și sprijin pentru implementare
                  la nivel de entitate.
                </p>
              </article>
            </div>
          </section>

          {/* expanded original page content - hidden until user clicks */}
          <section
            ref={expandedRef}
            className={"expanded-content " + (expanded ? "open" : "")}
            aria-hidden={!expanded}
          >
            <div className="expanded-inner">
              <h4>Rolul Serviciului Asigurarea Calității</h4>
              <p>
                Serviciul Asigurarea Calităţii este un compartiment de
                specialitate cu rol de suport, coordonare şi execuţie, care:
              </p>
              <ul>
                <li>
                  sprijină Comisia pentru Evaluarea şi Asigurarea Calităţii în
                  realizarea managementului calităţii, prin planificarea
                  acţiunilor, organizarea echipelor de lucru pentru elaborarea
                  documentelor, instruirea personalului privind asigurarea
                  calităţii şi gestionarea documentelor sistemului calității
                </li>
                <li>
                  sprijină Comisia de Monitorizare, Coordonare și Îndrumare
                  Metodologică a Dezvoltării SCIM pentru a identifica și aborda
                  riscurile şi pentru a asigura în mod rezonabil că misiunea
                  universității precum şi obiectivele generale au fost
                  îndeplinite
                </li>
              </ul>

              <h4>Structura Sistemului de Management (SM) al ULBS</h4>
              <p>
                Conform organigramei ULBS, structurile organizatorice ale SM din
                Universitatea „Lucian Blaga” din Sibiu sunt:
              </p>
              <ul>
                <li>Serviciul Asigurarea Calităţii;</li>
                <li>
                  Comisia pentru Evaluarea şi Asigurarea Calităţii - la nivelul
                  universității;
                </li>
                <li>
                  Comisia privind programele de studii și asigurarea calității -
                  la nivelul Senatului;
                </li>
                <li>
                  Subcomisiile pentru Evaluarea şi Asigurarea Calităţii (SCEAC)
                  – la nivelul facultăților;
                </li>
                <li>
                  Responsabilii cu asigurarea calității la nivelul tuturor
                  entităților din ULBS;
                </li>
              </ul>

              <h4>Politica în domeniul calității</h4>
              <ul>
                <li>
                  <a href="/task2/documents/Viziune-Misiune-Valori-Obiective ULBS.pdf">
                    Viziunea, misiunea, valorile și obiectivele strategice ale
                    ULBS
                  </a>
                </li>
                <li>
                  <a href="/task2/documents/Politica în domeniul calității a ULBS.pdf">
                    Politica în domeniul calității a ULBS
                  </a>
                </li>
                <li>
                  <a href="/task2/documents/Asigurarea calității la ULBS.pdf">
                    Asigurarea calității la ULBS
                  </a>
                </li>
              </ul>
              {/* Contact info moved to footer */}
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-contact">
            <img
              src="/task2/obj/img/Sunburst_2015.jpg"
              alt="Sunburst"
              className="footer-sunburst"
            />
            <div className="contact-details">
              <h5 color="#ffffff">Informații de contact</h5>
              <p>
                <strong>Adresa:</strong> Bd-ul. Victoriei, Nr.10, Sibiu, 550024,
                Romania
              </p>
              <p>
                <strong>Tel:</strong> +40-269-217.779, int. 139, 148
              </p>
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:dep.calitate@ulbsibiu.ro">
                  dep.calitate@ulbsibiu.ro
                </a>
              </p>
              <p>
                <strong>Web:</strong>{" "}
                <a href="http://calitate.ulbsibiu.ro">
                  http://calitate.ulbsibiu.ro
                </a>
              </p>
            </div>
          </div>
          <div className="footer-copyright">
            <p>
              Copyright © 1998-2025{" "}
              <a href="http://ccom.ulbsibiu.ro/">Centrul de Comunicații</a> |{" "}
              <a href="/task2/index.html">Departamentul Asigurarea Calității</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
