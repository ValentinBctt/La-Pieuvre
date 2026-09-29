import React, { useRef } from "react";
import { useScrollbarDrag } from "../../hooks/useScrollbarDrag";
import NavBarMaison from "./NavBarMaison";
import ContactFormMaison from "../ContactFormMaison";

const Maison = () => {
  const scrollerRef = useRef(null);
  const scrollbarThumbRef = useRef(null);

  useScrollbarDrag(scrollerRef, scrollbarThumbRef);

  return (
    <div className="maison-container">
      <NavBarMaison />
      <div className="maison-banner">
        <img className="maison-banner-image" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1790683636/ACCUEIL_dlxpbc.webp" alt="Maison Banner" />
        <div className="maison-banner-text">
          <h1>MAISON <strong>LA PIEUVRE</strong></h1>
          <p>Notre volonté : <strong>créer un impact social et culturel positif.</strong>

En conjuguant <strong>création artistique, engagement, transmission et inclusion</strong>, notre association met son savoir-faire au service de tous, pour éveiller la curiosité, nourrir la créativité et donner envie d'oser, de découvrir et de se dépasser.

Retrouvez bientôt nos différents ateliers sur cette page…</p>
        </div>
      </div>

      <div className="maison-content-caroussel">
        <div className="maison-scroller" ref={scrollerRef}>
          <img className="maison-scroll-image" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1790683639/rectangle_268_1x_qrgu0m.webp" alt="Image 1" />
          <img className="maison-scroll-image" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1790683637/rectangle_266_1x_pryfir.webp" alt="Image 2" />
          <img className="maison-scroll-image" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1790683637/rectangle_263_1x_u2qrof.webp" alt="Image 3" />
          <img className="maison-scroll-image" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1790683637/rectangle_265_1x_w0wf4b.webp" alt="Image 4" />
          <img className="maison-scroll-image" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1790683636/rectangle_264_1x_bz9xqj.webp" alt="Image 5" />
          <img className="maison-scroll-image" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1790683636/rectangle_262_1x_qvbxwz.webp" alt="Image 6" />
          <img className="maison-scroll-image" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1790683636/rectangle_261_1x_cyc1cy.webp" alt="Image 7" />
        </div>

        <div className="maison-scrollbar">
          <div className="maison-scrollbar-thumb" ref={scrollbarThumbRef}></div>
        </div>
      </div>
      <ContactFormMaison />
    </div>
  );
};

export default Maison;