import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-contact">
          <img
            src="../src/assets/Sunburst_2015.jpg"
            alt="Sunburst"
            className="footer-sunburst"
          />
          <div className="contact-details">
            <h5>Informații de contact</h5>
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
            <a href="">Departamentul Asigurarea Calității</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
