import React from 'react';
import PrestationLiveAll from './Prestation_live_all';

const yamahaData = [
  {
    title: 'Yamaha x Union',
    client: 'Yamaha x Union',
    contexte: 'Lancement de produit',
    missions: 'Personnalisation textile - Sérigraphie - DTF',
      description: `Dans le cadre de l’événement En Y(amaha) organisé par Yamaha Sport à Union Jeunesse Internationale, le Bureau La Pieuvre a développé une identité graphique dédiée à la customisation live.
      \n
  En collaboration avec Youssouf F. et Clément Gicquel, une série complète d’assets graphiques a été conçue : typographies, pictogrammes, modules illustrés et compositions adaptables pour impression sérigraphique et DTF.\n
  Ces éléments ont été pensés pour fonctionner en système, permettre une personnalisation instantanée et garantir une cohérence visuelle forte avec l’univers Yamaha.\n
  Ce travail a servi de base à la production en direct opérée par Atelier La Pieuvre, offrant aux participants une palette variée de visuels exploitables sur place.`,
      image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/14_mnfyem.webp',
    image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/13_wpusxe.webp',
    image3: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/17_x7rj1j.webp',
    image4: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/10_l5fs5q.webp',
    image5: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948027/05_ckolci.webp',
    image6: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948027/02_rrwxbs.webp',
    image7: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/09_ii5fzb.webp',
  }
];

export default function Yamaha_x_union() {
  return <PrestationLiveAll prestations={yamahaData} />;
}