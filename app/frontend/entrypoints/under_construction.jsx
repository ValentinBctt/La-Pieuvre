import React from 'react'
import { createRoot } from 'react-dom/client'
import UnderConstruction from '../components/UnderConstruction.jsx'
import '../styles/application.css'
import '../styles/responsive.css'
import '../styles/under-construction.css'

function mountUnderConstruction() {
  const container = document.getElementById('under-construction-root')
  if (container) {
    createRoot(container).render(<UnderConstruction section={container.dataset.section} />)
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountUnderConstruction)
} else {
  mountUnderConstruction()
}
