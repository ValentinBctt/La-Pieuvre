import React from 'react'
import BannerAtelier from './atelier/Banner_atelier'
import IlsNousFontConfiance from './atelier/Ils_nous_font_confiance'
import SelectionTextile from './atelier/Selection_textile'
import NosServices from './atelier/Nos_services'
import NosRealisations from './atelier/Nos_realisations'
import PrestationLive from './atelier/Prestation_live'
import ContactezNous from './atelier/Contactez_nous'        


export default function Atelier() {
  return (
    <div className="atelier-page">
        <BannerAtelier />
        <IlsNousFontConfiance />
        <SelectionTextile />
        <NosServices />
        <NosRealisations />
        <PrestationLive />
        <ContactezNous />
       
    </div>
  )
}
