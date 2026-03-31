import React from 'react';
import PrestationLiveAll from './Prestation_live_all';

const reebokData = [
  {
    title: 'Reebok',
        client: 'Reebok',
    contexte: 'Évenement promotionel ',
    missions: 'Personnalisation textile - Sérigraphie - DTF',
    description: `Dans le cadre du lancement d’une nouvelle paire de running, la prestation live pour reebok transforme l’espace en atelier de personnalisation en action. Sur place, le public découvre un dispositif de marquage et de personnalisation en temps réel, pensé pour prolonger l’identité du modèle et créer un lien direct avec le produit.
Chaque intervention met en avant le geste, la matière et le détail. les participant·e·s peuvent personnaliser leur paire ou des supports textiles associés, assister aux différentes étapes du marquage et repartir avec une pièce unique, réalisée sous leurs yeux.`,
        image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948024/01_gujqad.webp',
        image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948025/04_dogdnf.webp',
        image3: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948025/02_oe1duh.webp',
        image4: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948025/03_jch3wd.webp',


  }
];

export default function Reebok() {
  return <PrestationLiveAll prestations={reebokData} />;
}