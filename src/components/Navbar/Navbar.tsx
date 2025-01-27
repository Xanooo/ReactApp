import { Link } from "react-router-dom";

function Navbar() {
  const items = [
    { label: "Accueil", path: "/" },
    { label: "Anime", path: "/anime" },
    { label: "Formulaire", path: "/formulaire" },
    { label: "Se connecter", path: "/seconnecter" },
    { label: "À propos", path: "/about" },
  ];

  return (
    <nav>
      <h2>Anime CentralHub</h2>
      <ul>
        {items.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <form>
        <input type="search" placeholder="Search" />
        <input type="button" value="Search" />
      </form>
    </nav>
  );
}

export default Navbar;
