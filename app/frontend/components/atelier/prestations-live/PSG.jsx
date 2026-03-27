import React from 'react';
import PrestationLiveAll from './Prestation_live_all';

const psgData = [
  {
    title: 'PSG',
    client: 'PSG',
    contexte: 'Évènement caritatif',
    missions: 'Personnalisation textile - Sérigraphie - DTF',
    description: `Intervention réalisée au Parc des Princes dans le cadre des Cantines Solidaires,  un événement associatif initié par PSG for Communities.
Une sérigraphie en direct, en rouge et bleu, a été mise en place sur des tote bags distribués aux 1000 étudiants présents lors de l’événement.
Le dispositif a été conçu comme une action à la fois productive et symbolique,  associant fabrication sur site, identité visuelle forte et engagement solidaire.`,
        image1: '/vite-dev/images/pac118.png',
        image2: '/vite-dev/images/pac118.png',
        image3: '/vite-dev/images/pac118.png',
        image4: '/vite-dev/images/pac118.png',
        image5: '/vite-dev/images/pac118.png',

  }
];

export default function PSG() {
  return <PrestationLiveAll prestations={psgData} />;
}