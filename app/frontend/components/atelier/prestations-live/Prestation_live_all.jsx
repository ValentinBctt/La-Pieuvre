
import React, { useEffect } from 'react';
import '../../../styles/prestationlive.css';
import ContactForm from '../../ContactForm';
import NavbarAtelier from '../NavbarAtelier';
import Confiance from "../Confiance-marquee.jsx";
import "../../../styles/realisation.css";

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

function buildSubtitle(presta) {
  const left = presta.missions || (presta.contexte ? `Activation ${presta.contexte.toLowerCase()}` : 'Activation live');
  const right = presta.client ? `En collaboration avec ${presta.client}` : null;
  return right ? `${left}. ${right}` : left;
}

export default function PrestationLiveAll({ prestations, loading = false }) {
  const emptyData = loading
    ? [{ ...defaultPrestations[0], title: 'Chargement des prestations...' }]
    : defaultPrestations;
  const data = Array.isArray(prestations) && prestations.length > 0 ? prestations : emptyData;

  useEffect(() => {
    if (!Array.isArray(prestations) || prestations.length === 0) return;

    const hash = decodeURIComponent(window.location.hash || '').replace('#', '');
    if (!hash) return;

    const anchorTarget = document.getElementById(hash);
    if (!anchorTarget) return;

    requestAnimationFrame(() => {
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [prestations]);

  return (
    <>
    <NavbarAtelier />

    <div className="prestation-live">
      {data.map((presta, idx) => (
        <div
          id={presta.anchor || `activation-${presta.id || idx}`}
          className='prestation-live-content'
          key={presta.id || idx}
        >
          <h1>{presta.title}</h1>
          <p className="activation-subtitle">{buildSubtitle(presta)}</p>
          <div className="description">
          <p >{presta.description}</p>
          </div>
          <div className="scroll-container">
            {Object.entries(presta)
              .filter(([key, value]) => /^image\d+$/.test(key) && Boolean(value))
              .sort(([leftKey], [rightKey]) => Number(leftKey.replace('image', '')) - Number(rightKey.replace('image', '')))
              .map(([, img], i) => (
                <div className="scroll-item" key={`${presta.id || idx}-${i}`}>
                  <img src={img} alt={presta.title} loading="lazy" decoding="async" />
                </div>
              ))}
          </div>
        </div>

      ))}
    </div>
    <Confiance />

    <ContactForm />
    </>
  );
}
