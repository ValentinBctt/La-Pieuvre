import React from 'react'

import BureauHome from './bureau/BureauHome.jsx'
import BureauProjectDetail from './bureau/BureauProjectDetail.jsx'
import ContactForm from './ContactForm.jsx'

export default function Bureau({ bureauData = { categories: [], projects: [] } }) {
  const isProjectDetail = window.location.pathname.startsWith('/bureau/projects/')

  return (
    <div className="bureau-page">
      {isProjectDetail ? <BureauProjectDetail /> : <><BureauHome bureauData={bureauData} /><ContactForm /></>}
    </div>
  )
}
