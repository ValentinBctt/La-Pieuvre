
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
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
    images: []
  }
];

function normalizePrestation(presta) {
  const images = [presta.image, ...(Array.isArray(presta.photos) ? presta.photos : [])]
    .filter(Boolean);

  return {
    title: presta.title || presta.name || 'Aucune prestation sélectionnée',
    client: presta.client || null,
    contexte: presta.contexte || null,
    missions: presta.missions || null,
    description: presta.description || presta.texte || 'Veuillez choisir une prestation dans la liste.',
    images
  };
}

export default function PrestationLiveAll({ prestations }) {
  const data = Array.isArray(prestations) && prestations.length > 0
    ? prestations.map(normalizePrestation)
    : defaultPrestations.map(normalizePrestation);

  return (
    <>
      <NavbarAtelier />

      <div className="prestation-live">
        {data.map((presta, idx) => (
          <div className="prestation-live-content" key={idx}>
            <h1>{presta.title}</h1>
         
            <div className="info-presta">
              <p><strong>Client:</strong> {presta.client || 'Non spécifié'}</p>
              <p className="contexte"><strong>Contexte:</strong> {presta.contexte || 'Non spécifié'}</p>
              <p><strong>Missions:</strong> {presta.missions || 'Non spécifié'}</p>
            </div>
            <div className="description">
              <p>{presta.description}</p>
            </div>
            {presta.images.length > 0 && (
              <div className="scroll-container">
                <Swiper
                  modules={[Scrollbar, Navigation]}
                  spaceBetween={20}
                  navigation
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 }
                  }}
                >
                  {presta.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="scroll-item">
                        <img src={img} alt={presta.title} loading="lazy" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        ))}
      </div>
      <ContactForm />
    </>
  );
}