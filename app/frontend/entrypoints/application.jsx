import '../styles/application.css'
import '../styles/responsive.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App.jsx'
import NosRealisationsAll from '../components/atelier/nos_réalisations/Nos_realisation_all.jsx'

// Mount
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');


  if (root) {
    if (!root._reactRoot) {
      root._reactRoot = createRoot(root);
    }
    root._reactRoot.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
});

// Unmount (CRUCIAL)
document.addEventListener('turbo:before-render', () => {
  const root = document.getElementById('root');
  const realisationsRoot = document.getElementById('realisations-react-root');

  if (root?._reactRoot) {
    root._reactRoot.unmount();
    root._reactRoot = null;
  }

  if (realisationsRoot?._reactRoot) {
    realisationsRoot._reactRoot.unmount();
    realisationsRoot._reactRoot = null;
  }
});