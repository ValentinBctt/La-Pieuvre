import React, { useState } from "react";

export default function NavbarMaison() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mainLinks = [
    { href: "/bureau", label: "BUREAU" },
    { href: "/atelier", label: "ATELIER" },
  ];

  const secondaryLinks = [
    { href: "/", label: "INSTAGRAM" },
    { href: "#contactez-nous", label: "CONTACT" },
  ];

  return (
    <nav className="navbar-atelier navbar-maison">
      <div className="navbar-left navbar-maison-left">
        <a href="/maison" className="navbar-maison-title">
          MAISON&nbsp; <strong>LA PIEUVRE</strong>
        </a>

        <div className={`navbar-links navbar-links-left navbar-maison-links ${menuOpen ? "active" : ""}`}>
          {mainLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="navbar-atelier-center navbar-maison-center">
        <a href="/" className="navbar-maison-logo">
          <img
            className="navbar-maison-logo-default"
            src="https://res.cloudinary.com/dnojcwwos/image/upload/v1774863326/9d78df4e-9bd3-4d9f-b9f6-676856022d57.png"
            alt="Logo"
          />
        </a>
      </div>

      <div className="navbar-right navbar-maison-right">
        {secondaryLinks.map((link) => (
          <a key={link.href} href={link.href} className="navbar-maison-secondary">
            {link.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className={`burger navbar-maison-burger ${menuOpen ? "open" : ""}`}
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
