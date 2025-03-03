import React from "react";

function Footer() {
  return (
    // Footer
    <footer className="bg-white text-dark py-4">
      <div className="container">
        <div className="row">
          {/* Colonne 1 */}
          <div className="col-md-3">
            <h5>John Doe</h5>
            <p>40 Rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>Téléphone : 06 20 30 40 50</p>
            {/* Logos des réseaux sociaux */}
            <div className="mt-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark me-3"
                aria-label="GitHub"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark me-3"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-md-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/"
                  className="text-dark text-decoration-none d-flex align-items-center"
                >
                  <i className="bi bi-chevron-right text-primary me-2"></i>{" "}
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-dark text-decoration-none d-flex align-items-center"
                >
                  <i className="bi bi-chevron-right text-primary me-2"></i> À
                  propos
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-dark text-decoration-none d-flex align-items-center"
                >
                  <i className="bi bi-chevron-right text-primary me-2"></i>{" "}
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-dark text-decoration-none d-flex align-items-center"
                >
                  <i className="bi bi-chevron-right text-primary me-2"></i> Me
                  contacter
                </a>
              </li>
              <li>
                <a
                  href="/legal"
                  className="text-dark text-decoration-none d-flex align-items-center"
                >
                  <i className="bi bi-chevron-right text-primary me-2"></i>{" "}
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center">
                <i className="bi bi-chevron-right text-primary me-2"></i> Fresh
                food
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-chevron-right text-primary me-2"></i>{" "}
                Restaurant Akira
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-chevron-right text-primary me-2"></i> Espace
                bien-être
              </li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div className="col-md-3">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center">
                <i className="bi bi-chevron-right text-primary me-2"></i> Coder
                son site en HTML/CSS
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-chevron-right text-primary me-2"></i> Vendre
                ses produits sur le web
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-chevron-right text-primary me-2"></i> Se
                positionner sur Google
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-bottom text-center bg-dark text-white p-3 m-0">
        © Designed by John Doe.
      </p>
    </footer>
  );
}

export default Footer;
