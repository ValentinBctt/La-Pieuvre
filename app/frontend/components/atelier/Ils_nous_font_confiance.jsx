
import React from "react";
import '../../styles/realisation.css';

const SINGLE_IMAGE_SRC = 'https://res.cloudinary.com/dnojcwwos/image/upload/v1790159653/vector_o7xzwn.webp';

export default function IlsNousFontConfiance() {
  return (
    <div className="ils-nous-font-confiance" style={{ margin: '0 auto' }}>
      <h2>ILS PLONGENT AVEC NOUS</h2>

      <div className="confiance-single-image">
        <img
          src={SINGLE_IMAGE_SRC}
          alt="Vector"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

  );
}
