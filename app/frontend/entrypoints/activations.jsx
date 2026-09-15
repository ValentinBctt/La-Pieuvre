import React from 'react';
import { createRoot } from 'react-dom/client';
import Activations from '../components/atelier/Activations.jsx';
import '../styles/application.css';
import '../styles/responsive.css';

window.React = React;

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('activations-react-root'));
  root.render(<Activations />);
});
