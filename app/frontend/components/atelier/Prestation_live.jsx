import React from "react";

const prestations = [
  { name: 'Pac_118', label: 'Pac 118' },
  { name: 'PSG', label: 'PSG' },
  { name: 'Reebok', label: 'Reebok' },
  { name: 'Yamaha_x_union', label: 'Yamaha x Union' },
  { name: 'Station_F', label: 'Station F' },
  { name: '93_lab', label: '93 Lab' },
];
export default function PrestationLive() {
  return (
    <div className="prestation-live">
      <h2>Prestation live</h2>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {prestations.map((p) => (
          <a key={p.name} href={`/prestationlive/${p.name}`} style={{ margin: '0 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', textDecoration: 'none', color: 'inherit', background: 'none', border: 'none', cursor: 'pointer' }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'white' }}>{p.name}</span>
            {p.name}
          </a>
        ))}
      </div>
    </div>
  );
}