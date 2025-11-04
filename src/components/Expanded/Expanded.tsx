import "./Expanded.css";
import { forwardRef } from "react";

type Props = { expanded: boolean };

const Expanded = forwardRef<HTMLElement, Props>(({ expanded }, ref) => {
  return (
    <section
      ref={ref as any}
      className={"expanded-content " + (expanded ? "open" : "")}
      aria-hidden={!expanded}
    >
      <div className="expanded-inner">
        <h4>Rolul Serviciului Asigurarea Calității</h4>
        <p>
          Serviciul Asigurarea Calităţii este un compartiment de specialitate cu
          rol de suport, coordonare şi execuţie, care:
        </p>
        <ul>
          <li>
            sprijină Comisia pentru Evaluarea şi Asigurarea Calităţii în
            realizarea managementului calităţii, prin planificarea acţiunilor,
            organizarea echipelor de lucru pentru elaborarea documentelor,
            instruirea personalului privind asigurarea calităţii şi gestionarea
            documentelor sistemului calității
          </li>
          <li>
            sprijină Comisia de Monitorizare, Coordonare și Îndrumare
            Metodologică a Dezvoltării SCIM pentru a identifica și aborda
            riscurile şi pentru a asigura în mod rezonabil că misiunea
            universității precum şi obiectivele generale au fost îndeplinite
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
            Comisia privind programele de studii și asigurarea calității - la
            nivelul Senatului;
          </li>
          <li>
            Subcomisiile pentru Evaluarea şi Asigurarea Calităţii (SCEAC) – la
            nivelul facultăților;
          </li>
          <li>
            Responsabilii cu asigurarea calității la nivelul tuturor entităților
            din ULBS;
          </li>
        </ul>

        <h4>Politica în domeniul calității</h4>
        <ul>
          <li>
            <a href="/task2/documents/Viziune-Misiune-Valori-Obiective ULBS.pdf">
              Viziunea, misiunea, valorile și obiectivele strategice ale ULBS
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
      </div>
    </section>
  );
});

export default Expanded;
