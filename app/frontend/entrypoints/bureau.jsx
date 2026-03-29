import React from 'react'
import { createRoot } from 'react-dom/client'
import Bureau from '../components/Bureau.jsx'
import '../styles/application.css'
import '../styles/bureau-home.css';

window.React = React

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root'))
  root.render(<Bureau />)
})
