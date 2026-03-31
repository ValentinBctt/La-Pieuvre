import React from "react";
 import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const services = [
  {
    id: 1,
    title: "DTG",
    description: "L’impression DTG (Direct to Garment) est une technique moderne de marquage textile.Elle consiste à imprimer directement le motif sur le tissu à l’aide d’une imprimante spécifique.Idéale pour le coton et les textiles clairs, elle permet un rendu précis, doux au toucher et fidèle aux couleurs.",
    quantity: 30,
    colorLimit: "Aucune",
    productionTime: "7 à 12 jours ouvrés",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948034/01_DTF_e3meie.webp"
  },

  {
    id: 2,
    title: "Sérigraphie",
    description: "La sérigraphie, technique ancestrale d’impression à travers un pochoir (cadre/écran), offre des couleurs intenses et durables. Grâce à ses couches d’encre épaisses, elle garantit une grande résistance et reste associée à la qualité et au luxe.",
    quantity: 30,
    colorLimit: 6,
    productionTime: "7 à 12 jours ouvrés",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948034/02_SERIGRAPHIE_ceawot.webp"
  },

  {
    id: 3,
    title: "DTF",
    description: "L’impression DTF (Direct to Film) est une technique récente de marquage textile. Elle consiste à imprimer sur un film poudré puis à transférerle motif sur le tissu à la presse à chaud. Compatible avec la plupart des matières, elle est souple, durable et simple d’utilisation, remplaçant peu à peu les anciens flocages.",
    quantity: 20,
    colorLimit: "Aucune",
    productionTime: "7 à 12 jours ouvrés",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948034/03_DTF_hi4qph.webp"

  },

  {
    id: 4,
    title: "Broderie",
    description: "La broderie textile, savoir-faire artisanal de marquage par fils cousus directement dans la matière, apporte relief, précision et élégance. Grâce à la densité des points et à la qualité des fils, elle garantit une tenue exceptionnelle dans le temps et reste associée à la durabilité, au détail et au haut de gamme.",
    quantity: 20,
    colorLimit: "Aucune",
    productionTime: "7 à 12 jours ouvrés",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948034/04_BRODERIE_mqid4f.webp"
  },

  {
    id: 5,
    title: "Maillots",
    description: "L’impression sur maillots est une technique de marquage textile permettant de personnaliser les vêtements par flocage, transfert ou impression, avec un rendu net, durable et adapté aux tissus techniques, sans altérer le confort.",
    quantity: 20,
    colorLimit: "Aucune",
    productionTime: "7 à 12 jours ouvrés",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948034/05_MAILLOTS_aedz0f.webp"
  },

  {
    id: 6,
    title: "Étiquettes tissées",
    description: "Les étiquettes tissées sont une solution de marquage textile haut de gamme, tissée directement dans le fil, offrant un rendu précis, durable et résistant, idéal pour une identification de marque soignée.",
    quantity: 20,
    colorLimit: "Aucune",
    productionTime: "7 à 12 jours ouvrés",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948034/06_ETIQUETTES-TISSEES_y66uow.webp"
  },

  {
    id: 7,
    title: "Patch",
    description: "Les patchs sont une solution de marquage textile polyvalente, brodée ou imprimée, fixée par couture ou thermocollage, offrant un rendu durable, distinctif et apportant du relief aux textiles.",
    quantity: 50,
    colorLimit: "Aucune",
    productionTime: "7 à 12 jours ouvrés",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948035/07_PATCH_mgpzfa.webp"
  }
]


  


  export default function NosServices() {
  return (
    <div className="nos-services">
        <h2>Nos services</h2>
        <Swiper
  modules={[Navigation, Pagination]}
  slidesPerView={1.4}        // 1 slide complète + 40% de la suivante
  centeredSlides={false}     // ne pas centrer la slide active
  spaceBetween={100}          // espace entre les slides
  loop={true}               // loop peut être false si tu veux aligner la première slide à gauche
  navigation
  pagination={{ clickable: true }}
  className="textile-swiper"
>
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="full-card">
            <div className="card-service">
              <div className="card-image-service">
             <img src={service.image} alt={service.title} />
              </div>
            </div>
            <div className="card-description">
             <h3>{service.title}</h3>
             <p>{service.description}</p>
             
              <div className="card-info">
       
              <p>Quantité minimum : {service.quantity}</p>
              <p>Limite de couleurs : {service.colorLimit}</p>
              <p>Temps de production : {service.productionTime}</p> 
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}