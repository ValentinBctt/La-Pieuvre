
import React from "react";
import '../../styles/realisation.css';

const ImagesConfiance = [
  {name: '92i', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857839/92i_eqy61e.png'},
  {name: 'care', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774974218/aef99492-3c4e-4b10-aea5-1e92d5ba5a50.png'},
  {name: 'handi-sport', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774974248/5258d799-5e18-49c7-b229-47f6c04d6030.png'},
  {name: 'Nike', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774974278/d24a4ad1-92d1-4127-8958-12a73e492509.png'},
  {name: 'PSG', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774974319/68b9e1dc-0fab-4b3e-b3f4-90118c6af7d5.png'},
  {name: 'UCPA', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774974349/bf624533-afca-4491-9f4a-ca6f3f5d03ce.png'},
  {name: 'Adidas', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774974381/3656618d-c91b-4ac2-8ab1-cd1b9224f877.png'},
  {name: 'Suez', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774974436/fbf73513-51ea-4bd4-802b-8d17c19ecd77.png'},
  {name: 'Paperboy', src : 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774974469/fe781a2f-8fee-4634-bb1a-0e7d1ce6e66b.png' }, 
];

export default function IlsNousFontConfiance() {
  // On duplique le tableau pour l'effet infini
  const images = [...ImagesConfiance, ...ImagesConfiance,...ImagesConfiance, ...ImagesConfiance,...ImagesConfiance, ...ImagesConfiance,...ImagesConfiance, ...ImagesConfiance];

  return (
    <div className="ils-nous-font-confiance" style={{ margin: '0 auto' }}>
      <h2>Ils nous font confiance</h2>
      <div className="marquee">
        <div className="marquee-content">
          {images.map((img, idx) => (
            <div className="realisations-image" key={idx}>
              <img src={img.src} alt={img.name || `Confiance ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}