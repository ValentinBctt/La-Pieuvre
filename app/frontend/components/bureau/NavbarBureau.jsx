import React, { useState } from "react";

export default function NavbarBureau() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mainLinks = [
    { href: "/atelier", label: "ATELIER" },
    { href: "/maison", label: "MAISON" },
    { href: "/grenier", label: "GRENIER" },
  ];

  return (
    <nav className="navbar-bureau">
      <div className="navbar-left">
        <a href="/bureau">
          BUREAU <strong>LA PIEUVRE</strong>
        </a>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {mainLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="navbar-bureau-center">
        <a href="/">
          <img
            src="https://res.cloudinary.com/dnojcwwos/image/upload/v1774863326/9d78df4e-9bd3-4d9f-b9f6-676856022d57.png"
            alt="Logo"
          />
        </a>
      </div>

      <div className="navbar-right">
        <a href="/" style={{ marginRight: "10rem" }}>
          INSTAGRAM
        </a>
        <a href="#contactez-nous">CONTACT</a>
      </div>

      {/* Burger */}
      <button
        type="button"
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="bureau-mobile-menu"
      >
        <span></span>
        <span></span>
      </button>

      {/* Menu mobile */}
      <div
        id="bureau-mobile-menu"
        className={`navbar-mobile-menu ${menuOpen ? "active" : ""}`}
      >
        <div className="navbar-mobile-links">
          {mainLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-mobile-links navbar-mobile-links-secondary">
          <a href="/" onClick={() => setMenuOpen(false)}>
            INSTAGRAM
          </a>

          <a href="#contactez-nous" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
