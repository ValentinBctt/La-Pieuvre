import React from "react";
import '../../styles/realisation.css';

const ImagesRealisations = [
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948034/36_PSG-HAKIMI_qahqj2.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948034/38_TOTEBAG_wjx7cz.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948033/35_PSG_gpayti.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948033/37_ULTIMATUM_qbl9cu.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948033/34_SDM-CARTIERSANTOS_ejcaat.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948033/28_SAUCED_zjrkes.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948033/30_JACK-DANIEL_wc7apn.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948033/32_DEGREMON_NIKE_ipjv6q.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948033/29_MONKEY_ihefok.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948033/33_SDM_MANGEUH_ft559t.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948033/31_JEUNEMORT_sru4oy.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948032/27_SDM_ZENITH_fqnc8t.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948032/26_PSG_DOHA_SWEAT_xqyhg4.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948032/25_SDM_METALICA_SWEAT_qegtap.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948032/22_PROVOST_hvg25d.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948032/24_ZUKOU_njhbmh.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948032/23_LESNICOIS_o0chst.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948031/18_OMARSY_mjegfx.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948031/21_VIOLET_hlxmqx.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948031/20_PSG_ARTBASEL_m7wxfh.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948031/19_SDM_OCHO_vy0jps.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948031/17_LALUCARNE_tf3h2o.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948031/12_MAISONCHATEAUROUGE_jximl8.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948031/15_DELIVEROO_l95ix6.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948031/16_JD_n7lnlq.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948031/14_BK_sm0xja.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948030/13_PHILARMONIE_s5ifse.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948030/10_FRERESDESBATIGNOLLES_gve2ct.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948030/09_SDM-LOGO_iuvle4.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948030/08_BACKTOTHEFUTUR_yau41j.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948030/07_PSG-DOHA_fadkhe.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948030/06_75E_uhtphz.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948030/01_TCHEKSPLAY_kwgmcj.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948030/05_PSG-TREMBLAY_qfzlx3.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948029/04_JOKERS_wndvt7.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948029/03_NAS_lsplra.webp',
  'https://res.cloudinary.com/dnojcwwos/image/upload/v1774948029/02_SDM-METALICA_fhj5ei.webp',

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