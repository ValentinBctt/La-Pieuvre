import React from "react";
import "../../styles/realisation.css";

const imageUrl = "https://res.cloudinary.com/dnojcwwos/image/upload/v1791290187/defilement_logo__2_bj7wuo.webp";

// Créer un array avec l'image dupliquée pour l'effet marquee
const confianceImages = Array(4).fill({
  name: 'Confiance',
  src: imageUrl
});

export default function ConfianceMarquee() {
  return (
    <section className="ils-nous-font-confiance confiance-marquee">
      <div className="marquee">
        <div className="marquee-content">
          {confianceImages.map((image, index) => (
            <div className="realisations-image" key={`confiance-${index}`}>
              <img src={image.src} alt={image.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
