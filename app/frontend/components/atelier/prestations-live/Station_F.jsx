import React from 'react';
import PrestationLiveAll from './Prestation_live_all';

const stationFData = [
  {
    title: 'Station F',
           client: 'Station F',
    contexte: 'Évenement promotionel ',
    missions: 'Personnalisation textile - Sérigraphie - DTF',
    description: `Dans le cadre du lancement d’un événement organisé par Équipage Solidaire, nous avons fait de la serigraphie en live nous avons ensuite personnalisé des tote bags en direct, à l’aide de transferts DTF,  pour des étudiants en situation de précarité.`,
        image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948025/01_b9qbtj.webp',
        image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948026/05_gtevkx.webp',
        image3: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948025/03_isr2i7.webp',
        image4: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948026/07_rnpqcq.webp',
        image5: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948026/04_ph6pbq.webp',

  }
  
];

export default function Station_F() {
  return <PrestationLiveAll prestations={stationFData} />;
}