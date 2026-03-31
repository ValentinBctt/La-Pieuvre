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
        image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948024/14_bfyqkd.webp',
        image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948024/12_uauekk.webp',
        image3: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948023/07_wfmy8x.webp',
        image4: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948024/10_vemct9.webp',
        image5: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948023/06_kozgns.webp',
        image6: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948023/03_atnjgw.webp'

  }
];

export default function PSG() {
  return <PrestationLiveAll prestations={psgData} />;
}