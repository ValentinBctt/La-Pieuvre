import React from 'react';

import '../../../styles/prestationlive.css';
import client from 'react-dom/client';

const defaultPrestations = [
  {
    title: 'Aucune prestation sélectionnée',
    client: null,
    contexte: null,
    missions: null,
    description: 'Veuillez choisir une prestation dans la liste.',
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null
  }
];

export default function PrestationLiveAll({ prestations }) {
  const data = Array.isArray(prestations) && prestations.length > 0 ? prestations : defaultPrestations;
  return (
    <div className="prestation-live">
      {data.map((presta, idx) => (
        <div className='prestation-live-content'>

        <h1>{presta.title}</h1>
        <div className='info-presta'>
          <p><strong>Client:</strong> {presta.client || 'Non spécifié'}</p>
          <p className='contexte'><strong>Contexte:</strong> {presta.contexte || 'Non spécifié'}</p>
          <p><strong>Missions:</strong> {presta.missions || 'Non spécifié'}</p>
        </div>
              <p className="description">{presta.description}</p>
        <div className="scroll-container">
          {[presta.image1, presta.image2, presta.image3, presta.image4, presta.image5]
            .filter(Boolean)
            .map((img, i) => (
              <div className="scroll-item" key={i}>
                <img src={img} alt={presta.title} loading="lazy" />
              </div>
          ))}
        </div>
        </div>
    
      ))}
    </div>
  );
}
