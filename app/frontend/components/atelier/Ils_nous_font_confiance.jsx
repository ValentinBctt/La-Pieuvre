import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const ImagesConfiance = [
  '/images/92i.png',
  '/images/92i.png',
  '/images/92i.png',
  '/images/92i.png',
  '/images/92i.png',
  '/images/92i.png',
];

export default function IlsNousFontConfiance() {
  return (
    <div className="ils-nous-font-confiance" style={{ margin: '0 auto' }}>
        <h2>Ils nous font confiance</h2>
        <div className="confiance-container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '1rem', margin: '2rem 0' }}>
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
          {ImagesConfiance.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`Confiance ${idx + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </div>
  )
}