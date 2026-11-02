import React from "react";
import Realisation from "./Nos_realisations.jsx";

export default function BannerAtelier({ showroomImages = [] }) {
    return (
        <div>
        <div className="banner-atelier" style={{ position: 'relative' }}>
       <div className="banner-image">

  <img
    src="https://res.cloudinary.com/dnojcwwos/image/upload/v1793624976/LOGO-LPV-TONE-CROP_hfacl2.gif"
    alt="Atelier Lapieuvre"
    loading="eager"
    fetchPriority="high"
    decoding="async"
  />
  <div className="banner-overlay"></div>
</div>
            <div
                className="banner-atelier-texte"

            >
                <h1 className="banner-atelier-title" >PRINT & EVENT</h1>

            </div>

        </div>
        
          <Realisation images={showroomImages} />
        </div>
    )
}
