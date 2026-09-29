import React from 'react'
import { createRoot } from 'react-dom/client'
import Maison from '../components/maison/Maison.jsx'
import '../styles/application.css'
import '../styles/maison.css'
import '../styles/responsive.css'

window.React = React

function mountMaison() {
  const container = document.getElementById('maison-root')
  if (container) {
    if (!window._maisonReactRoot) {
      window._maisonReactRoot = createRoot(container)
    }
    window._maisonReactRoot.render(<Maison />)
  }
}

mountMaison()
