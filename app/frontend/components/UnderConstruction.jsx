import React from "react";
import NavbarAtelier from "./atelier/NavbarAtelier.jsx";

export default function UnderConstruction({ section = "" }) {
  return (
    <div className="atelier-page under-construction">
      <NavbarAtelier />
      <section className="under-construction-content">
        <div className="banner-image">
          <img
            src="https://res.cloudinary.com/dnojcwwos/image/upload/v1793624976/LOGO-LPV-TONE-CROP_hfacl2.gif"
            alt={`La Pieuvre ${section}`}
            loading="eager"
            decoding="async"
          />
        </div>
        <h1 className="banner-atelier-title">{section.toUpperCase()}</h1>
        <p className="under-construction-status">EN TRAVAUX</p>
        <p className="under-construction-text">
          La section {section} arrive bientôt. Merci de votre patience.
        </p>
        <a className="under-construction-link" href="/atelier">
          Retour à l'Atelier La Pieuvre
        </a>
      </section>
    </div>
  );
}
