
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import '../../../styles/prestationlive.css';
import ContactForm from '../../ContactForm';
import NavbarAtelier from '../NavbarAtelier';

const defaultPrestations = [
  {
    title: 'Aucune prestation sélectionnée',
    client: null,
    contexte: null,
    missions: null,
    description: 'Veuillez choisir une prestation dans la liste.',
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null
  }
];

export default function PrestationLiveAll({ prestations }) {
  const data = Array.isArray(prestations) && prestations.length > 0 ? prestations : defaultPrestations;
  return (
    <>
    <NavbarAtelier />

    <div className="prestation-live">
      {data.map((presta, idx) => (
        <div className='prestation-live-content' key={idx}>
          <h1>{presta.title}</h1>
          <div className='info-presta'>
            <p><strong>Client:</strong> {presta.client || 'Non spécifié'}</p>
            <p className='contexte'><strong>Contexte:</strong> {presta.contexte || 'Non spécifié'}</p>
            <p><strong>Missions:</strong> {presta.missions || 'Non spécifié'}</p>
          </div>
          <div className="description">
          <p >{presta.description}</p>
          </div>
          <div className="scroll-container">
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={20}
              slidesPerView={2}
              scrollbar={{ draggable: true, hide: false }}
              style={{ padding: '1rem 0' }}
            >
              {[presta.image1, presta.image2, presta.image3, presta.image4, presta.image5]
                .filter(Boolean)
                .map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="scroll-item">
                      <img src={img} alt={presta.title} loading="lazy" />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        
      ))}
    </div>
    <ContactForm />
    </>
  );
}
