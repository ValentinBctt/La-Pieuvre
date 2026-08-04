import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import PrestationLiveAll from '../components/atelier/prestations-live/Prestation_live_all.jsx';
import Pac_118 from '../components/atelier/prestations-live/Pac_118.jsx';
import PSG from '../components/atelier/prestations-live/PSG.jsx';
import Reebok from '../components/atelier/prestations-live/Reebok.jsx';
import Yamaha_x_union from '../components/atelier/prestations-live/Yamaha_x_union.jsx';
import Station_F from '../components/atelier/prestations-live/Station_F.jsx';
import Lab93 from '../components/atelier/prestations-live/93_lab.jsx';
import '../styles/application.css';
import '../styles/responsive.css'

const prestationsMap = {
  pac_118: Pac_118,
  psg: PSG,
  reebok: Reebok,
  yamaha_x_union: Yamaha_x_union,
  station_f: Station_F,
  '93_lab': Lab93,
};

function normalize(str = '') {
  return str.toLowerCase().replace(/[- ]/g, '_');
}

function PrestationLiveRouter() {
  const [prestations, setPrestations] = useState([]);
  const [loading, setLoading] = useState(true);
  const name = window.location.pathname.split('/').pop();
  const normalizedName = normalize(name);
  const Component = prestationsMap[normalizedName];

  useEffect(() => {
    if (Component || !/^\d+$/.test(name)) {
      setLoading(false);
      return;
    }

    fetch('/api/prestation_lives')
      .then((response) => response.json())
      .then((data) => {
        setPrestations(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [Component, name]);

  if (Component) {
    return <Component />;
  }

  if (loading) {
    return <PrestationLiveAll prestations={[]} />;
  }

  const matched = prestations.find((presta) => String(presta.id) === String(name));
  return <PrestationLiveAll prestations={matched ? [matched] : prestations} />;
}

window.React = React;

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root'));
  root.render(<PrestationLiveRouter />);
});
