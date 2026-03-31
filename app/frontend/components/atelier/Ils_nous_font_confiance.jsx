
import React from "react";
import '../../styles/realisation.css';

const ImagesConfiance = [
  {name: '92i', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857839/92i_eqy61e.png'},
  {name: '92i', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857839/92i_eqy61e.png'},
  {name: '92i', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857839/92i_eqy61e.png'},
  {name: '92i', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857839/92i_eqy61e.png'},
  {name: '92i', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857839/92i_eqy61e.png'},
  {name: '92i', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857839/92i_eqy61e.png'},
];

export default function IlsNousFontConfiance() {
  // On duplique le tableau pour l'effet infini
  const images = [...ImagesConfiance, ...ImagesConfiance,...ImagesConfiance, ...ImagesConfiance,...ImagesConfiance, ...ImagesConfiance,...ImagesConfiance, ...ImagesConfiance];

  return (
    <div className="ils-nous-font-confiance" style={{ margin: '0 auto' }}>
      <h2>Ils nous font confiance</h2>
      <div className="marquee">
        <div className="marquee-content">
          {images.map((img, idx) => (
            <div className="realisations-image" key={idx}>
              <img src={img.src} alt={img.name || `Confiance ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}