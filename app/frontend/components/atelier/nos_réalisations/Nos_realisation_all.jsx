import React from "react";

import NavbarAtelier from "../NavbarAtelier";
import ContactForm from "../../ContactForm";

const ImagesRealisations = [
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471153/01_TCHEKSPLAY_dcdfex.webp',
    name: 'Tcheksplay',
    subname: 'Maillot de Foot “TCHEKSPLAY”',
    type: 'Confection'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471153/02_JEUX-DECHECS_hqyexq.webp',
    name: 'SDM',
    subname: 'Tee Shirt “JEUX D’ECHEC”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471159/03_mcr_nas_2x_e66hba.webp',
    name: 'MAISON CHATEAU ROUGE x NAS',
    subname: 'Tee Shirt “ILLMATIC”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471154/04_joker_2x_sd4xmg.webp',
    name: 'LES JOKERS',
    subname: 'Tee Shirt “LES JOKERS”',
    type: 'DTF'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471156/05_TREMBLAY_71_2x_uslpmc.webp',
    name: 'PSG x FUTURA 200',
    subname: 'Tee Shirt “TREMBLAY”',
    type: 'DTF'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471157/06_75e_2x_z7cjw5.webp',
    name: '75E SESSION',
    subname: 'Tee Shirt “75E SESSION”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471160/07_psg_doha_2x_yguhfv.webp',
    name: 'PSG ',
    subname: 'Tee-Shirt “PSG HOUSE DOHA”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471161/08_sdm_tour_btst_2x_barmbu.webp',
    name: 'SDM',
    subname: 'Tee Shirt “SDM TOUR”',
    type: 'DTF'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471163/09_sdm_tour_lego_2x_zqddnh.webp',
    name: 'SDM',
    subname: 'Tee Shirt “SDM TOUR”',
    type: 'DTF'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471164/10_fdb_2x_b2tmgk.webp',
    name: 'FRÈRES DES BATIGNOLLES',
    subname: 'Maillot de Foot “ULTRA BATI”',
    type: 'Confection'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471166/11_degremont_2x_uvp1kw.webp',
    name: 'DEGRÉMONT x NIKE',
    subname: 'Tee Shirt “RECREATION”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471167/12_mcr_nairobi_2x_lvdf6g.webp',
    name: 'MAISON CHATEAU ROUGE',
    subname: 'Longsleeve “NAIROBI”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471168/13_philharmonie_2x_nid1hr.webp',
    name: 'PHILHARMONIE DE PARIS',
    subname: 'Tee Shirt “PHILHARMONIE”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471170/14_bk_2x_lsopir.webp',
    name: 'BURGER KING x NETFLIX',
    subname: 'Tee Shirt “STRANGER THINGS”',
    type: 'DTF'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471171/15_delivroo_2x_gu61lv.webp',
    name: 'DELIVEROO',
    subname: 'Ensemble “HEIKO”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471173/16_jdsport_2x_g6b2lv.webp',
    name: 'JD SPORT',
    subname: 'Sweat Zip “STAFF”',
    type: 'DTF'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471174/17_la_lulu_2x_nzfgsb.webp',
    name: 'LA LUCARNE x ADIDAS',
    subname: 'Maillot de Foot “LA LUCARNE”',
    type: 'Flocage'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471176/18_omar_sy_2x_jil94k.webp',
    name: 'OMAR SY x PARIS BASKET',
    subname: 'Siège de Réalisateur',
    type: 'Broderie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471177/19_sdm_2x_l8lvw0.webp',
    name: 'SDM',
    subname: 'Maillot de Foot “ALVALM”',
    type: 'Confection'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471178/20_psg_art_basel_2x_kxrqwt.webp',
    name: 'PSG x ART BASEL',
    subname: 'Crewneck Collaboration',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471180/21_franck_provost_2x_bk0cff.webp',
    name: 'NORDINE GANSO',
    subname: 'Tee Shirt “ULTRAVIOLET”',
    type: 'DTF & Teinture'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471181/22_les_nicois_2x_mdzabt.webp',
    name: 'FRANCK PROVOST',
    subname: 'Chemise “Barber”',
    type: 'DTF'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471183/23_metallica_2x_ok5rta.webp',
    name: 'RICARD x LES NIÇOIS',
    subname: 'Tee Shirt “LES NIÇOIS”',
    type: 'DTF'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471184/24_psg_doha_2_2x_eiqv4u.webp',
    name: 'ZUUKOU MAYZIE 667',
    subname: 'Tee Shirt “MORDOR TOUR”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471186/25_667_2x_zxugqb.webp',
    name: 'SDM',
    subname: 'Sweatshirt “METALLICA”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471188/26_sdm_bercy_2x_c6fe4x.webp',
    name: 'PSG ',
    subname: 'Tee-Shirt “PSG HOUSE DOHA”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471189/27_sauced_2x_oqzlmx.webp',
    name: 'SDM',
    subname: 'Tee Shirt “BERCY”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471191/28_monkey_2x_ujjzmk.webp',
    name: 'SAUCED x HORS-D’OEUVRE',
    subname: 'Tee Shirt “BROOKLYN”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471191/29_jack_2x_nraxoy.webp',
    name: 'MONKEY SHOULDER',
    subname: 'Tee Shirt “MONKEY”',
    type: 'Broderie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471193/30_degremont_2_2x_eeq4bg.webp',
    name: 'JACK DANIEL’S',
    subname: 'Veste “JACK DANIEL’S”',
    type: 'Broderie & Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471194/31_ganso_2x_m5jy4n.webp',
    name: 'JEUNE MORT',
    subname: 'Sweat Zip “JEUNE MORT”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471196/32_cartiersantos_2x_bqb4he.webp',
    name: 'DEGRÉMONT x NIKE',
    subname: 'Tee Shirt “RECREATION”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471197/33_sdm_mange_2x_g9okdo.webp',
    name: 'SDM',
    subname: 'Tee Shirt “LA MANGEUH”',
    type: 'DTF'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471198/34_hakimi_2x_y2hl5j.webp',
    name: 'SDM',
    subname: 'Sweatshirt “CARTIER SANTOS”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471200/35_jeune_mort_2x_pc61rz.webp',
    name: 'PSG',
    subname: 'Crewneck “ICI C’EST PARIS”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471201/36_psg_icp_2x_hyh4ex.webp',
    name: 'PSG ',
    subname: 'Tee Shirt “HAKIMI”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471202/37_timal_2x_jrccvz.webp',
    name: 'TIMAL',
    subname: 'Sweatshirt “ULTIMATUM”',
    type: 'Sérigraphie'
  },
  {
    image: 'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471204/38_afrik_n_fusion_2x_vw9g3j.webp',
    name: 'AFRIK’N’FUSION',
    subname: 'Tôte Bag “LOVE AFRIK’N FOOD”',
    type: 'DTF'
  }
];

import { useEffect, useRef } from "react";

export default function NosRealisationsAll() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll(".realisation-item");

    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    };

    grid.addEventListener("pointermove", handleMouseMove);
    return () => grid.removeEventListener("pointermove", handleMouseMove);
  }, []);

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
          <div className="realisation-grid" ref={gridRef}
          >
            {ImagesRealisations.map((item, index) => (
              <div key={index} className="realisation-item"
                style={{ zIndex: "10" }}
                >
                <img src={item.image} alt={item.name} />
                <h3 style={{ zIndex: "10" }}><strong>{item.name}</strong></h3>
                <p style={{ zIndex: "10" }}>{item.subname}</p>
                <p style={{ fontStyle: "italic", zIndex: "10" }}>{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}