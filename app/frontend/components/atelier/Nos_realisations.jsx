import React from "react";
import '../../styles/realisation.css';

const ImagesRealisations = [
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
];

export default function NosRealisations() {
  // On duplique le tableau pour l'effet infini
  const images = [...ImagesRealisations, ...ImagesRealisations];

  return (
    <a href="/atelier/realisations" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="nos-realisations">
        <h2>Nos réalisations</h2>
        <div className="marquee">
          <div className="marquee-content">
            {images.map((img, idx) => (
              <div className="realisations-image" key={idx}>
                <img src={img} alt={`Réalisation ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}