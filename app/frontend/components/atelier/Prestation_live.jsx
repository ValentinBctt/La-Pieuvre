import React from "react";

const prestations = [
  { name: 'Pac_118', label: 'Pac 118', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774886851/2bd3a08b-eda0-4b3b-87db-a38541b537a3.png" },
  { name: 'PSG', label: 'PSG', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774886851/2bd3a08b-eda0-4b3b-87db-a38541b537a3.png" },
  { name: 'Reebok', label: 'Reebok', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774886851/2bd3a08b-eda0-4b3b-87db-a38541b537a3.png" },
  { name: 'Yamaha_x_union', label: 'Yamaha x Union', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774886851/2bd3a08b-eda0-4b3b-87db-a38541b537a3.png" },
  { name: 'Station_F', label: 'Station F', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774886851/2bd3a08b-eda0-4b3b-87db-a38541b537a3.png" },
  { name: '93_lab', label: '93 Lab', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774886851/2bd3a08b-eda0-4b3b-87db-a38541b537a3.png" },
];

export default function PrestationLive() {
  return (
    <>
    <h2>Prestation live</h2>
    <div
      className="prestation-live"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <p>La Pieuvre propose des animations sur mesure lors d'événements extérieurs grâce à la personnalisation live.</p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '2rem',
          width: '80%',
        }}
      >
        {prestations.map((p) => (
          <a
            key={p.name}
            href={`/prestationlive/${p.name}`}
            className="prestation-card"
            style={{
              position: 'relative',
              width: '400px',
              height: '200px',
              overflow: 'hidden',
             
              cursor: 'pointer',
              display: 'block'
            }}
          >
            <img
              src={p.image}
              alt={p.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.3s ease'
              }}
            />
            <div className="overlay">
              {p.label}
            </div>
          </a>
        ))}
      </div>

      <style>
        {`
          .prestation-card .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.6);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.5rem;
            letter-spacing: 1px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .prestation-card:hover .overlay {
            opacity: 1;
          }
        `}
      </style>
    </div>
    </>
  );
}