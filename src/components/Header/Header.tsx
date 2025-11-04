import "./Header.css";
import logo from "../../assets/LOGO-ULBS_orizontal_negativ.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <img src={logo} alt="ULBS logo" className="brand-logo" />
        <div className="brand-text">
          <h1>Asigurarea calității — ULBS</h1>
          <p className="subtitle">Departamentul pentru Asigurarea Calității</p>
        </div>
      </div>
    </header>
  );
}
