import React from "react";

import NavbarAtelier from "../NavbarAtelier";
import ContactForm from "../../ContactForm";

const ImagesRealisations = [
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    name: 'SDM',
    subname: 'Tee Shirt "JEUX d\'ECHEC"',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    name: 'SDM',
    subname: 'Tee Shirt "JEUX d\'ECHEC"',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    name: 'SDM',
    subname: 'Tee Shirt "JEUX d\'ECHEC"',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    name: 'SDM',
    subname: 'Tee Shirt "JEUX d\'ECHEC"',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    name: 'SDM',
    subname: 'Tee Shirt "JEUX d\'ECHEC"',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    name: 'SDM',
    subname: 'Tee Shirt "JEUX d\'ECHEC"',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    name: 'SDM',
    subname: 'Tee Shirt "JEUX d\'ECHEC"',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    name: 'SDM',
    subname: 'Tee Shirt "JEUX d\'ECHEC"',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    name: 'SDM',
    subname: 'Tee Shirt "JEUX d\'ECHEC"',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1774857840/tshirt_ajvjuj.png',
    name: 'SDM',
    subname: 'Tee Shirt "JEUX d\'ECHEC"',
    type: 'Sérigraphie'
  }
]

export default function NosRealisationsAll() {
    return (
      <>
        <NavbarAtelier />
        <div className="nos-realisations-all">
       

            <div className="realisation-on-title">
            <p>ATELIER LA PIEUVRE</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className="personalisation-text">
                  Confection_Personalisation_Events_Merchandising
</p>
                <p className="realisation-title-right">Selection_2024_2025</p>
            </div>
            </div>


            <div className="realisation-container">
                <h1 className="realisation-title">NOS REALISATIONS</h1>
                <div className="realisation-grid">
                    {ImagesRealisations.map((item, index) => (
                        <div key={index} className="realisation-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.subname}</p>
                            <p>{item.type}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <ContactForm />

        </>
    )
}