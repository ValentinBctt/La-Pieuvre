import React, { useEffect, useState } from "react";

export default function PrestationLive() {
  const [prestations, setPrestations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/prestation_lives")
      .then((response) => response.json())
      .then((data) => {
        setPrestations(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <h2>PRESTATION LIVE</h2>
      <div
        className="prestation-live"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem"
        }}
      >
        <p>
          La Pieuvre propose des animations sur mesure lors <br /> d'événements extérieurs grâce à la personnalisation live.
        </p>

        {loading ? (
          <p>Chargement des prestations...</p>
        ) : (
          <div className="prestation-container">
            {prestations.length === 0 ? (
              <p>Aucune prestation disponible pour le moment.</p>
            ) : (
              prestations.map((p) => (
                <a key={p.id} href={`/prestationlive/${p.id}`} className="prestation-card">
                  <img src={p.image || p.photos?.[0] || ""} alt={p.name} />
                  <div className="overlay">{p.name}</div>
                </a>
              ))
            )}
          </div>
        )}

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