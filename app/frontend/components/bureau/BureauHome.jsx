import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import NavbarBureau from "./NavbarBureau.jsx";

const ImagesBureauContainer = [
    {
        name: 'Paris-SaintGermain x FUTURA 2000',
        type : 'Merchandising - Personnalisation textile - DTF',
        image1: '/images/psg1.png',
        image2: '/images/psg2.png',
        text: 'L’Atelier La Pieuvre a eu le plaisir de collaborer avec le Paris Saint-Germain'

    },

       {
        name: 'Paris-SaintGermain x FUTURA 2000',
        type : 'Merchandising - Personnalisation textile - DTF',
        image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/psg1_qk5mtv.png',
        image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/psg2_qtdrr7.png',
        text: 'L’Atelier La Pieuvre a eu le plaisir de collaborer avec le Paris Saint-Germain'

    },

       {
        name: 'Paris-SaintGermain x FUTURA 2000',
        type : 'Merchandising - Personnalisation textile - DTF',
        image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/psg1_qk5mtv.png',
        image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/psg2_qtdrr7.png',
        text: 'L’Atelier La Pieuvre a eu le plaisir de collaborer avec le Paris Saint-Germain'

    },

       {
        name: 'Paris-SaintGermain x FUTURA 2000',
        type : 'Merchandising - Personnalisation textile - DTF',
        image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/psg1_qk5mtv.png',
        image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/psg2_qtdrr7.png',
        text: 'L’Atelier La Pieuvre a eu le plaisir de collaborer avec le Paris Saint-Germain'

    },

       {
        name: 'Paris-SaintGermain x FUTURA 2000',
        type : 'Merchandising - Personnalisation textile - DTF',
        image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/psg1_qk5mtv.png',
        image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/psg2_qtdrr7.png',
        text: 'L’Atelier La Pieuvre a eu le plaisir de collaborer avec le Paris Saint-Germain'

    },

       {
        name: 'Paris-SaintGermain x FUTURA 2000',
        type : 'Merchandising - Personnalisation textile - DTF',
        image1: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/psg1_qk5mtv.png',
        image2: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/psg2_qtdrr7.png',
        text: 'L’Atelier La Pieuvre a eu le plaisir de collaborer avec le Paris Saint-Germain'

    },


    
];

export default function BureauHome() {
  const [showSlider, setShowSlider] = useState(false);

  return (

    <>
    <NavbarBureau />
     
  
  <div className="bureau-home">

    <div className="bureau-nav-left">
            <a href="#">Branding</a>
            <a href="#">Photo</a>
            <a href="#">Merchandising</a>
            <a href="#">Graphic Design</a>
            <a href="#">Objets</a>

            <div className="bureau-nav-left-separator">
                <svg width="30%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
                    <line x1="0" y1="1" x2="100" y2="1" stroke="var(--grey)" strokeWidth="2" />
                    <defs>
                        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--grey)" stopOpacity="1" />
                            <stop offset="100%" stopColor="var(--grey)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <line x1="0" y1="1" x2="100" y2="1" stroke="url(#fadeGradient)" strokeWidth="2" />
                </svg>
            </div>

                <div></div>
            <a href="#">PSG</a>
            <a href="#">UJI x YAMAHA</a>
            <a href="#">SDM</a>
            <a href="#">FRERE DES BATIGNOLLES</a>
            <a href="#">STARTUP BANLIEUE</a>
            <a href="#">DELIVEROO</a>
            <a href="#">NOT FOUND MENTALITY x NIKE</a>
            <a href="#">PAC 18</a>
            <a href="#">TCHEKSPLAY</a>
    </div>

    <div className="bureau-home-container">
     
      {!showSlider ? (
        <div className="bureau-home-items-1">
          {ImagesBureauContainer.map((item, index) => (
            <div key={index} className="bureau-home-item">
              <div className="bureau-home-item-title">
                <p>{item.name} </p>
                <p>{item.type}</p>
              </div>
              <div className="bureau-home-images">
                <img className="bureau-home-image-1" src={item.image1} alt={item.name} />
                <img className="bureau-home-image-2" src={item.image2} alt={item.name} />
                <div className="bureau-item-hover">
                  <p>{item.name}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bureau-home-items-2">
          <Swiper
            modules={[]}
            spaceBetween={24}
            slidesPerView={1.3}
            loop={true}
            className="bureau-swiper"
          >
            {ImagesBureauContainer.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bureau-home-item-swiper">
                  <div className="bureau-home-item-title">
                    <p>{item.name}</p>
                    <p>{item.type}</p>
                  </div>
                  <div className="bureau-home-images-swiper">
                    <img className="bureau-home-image-1-swiper" src={item.image1} alt={item.name} />
                    <img className="bureau-home-image-2-swiper" src={item.image2} alt={item.name} />
                    <div className="bureau-item-hover">
                      <p>{item.name}</p>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
    
<div className="toggle-bureau" style={{ position: 'absolute', top: 60, right: 48, zIndex: 1000 }}>
  <button
    onClick={() => setShowSlider(s => !s)}
    style={{
      width: '48px',
      height: '48px',
      background: 'none',
      border: 'none',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 0,
    }}
    aria-label={showSlider ? 'Afficher le slider' : 'Afficher la grille'}
  >
    {showSlider ? (
      // Icône slider : 4 petits carrés
      <div style={{
        width: '24px',
        height: '24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '4px',
        margin: '0 auto',
      }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{
            width: '10px',
            height: '10px',
            background: '#bbb',
            borderRadius: '2px',
          }} />
        ))}
      </div>
    ) : (
      // Icône grille : un seul carré
      <div style={{
        width: '24px',
        height: '12px',
        background: '#bbb',
        borderRadius: '2px',
        transition: 'background 0.2s',
        display: 'block',
        margin: '0 auto',
      }} />
    )}
  </button>
</div>
  </div>
  </>
  );
  
}