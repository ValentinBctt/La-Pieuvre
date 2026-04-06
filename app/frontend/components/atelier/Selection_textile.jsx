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
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468481/01_TSHIRT_rnwpr5.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468490/01_TSHIRT_jfczp1.webp"
  },
  {
    name: "Longsleeve",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774884714/0fce6926-7fcf-401c-b0b7-7ce86325a80c.png",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774885472/a5d01399-bf77-426a-84c7-58231f84d9c8.png"
  },
  {
    name: "Crewneck",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468482/03_CREWNECK_djrd3o.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468492/03_CREWNECK_vxhggx.webp"
  },

  {name: "Hoodie",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468482/04_HOODIE_tkntvs.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468491/04_HOODIE_bggcdv.webp"
   },

   {name: "Pant",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468482/05_PANTS_qnldxi.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468492/05_PANTS_udbb8n.webp"
   },

   {name: "Accessoires",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468482/06_TOTEBAG_sia2sa.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468492/06_TOTEBAG_kx2chb.webp"
   },

   {name: "Head-wear",
    image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468483/07_HEADWEAR_ylv0hg.webp",
    imageorange: "https://res.cloudinary.com/dnojcwwos/image/upload/v1775468493/07_HEADWEAR_ywjodv.webp"
   }





];

function TextileList() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
   <div
  style={{
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",   // permet de passer à la ligne si plus de place
    width: "95%",
    marginTop: "4rem"
  }}
>
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
            <div 

>
  <img
    src={isActive ? item.imageorange : item.image}
    alt={item.name}
    style={{
      height: item.name === "Head-wear" ? "70px" : "120px",
      transition: "0.3s ease"
    }}
  />
</div>
            <p style={{ color: isActive ? '#ff5a2f' : '#fff', transition: 'color 0.2s' }}>{item.name}</p>
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
>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="full-card">
            <div className="card">
              <img src={product.image} alt={product.title} />
              <p><strong>{product.title}</strong></p>

            </div>
            <div className="card-description">
              <p><strong>Réf : </strong> {product.ref}</p>
              <p><strong>Description : </strong> {product.desciption}</p>
              <div className="card-info">
              <p><strong>INFOS</strong></p>
              <p><strong>Tailles disponibles : </strong> {product.sizeavailable}</p>
              <p><strong>Grammage : </strong> {product.grammage}</p>
              <p><strong>Matière : </strong> {product.matiere}</p>
              <p><strong>Qualité : </strong> {product.qualité}</p>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}