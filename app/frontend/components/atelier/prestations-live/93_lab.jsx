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
        image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948019/01_s6ktrs.webp',
        image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948019/08_btyoca.webp',
        image3: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948021/23_rcqoqk.webp',
        image4: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948021/18_hk1ckq.webp',
        image5: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948020/13_tzckc8.webp',
        image6: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948019/04_drunfa.webp'

  }
];

export default function Lab93() {
  return <PrestationLiveAll prestations={lab93Data} />;
}