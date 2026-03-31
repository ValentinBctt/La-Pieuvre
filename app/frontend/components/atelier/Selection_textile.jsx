import React from "react";
 import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function SelectionTextile() {
  const products = [
    { id: 1, 
      title: "Longsleeve 1", 
      image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png",
        ref: "LS 1",
        desciption:"Tee-shirt unisexe lourd à manches longues, conçu avec une coupe boxy qui offre une silhouette moderne et décontractée. ",
        sizeavailable: "XS, S, M, L, XL, XXL",
        grammage: "240g/m²",
        matiere: "100% coton",
        qualité: "3"
    },
    { id: 2, title: "Longsleeve 2", 
      image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png", 
       ref: "LS 1",
        desciption:"Tee-shirt unisexe lourd à manches longues, conçu avec une coupe boxy qui offre une silhouette moderne et décontractée. ",
        sizeavailable: "XS, S, M, L, XL, XXL",
        grammage: "240g/m²",
        matiere: "100% coton",
        qualité: "3" },
    { id: 3, title: "Longsleeve 3",
       image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png",
         ref: "LS 1",
        desciption:"Tee-shirt unisexe lourd à manches longues, conçu avec une coupe boxy qui offre une silhouette moderne et décontractée. ",
        sizeavailable: "XS, S, M, L, XL, XXL",
        grammage: "240g/m²",
        matiere: "100% coton",
        qualité: "3" },
    { id: 4, 
      title: "Longsleeve 4",
       image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png",
         ref: "LS 1",
        desciption:"Tee-shirt unisexe lourd à manches longues, conçu avec une coupe boxy qui offre une silhouette moderne et décontractée. ",
        sizeavailable: "XS, S, M, L, XL, XXL",
        grammage: "240g/m²",
        matiere: "100% coton",
        qualité: "3" },
  ];

 

const items = [
  {
    name: "T-shirt",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774884651/b5f9dd39-5160-4bd7-8070-ec537eb34b00.png",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774885291/bdcf460b-693d-46b8-a7fa-a32dab46c83b.png"
  },
  {
    name: "Lonsleeve",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774884714/0fce6926-7fcf-401c-b0b7-7ce86325a80c.png",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774885472/a5d01399-bf77-426a-84c7-58231f84d9c8.png"
  },
  {
    name: "Crewneck",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774886465/18d06266-3364-4b9d-b114-a3e921623f91.png",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774885533/ba5a5d9f-72f9-48ce-a50c-e203c3d19310.png"
  }
];

function TextileList() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ display: "flex", gap: "40px", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "4rem" }}>
      {items.map((item, index) => {
        const isActive = selected === index || hovered === index;

        return (
          <div
            key={index}
            onClick={() => setSelected(index)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              cursor: "pointer",
              textAlign: "center"
            }}
          >
            <img
              src={isActive ? item.imageorange : item.image}
              alt={item.name}
              style={{ width: "120px", transition: "0.3s ease" }}
            />
            <p style={{ color: isActive ? '#ff5a2f' : '#fff', fontWeight: isActive ? 'bold' : 'normal', transition: 'color 0.2s' }}>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

  return (
    <div className="selection-textile">
      <h2>Notre sélection de textile</h2>

      <TextileList />

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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="full-card">
            <div className="card">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>

            </div>
            <div className="card-description">
              <p>Réf : {product.ref}</p>
              <p>Description : {product.desciption}</p>
              <div className="card-info">
              <p>INFOS</p>
              <p>Tailles disponibles : {product.sizeavailable}</p>
              <p>Grammage : {product.grammage}</p>
              <p>Matière : {product.matiere}</p>
              <p>Qualité : {product.qualité}</p>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}