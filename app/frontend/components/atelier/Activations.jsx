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
  const [prestations, setPrestations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch('/api/prestation_lives')
      .then((response) => response.json())
      .then((data) => {
        if (!isMounted) return;
        const nextPrestations = Array.isArray(data) ? data.map(mapApiPrestationToActivation) : [];
        setPrestations(nextPrestations);
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setPrestations([]);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return <PrestationLiveAll prestations={prestations} loading={loading} />;
}
