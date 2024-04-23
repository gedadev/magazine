import { useRef, useState } from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="models">
              <li>Models</li>
            </Link>
            <Link to="about">
              <li>About Us</li>
            </Link>
            <Link to="contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
