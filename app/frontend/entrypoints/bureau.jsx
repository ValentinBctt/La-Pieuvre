import React from 'react'
import { createRoot } from 'react-dom/client'
import Bureau from '../components/Bureau.jsx'
import '../styles/application.css'
import '../styles/bureau-home.css';

window.React = React

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  if (container) {
    if (!window._bureauReactRoot) {
      window._bureauReactRoot = createRoot(container);
    }
    window._bureauReactRoot.render(<Bureau />);
  }
});
