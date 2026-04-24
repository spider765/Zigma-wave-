import { useState } from "react";
import logo from "../assets/logo.png";
export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu

  const toggleTheme = () => {
    document.body.classList.toggle("dm");
    setDark(!dark);
  };

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close menu on click
  };

  return (
    <nav className="navbar">
      <a className="nav-logo" onClick={() => go("home")}>
      <img src={logo} alt="Zigma Wave Logo" />
  <span>Zigma Wave</span>
</a>

      {/* LINKS (will become hamburger menu on mobile) */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a onClick={() => go("why")}>About</a></li>
        <li><a onClick={() => go("services")}>Services</a></li>
        <li><a onClick={() => go("products")}>Products</a></li>
        <li><a onClick={() => go("testimonials")}>Clients</a></li>
        <li><a onClick={() => go("faq")}>FAQ</a></li>
        <li><a onClick={() => go("blog")}>Blog</a></li>
        <li><a onClick={() => go("contact")}>Contact</a></li>
      </ul>

      {/* RIGHT SIDE (ALWAYS OUTSIDE) */}
      <div className="nav-r">
      <label className="theme-switch">
  <input
    type="checkbox"
    checked={dark}
    onChange={toggleTheme}
  />
  <span className="slider"></span>
</label>

        <button className="btn-nav" onClick={() => go("quotes")}>
          Get a Quote
        </button>

        {/* ONLY visible on mobile */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}