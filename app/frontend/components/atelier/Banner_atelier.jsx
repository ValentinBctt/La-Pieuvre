import react from "react";

export default function BannerAtelier() {
    return (      
        <div className="banner-atelier" style={{ position: 'relative' }}>
       <div className="banner-image">
        
  <img 
    src="https://res.cloudinary.com/dnojcwwos/image/upload/v1775468402/BANNI%C3%88RE_txwvfi.webp" 
    alt="Atelier Lapieuvre"
  />
  <div className="banner-overlay"></div>
</div>
            <div 
                className="banner-atelier-texte" 
                style={{ position: 'absolute', bottom: '40px', left: '40px', color: 'white', textAlign: 'left',  }}
            >
                <h1 className="banner-atelier-title" >PRINTING</h1>
                <p className="banner-atelier-subtitle" >Production et Activations</p>
            </div>
        </div>
    )
}