import React from "react";
import Realisation from "./Nos_realisations.jsx";

export default function BannerAtelier({ showroomImages = [] }) {
    return (
        <div className="banner-atelier" style={{ position: 'relative' }}>
       <div className="banner-image">

  <img
    src="https://res.cloudinary.com/dnojcwwos/image/upload/v1789465861/c2328aab24dba75d6b81b02ac1b86d7cb51c2956_posgol.gif"
    alt="Atelier Lapieuvre"
  />
  <div className="banner-overlay"></div>
</div>
            <div
                className="banner-atelier-texte"

            >
                <h1 className="banner-atelier-title" >PRINT & EVENT</h1>

            </div>

          <Realisation images={showroomImages} />
        </div>
    )
}
