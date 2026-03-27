import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App.jsx'
import '../styles/application.css'

// Rend React accessible globalement
window.React = React

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root'))
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})
