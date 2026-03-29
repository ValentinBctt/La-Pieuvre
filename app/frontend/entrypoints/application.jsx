import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App.jsx'
import '../styles/application.css'
import '../styles/realisation.css';
import NosRealisationsAll from '../components/atelier/nos_réalisations/Nos_realisation_all.jsx'

// Rend React accessible globalement
window.React = React

document.addEventListener('DOMContentLoaded', () => {
  const realisationsRoot = document.getElementById('realisations-react-root')
  if (realisationsRoot) {
    createRoot(realisationsRoot).render(<NosRealisationsAll />)
    return
  }
  const root = document.getElementById('root')
  if (root) {
    createRoot(root).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
})


