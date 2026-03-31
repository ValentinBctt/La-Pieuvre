import React from 'react';
import PrestationLiveAll from './Prestation_live_all';


const pac118Data = [
  {
    title: 'PAC 118',
    client: 'PAC 118',
    contexte: 'Compétition sportive',
    missions: 'Personnalisation textile - Sérigraphie - DTF',
        description: `À l'occasion de la 6ᵉ édition de la Paris African Cup, organisée dans le 18ᵉ arrondissement de Paris, nous avons accompagné l'événement avec une prestation live de personnalisation textile, au cœur du quartier de la Goutte-d'Or.\n
    En collaboration avec Nouvel Air et Maison Château Rouge, et en tant que sponsor de cette édition, nous avons conçu et réalisé les maillots des arbitres et des coachs des 24 équipes engagées.
    Tout au long de la compétition, notre dispositif de personnalisation sur place a permis au public et aux participants de repartir avec des t-shirts uniques, réalisés en direct, renforçant l'identité collective et l'ancrage local de l'événement.`,
        image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948022/04_PAC_yom3ao.png',
        image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948022/03_PAC_aatsqc.png',
        image3: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948022/02_PAC_nbqscm.png',
        image4: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948022/01_PAC_c9t02l.png',
  

  }
];

export default function Pac_118() {
  return <PrestationLiveAll prestations={pac118Data} />;
}