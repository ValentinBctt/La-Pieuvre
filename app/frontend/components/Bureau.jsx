import React from 'react'

import BureauHome from './bureau/BureauHome.jsx'
import BureauProjectDetail from './bureau/BureauProjectDetail.jsx'
import ContactForm from './ContactForm.jsx'

export default function Bureau() {
  const isProjectDetail = window.location.pathname.startsWith('/bureau/projects/')

  return (
    <div className="bureau-page">
      {isProjectDetail ? <BureauProjectDetail /> : <><BureauHome /><ContactForm /></>}
    </div>
  )
}
