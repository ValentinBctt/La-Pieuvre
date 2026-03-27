import React from 'react';
import PrestationLiveAll from './Prestation_live_all';

const lab93Data = [
  {
    title: '93 Lab',
    client: '93 Lab',
    contexte: 'Évènement Associatif',
    missions: 'Personnalisation textile - Sérigraphie - DTF',
    description: `Au 93 lab, nous avons eu le plaisir de guider des jeunes dans une découverte complète de la sérigraphie.
Chaque étape, du moodboard à l’impression textile, a été pensée pour les rendre acteurs du processus.
Un atelier qui prouve que la créativité n’attend pas l’âge, mais qu’elle a besoin d’espace pour s’exprimer.
On est fiers d’avoir pu contribuer à cela.
Merci à l’association pour cette initiative, et surtout aux jeunes, pour leur belle implication.`,
        image1: '/vite-dev/images/pac118.png',
        image2: '/vite-dev/images/pac118.png',
        image3: '/vite-dev/images/pac118.png',
        image4: '/vite-dev/images/pac118.png',
        image5: '/vite-dev/images/pac118.png',

  }
];

export default function Lab93() {
  return <PrestationLiveAll prestations={lab93Data} />;
}