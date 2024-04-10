import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <h1>Vibes</h1>
      <nav>
        <div className="ham-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="menu-list">
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
