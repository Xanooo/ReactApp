import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const items = [
    { label: "Accueil", path: "/" },
    { label: "Anime", path: "/anime" },
    { label: "Formulaire", path: "/formulaire" },
    { label: "Se connecter", path: "/seconnecter" },
    { label: "À propos", path: "/about" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand">Anime CentralHub</h2>

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {items.map((item) => (
              <li key={item.path}>
                <Link className="nav-link" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success bg-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
