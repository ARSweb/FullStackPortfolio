import "./header.css";
import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">
          <div className="logo-box">A</div>Azizbek.dev
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#">Resume</a>
          <a href="#">Contact</a>

          <div className="nav-btn" onClick={toggleMode}>
            {dark ? "☀️" : "🌙"}
          </div>
        </nav>
      </div>
    </header>
  );
}