import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const items = [
    { label: "Accueil", path: "/" },
    { label: "Anime", path: "/anime" },
    { label: "Formulaire", path: "/formulaire" },
    { label: "Se connecter", path: "/seconnecter" },
    { label: "À propos", path: "/about" },
  ];
  return (
    <footer className="py-3 my-4 bg-dark">
      <h2>Nous contacter</h2>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              {items.map((item) => (
                <li key={item.path}>
                  <Link
                    className="nav-link px-2 text-body-secondary"
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-body-secondary">© 2025 Xanooo</p>
      </nav>
    </footer>
  );
}

export default Footer;
