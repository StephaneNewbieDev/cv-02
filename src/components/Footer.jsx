import React from "react";
import "../styles/styles.css";

function Footer() {
  return (
    // Footer
    <footer className="bg-white text-dark text center py-4">
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
            <ul className="list-unstyled arrow-links">
              <li>
                <a href="/" className="text-dark text-decoration-none">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-dark text-decoration-none arrow-link"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-dark text-decoration-none arrow-link"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-dark text-decoration-none arrow-link"
                >
                  Me contacter
                </a>
              </li>
              <li>
                <a
                  href="/legal"
                  className="text-dark text-decoration-none arrow-link"
                >
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled text-dark">
              <li>
                <a
                  href="/realisations#fresh-food"
                  className="text-dark text-decoration-none arrow-link"
                >
                  Fresh food
                </a>
              </li>
              <li>
                <a
                  href="/realisations#restaurant-akira"
                  className="text-dark text-decoration-none arrow-link"
                >
                  Restaurant Akira
                </a>
              </li>
              <li>
                <a
                  href="/realisations#espace-bien-etre"
                  className="text-dark text-decoration-none arrow-link"
                >
                  Espace bien-être
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div className="col-md-3">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/coder-site-html-css"
                  className="text-dark text-decoration-none arrow-link"
                >
                  Coder son site en HTML/CSS
                </a>
              </li>
              <li>
                <a
                  href="/vendre-produits-web"
                  className="text-dark text-decoration-none arrow-link"
                >
                  Vendre ses produits sur le web
                </a>
              </li>
              <li>
                <a
                  href="/se-positionner-google"
                  className="text-dark text-decoration-none arrow-link"
                >
                  Se positionner sur Google
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-bottom text-center">© Designed by John Doe.</p>
    </footer>
  );
}

export default Footer;
