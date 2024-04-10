import { useRef, useState } from "react";
import "../styles/header.css";

export default function Header() {
  const menu = useRef(null);
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    if (!activeMenu) {
      menu.current.style.transform = "scale(1)";
    } else {
      menu.current.style.transform = "scale(0)";
    }
    setActiveMenu(!activeMenu);
  };

  const refElement = (element) => (menu.current = element);

  return (
    <header>
      <h1>Vibes</h1>
      <nav>
        <div
          className={`ham-menu ${activeMenu ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="menu-list" ref={refElement}>
          <ul>
            <li>Home</li>
            <li>Models</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
