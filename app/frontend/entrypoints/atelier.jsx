import React from 'react'
import { createRoot } from 'react-dom/client'
import Atelier from '../components/Atelier.jsx'
import '../styles/application.css'

window.React = React

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root'))
  root.render(<Atelier />)
})
