import React from "react";
import '../../styles/realisation.css';

const ImagesRealisations = [
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471153/01_TCHEKSPLAY_dcdfex.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471153/02_JEUX-DECHECS_hqyexq.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471159/03_mcr_nas_2x_e66hba.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471154/04_joker_2x_sd4xmg.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471156/05_TREMBLAY_71_2x_uslpmc.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471157/06_75e_2x_z7cjw5.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471160/07_psg_doha_2x_yguhfv.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471161/08_sdm_tour_btst_2x_barmbu.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471163/09_sdm_tour_lego_2x_zqddnh.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471164/10_fdb_2x_b2tmgk.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471166/11_degremont_2x_uvp1kw.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471167/12_mcr_nairobi_2x_lvdf6g.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471168/13_philharmonie_2x_nid1hr.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471170/14_bk_2x_lsopir.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471171/15_delivroo_2x_gu61lv.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471173/16_jdsport_2x_g6b2lv.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471174/17_la_lulu_2x_nzfgsb.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471176/18_omar_sy_2x_jil94k.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471177/19_sdm_2x_l8lvw0.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471178/20_psg_art_basel_2x_kxrqwt.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471180/21_franck_provost_2x_bk0cff.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471181/22_les_nicois_2x_mdzabt.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471183/23_metallica_2x_ok5rta.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471184/24_psg_doha_2_2x_eiqv4u.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471186/25_667_2x_zxugqb.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471188/26_sdm_bercy_2x_c6fe4x.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471189/27_sauced_2x_oqzlmx.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471191/28_monkey_2x_ujjzmk.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471191/29_jack_2x_nraxoy.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471193/30_degremont_2_2x_eeq4bg.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471194/31_ganso_2x_m5jy4n.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471196/32_cartiersantos_2x_bqb4he.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471197/33_sdm_mange_2x_g9okdo.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471198/34_hakimi_2x_y2hl5j.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471200/35_jeune_mort_2x_pc61rz.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471201/36_psg_icp_2x_hyh4ex.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471202/37_timal_2x_jrccvz.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1775471204/38_afrik_n_fusion_2x_vw9g3j.webp'

];

export default function NosRealisations() {

  const images = [...ImagesRealisations, ...ImagesRealisations];

  return (
    <a href="/atelier/realisations" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="nos-realisations">
        <h2>Nos réalisations</h2>
        <div className="marquee">
          <div className="marquee-content">
            {images.map((img, idx) => (
              <div className="realisations-image" key={idx}>
                <img src={img} alt={`Réalisation ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}