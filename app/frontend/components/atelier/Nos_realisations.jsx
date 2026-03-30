import React from "react";
import '../../styles/realisation.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const ImagesRealisations = [
  {
    image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    image3: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    image4: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    image5: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
  },
  // Ajoute d'autres objets ici si besoin
];

export default function NosRealisations() {
  // Aplatit toutes les images dans un seul tableau pour le slider
  const allImages = ImagesRealisations.flatMap(item => [item.image1, item.image2, item.image3, item.image4, item.image5].filter(Boolean));

  return (
    <a href="/atelier/realisations" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="nos-realisations">
        <h2>Nos réalisations</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={6000}
          allowTouchMove={false}
          className="realisations-swiper"
        >
          {allImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="realisations-image">
                <img src={img} alt={`Réalisation ${idx + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </a>
  );
}