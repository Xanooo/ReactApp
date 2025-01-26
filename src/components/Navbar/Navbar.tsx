import { useState } from "react";

interface NavbarProps {
  items: string[];
}

function Navbar({ items }: NavbarProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <nav>
      <h2>Anime CentralHub</h2>
      {items.map((items) => (
        <li key={items}>
          <a href="#">{items}</a>
        </li>
      ))}
      <form>
        <input type="search" placeholder="Search"></input>
        <input type="button" value="Search"></input>
      </form>
    </nav>
  );
}

export default Navbar;
