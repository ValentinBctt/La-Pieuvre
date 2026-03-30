import react from "react";

export default function BannerAtelier() {
    return (      
        <div className="banner-atelier" style={{ position: 'relative' }}>
            <img 
                src="https://res.cloudinary.com/dnojcwwos/image/upload/v1774857841/banner_u9uft4.png" 
                alt="Atelier Lapieuvre"
                style={{ width: '100%', height: '80vh', objectFit: 'cover', objectPosition: 'center 60%', filter: 'brightness(0.5)' }} 
            />
            <div 
                className="banner-atelier-texte" 
                style={{ position: 'absolute', bottom: '40px', left: '40px', color: 'white', textAlign: 'left' }}
            >
                <h1 className="banner-atelier-title">ENCREZ <br />VOTRE IMAGE.</h1>
                <p className="banner-atelier-subtitle">Agence de création numérique et de personnalisation textile.</p>
            </div>
        </div>
    )
}