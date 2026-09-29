import React, { useEffect, useState } from 'react';
import PrestationLiveAll from './prestations-live/Prestation_live_all';

function formatTitle(name = '') {
  return name.replace(/_/g, ' ');
}

function mapApiPrestationToActivation(prestation) {
  const photos = Array.isArray(prestation.photos) ? prestation.photos : [];
  const mapped = {
    id: prestation.id,
    anchor: `activation-${prestation.id}`,
    title: formatTitle(prestation.name),
    client: prestation.client,
    contexte: prestation.contexte,
    missions: prestation.missions,
    description: prestation.texte
  };

  photos.forEach((photo, index) => {
    mapped[`image${index + 1}`] = photo;
  });

  return mapped;
}

export default function Activations() {
  const [prestations, setPrestations] = useState(() => {
    // Essayer de charger depuis localStorage en priorité
    try {
      const cached = localStorage.getItem('activationPrestationsCache');
      return cached ? JSON.parse(cached) : [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadPrestations() {
      try {
        const response = await fetch('/api/prestation_lives');
        if (!response.ok) {
          setLoading(false);
          return;
        }

        const data = await response.json();
        if (!isMounted) return;

        const nextPrestations = Array.isArray(data) ? data.map(mapApiPrestationToActivation) : [];
        setPrestations(nextPrestations);
        
        // Mettre en cache pour les visites suivantes
        localStorage.setItem('activationPrestationsCache', JSON.stringify(nextPrestations));
        
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des activations:', error);
        if (!isMounted) return;
        setPrestations([]);
        setLoading(false);
      }
    }

    loadPrestations();

    return () => {
      isMounted = false;
    };
  }, []);

  return <PrestationLiveAll prestations={prestations} loading={loading} />;
}
