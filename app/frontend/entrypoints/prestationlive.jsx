import React from 'react';
import { createRoot } from 'react-dom/client';
import { useParams } from 'react-router-dom';
import PrestationLiveAll from '../components/atelier/prestations-live/Prestation_live_all.jsx';
import Pac_118 from '../components/atelier/prestations-live/Pac_118.jsx';
import PSG from '../components/atelier/prestations-live/PSG.jsx';
import Reebok from '../components/atelier/prestations-live/Reebok.jsx';
import Yamaha_x_union from '../components/atelier/prestations-live/Yamaha_x_union.jsx';
import Station_F from '../components/atelier/prestations-live/Station_F.jsx';
import Lab93 from '../components/atelier/prestations-live/93_lab.jsx';
import '../styles/application.css';

const prestationsMap = {
  pac_118: Pac_118,
  psg: PSG,
  reebok: Reebok,
  yamaha_x_union: Yamaha_x_union,
  station_f: Station_F,
  '93_lab': Lab93,
};

function normalize(str) {
  return str.toLowerCase().replace(/[- ]/g, '_');
}

function PrestationLiveRouter() {
  const name = window.location.pathname.split('/').pop();
  const normalizedName = normalize(name);
  const Component = prestationsMap[normalizedName];
  return Component ? <Component /> : <PrestationLiveAll />;
}

window.React = React;

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root'));
  root.render(<PrestationLiveRouter />);
});
