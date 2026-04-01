import React from 'react'
import { createRoot } from 'react-dom/client'
import Atelier from '../components/Atelier.jsx'
import '../styles/application.css'
import '../styles/selection-textile.css'
import '../styles/responsive.css'

window.React = React

function mountAtelier() {
  const container = document.getElementById('atelier-root');
  if (container) {
    if (!window._atelierReactRoot) {
      window._atelierReactRoot = createRoot(container);
    }
    window._atelierReactRoot.render(<Atelier />);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountAtelier);
} else {
  mountAtelier();
}