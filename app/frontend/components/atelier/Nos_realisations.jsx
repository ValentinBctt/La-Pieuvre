import React, { useEffect, useState } from "react";
import '../../styles/realisation.css';

export default function NosRealisations({ images: showroomImages = [] }) {
  const [images, setImages] = useState(showroomImages);

  useEffect(() => {
    let isMounted = true;

    async function loadShowroomImages() {
      try {
        const response = await fetch('/api/showroom_items.json');
        if (!response.ok) return;

        const data = await response.json();
        if (isMounted && Array.isArray(data)) {
          setImages(data.map((item) => item.image).filter(Boolean));
        }
      } catch (error) {
        if (showroomImages.length > 0) {
          setImages(showroomImages);
        }
      }
    }

    loadShowroomImages();

    return () => {
      isMounted = false;
    };
  }, [showroomImages]);

  const marqueeImages = [...images, ...images];

  return (
    <div className="nos-realisations">

      <div className="marquee">
        <div className="marquee-content">
          {marqueeImages.map((img, idx) => (
            <div className="realisations-image" key={idx}>
              <img src={img} alt={`Réalisation ${idx + 1}`} />
            </div>
          ))}
        </div>
        <div className="voir-en-details-wrap">
          <a href="/atelier/realisations" className="voir-en-details">
            VOIR PLUS
          </a>

          <svg
            className="voir-en-details-arrow"
            viewBox="0 0 12 12"
            aria-hidden="true"
            focusable="false"
          >
            <polygon points="2,1 10,6 2,11" />
          </svg>
        </div>
      </div>

      <div className="savoir-faire"></div>
        <h2 className="savoir-faire-title">NOTRE SAVOIR-FAIRE</h2>
        <p className="savoir-faire-description">
          L'Atelier maîtrise différentes techniques d'impression :
          sérigraphie, broderie, DTF, DTG, sublimation… Pour vous, nous adaptons chaque production à vos besoins, de la petite série aux grandes quantités.
Nos tentacules peuvent aussi embarquer sur vos événements pour
créer des expériences en live et des ateliers sur mesure.Pour vous accompagner dans la création et l'image, notre studio créatif Bureau La Pieuvre peut s'occuper de la direction
artistique, des visuels, des logos, des photos et des vidéos. </p>
      </div>

  );
}
