import React from "react";
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TextileList from "./Selection_textile.jsx";

const items = [
  {
    name: "DTG",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469759/01_DTG_owkuvc.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469766/01_DTG_tncgns.webp"
  },
  {
    name: "Sérigraphie",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469760/02_SERIGRAPHIE_qpbspl.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469767/02_SERIGRAPHIE_nprrcq.webp"
  },
  {
    name: "DTF",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469760/03_DTF_l1zaom.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469768/03_DTF_ci0lss.webp"
  },
  {
    name: "Broderie",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469761/04_BRODERIE_zzrgiz.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469769/04_BRODERIE_fdhivd.webp"
  },
  {
    name: "Maillots",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469762/05_MAILLOTS_n94cpe.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469770/05_MAILLOTS_lfuwzc.webp"
  },
  {
    name: "Étiquettes tissées",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469763/06_ETIQUETTES_vuzbkf.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469771/06_ETIQUETTES_wvk3jb.webp"
  },
  {
    name: "Patch",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469764/07_PATCH_q9a7z0.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775469772/07_PATCH_ucf9aj.webp"
  }
];

const services = [
  {
    id: 1,
    title: "DTG",
    description: "L'impression DTG (Direct to Garment) est une technique moderne de marquage textile. Elle consiste à imprimer directement le motif sur le tissu à l'aide d'une imprimante spécifique. Idéale pour le coton et les textiles clairs, elle permet un rendu précis, doux au toucher et fidèle aux couleurs.",
    quantity: 30,
    colorLimit: "Aucune",
    productionTime: "7 à 12 jours ouvrés",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948034/01_DTF_e3meie.webp"
  },
  {
    id: 2,
    title: "Sérigraphie",
    description: "La sérigraphie, technique ancestrale d'impression à travers un pochoir (cadre/écran), offre des couleurs intenses et durables. Grâce à ses couches d'encre épaisses, elle garantit une grande résistance et reste associée à la qualité et au luxe.",
    quantity: 30,
    colorLimit: 6,
    productionTime: "7 à 12 jours ouvrés",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948034/02_SERIGRAPHIE_ceawot.webp"
  },
  {
    id: 3,
    title: "DTF",
    description: "L'impression DTF (Direct to Film) est une technique récente de marquage textile. Elle consiste à imprimer sur un film poudré puis à transférer le motif sur le tissu à la presse à chaud. Compatible avec la plupart des matières, elle est souple, durable et simple d'utilisation, remplaçant peu à peu les anciens flocages.",
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
    description: "L'impression sur maillots est une technique de marquage textile permettant de personnaliser les vêtements par flocage, transfert ou impression, avec un rendu net, durable et adapté aux tissus techniques, sans altérer le confort.",
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
];

export default function NosServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const swiperRef = useRef(null);

  // Quand on clique sur une icône → on slide vers la slide correspondante
  const handleItemClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); // slideToLoop car loop={true}
    }
  };

  // Quand le carousel change de slide → on met à jour l'icône active
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // realIndex pour gérer le mode loop
  };

  return (
    <>
      <div className="nos-services">
        <h2>Nos services</h2>

        {/* Liste des icônes */}
        <div style={{ display: "flex", gap: "40px", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "4rem", flexWrap: "wrap", }}>
          {items.map((item, index) => {
            const isActive = activeIndex === index || hovered === index;

            return (
              <div
                key={index}
                onClick={() => handleItemClick(index)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer", textAlign: "center" }}
              >
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", height: "120px",  }}>
                  <img
                    src={isActive ? item.imageorange : item.image}
                    alt={item.name}
                    style={{
                      height: item.name === "Head-wear" ? "70px" : "120px",
                      transition: "0.3s ease"
                    }}
                  />
                </div>
                <p style={{ color: isActive ? '#ff5a2f' : '#fff', transition: 'color 0.1s' }}>{item.name}</p>
              </div>
            );
          })}
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1.4}
          centeredSlides={false}
          spaceBetween={100}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="textile-swiper"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 }, // mobile
            768: { slidesPerView: 1.4, spaceBetween: 100 } // tablette et +
          }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}  // ← récupère l'instance Swiper
          onSlideChange={handleSlideChange}                        // ← sync icône → carousel
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
                  <h3><strong>{service.title}</strong></h3>
                  <p>{service.description}</p>
                  <div className="card-info">
                    <p><strong>Quantité minimum : </strong>{service.quantity}</p>
                    <p><strong>Limite de couleurs : </strong>{service.colorLimit}</p>
                    <p><strong>Temps de production : </strong>{service.productionTime}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}