import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App.jsx'
import NosRealisationsAll from '../components/atelier/nos_réalisations/Nos_realisation_all.jsx'

// Mount
document.addEventListener('turbo:load', () => {
  const root = document.getElementById('root');
  const realisationsRoot = document.getElementById('realisations-react-root');

  if (realisationsRoot) {
    if (!realisationsRoot._reactRoot) {
      realisationsRoot._reactRoot = createRoot(realisationsRoot);
    }
    realisationsRoot._reactRoot.render(<NosRealisationsAll />);
  }

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