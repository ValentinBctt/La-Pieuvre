import React, { useState } from "react";

export default function NavbarAtelier() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mainLinks = [
    { href: "/bureau", label: "BUREAU" },
    { href: "/atelier", label: "STUDIO" },
    { href: "/contact", label: "MAISON" },
  ];

  const secondaryLinks = [
    { href: "/", label: "INSTAGRAM" },
    { href: "#contactez-nous", label: "CONTACT" },
  ];

  return (
    <nav className="navbar-atelier">
      <div className="navbar-left">
        <a href="/atelier">
          ATELIER <strong>LA PIEUVRE</strong>
        </a>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {mainLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="navbar-atelier-center">
        <a href="/">
          <img
            src="https://res.cloudinary.com/dnojcwwos/image/upload/v1776416329/08a6a08d-1b8c-4227-8c88-718ef85ffe28.png"
            alt="Logo"
          />
        </a>
      </div>

      <div className="navbar-right">
        {secondaryLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="atelier-mobile-menu"
      >
        <span></span>
        <span></span>
      </button>

      <div
        id="atelier-mobile-menu"
        className={`navbar-mobile-menu ${menuOpen ? "active" : ""}`}
      >
        <div className="navbar-mobile-links">
          {mainLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-mobile-links navbar-mobile-links-secondary">
          {secondaryLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

    </nav>
  );
}