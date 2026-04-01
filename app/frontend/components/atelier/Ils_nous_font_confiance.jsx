
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
  {name: 'Brut.', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775048606/dcac92e2-f796-4b70-bea6-f3877b9f3388.png' },
  {name: 'La-Lucanre', src:'https://res.cloudinary.com/dnojcwwos/image/upload/v1775048755/c4a0e40e-9fcd-4c16-8f12-1335c0e1d728.png'}, 
  {name: '667', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775048837/1cf7e0a1-11db-4fd9-a897-81d6736c3da6.png'},
  {name: '75e-session', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775048905/557d2685-4701-4b49-ae06-7397810a7e5d.png'},
  {name:'SDM', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775048948/cce10a5d-e45e-46a4-8027-4ed8fdac7835.png'},
  {name: 'Tchekslpay', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775048989/bdd2bfbc-712e-47cb-9027-dd196c6a729e.png'},
  {name: 'Echo-banlieues', src:'https://res.cloudinary.com/dnojcwwos/image/upload/v1775049070/7806d3ae-a7ed-4a73-ba29-0f64e0611271.png'},
  {name: 'Philarmonie-de-Paris', src: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775049122/71de6470-96cf-4422-b7ed-27271179f00e.png'}


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