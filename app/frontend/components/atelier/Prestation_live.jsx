import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const prestations = [
  {
    name: 'Pac_118', label: 'Pac 118', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948022/01_PAC_c9t02l.png",
    client: 'PAC 118', contexte: 'Compétition sportive', missions: 'Personnalisation textile - Sérigraphie - DTF',
    description: `À l'occasion de la 6ᵉ édition de la Paris African Cup, organisée dans le 18ᵉ arrondissement de Paris, nous avons accompagné l'événement avec une prestation live de personnalisation textile, au cœur du quartier de la Goutte-d'Or.\nEn collaboration avec Nouvel Air et Maison Château Rouge, et en tant que sponsor de cette édition, nous avons conçu et réalisé les maillots des arbitres et des coachs des 24 équipes engagées.\nTout au long de la compétition, notre dispositif de personnalisation sur place a permis au public et aux participants de repartir avec des t-shirts uniques, réalisés en direct, renforçant l'identité collective et l'ancrage local de l'événement.`,
    images: ["https://res.cloudinary.com/dnojcwwos/image/upload/v1774948022/04_PAC_yom3ao.png", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948022/03_PAC_aatsqc.png", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948022/02_PAC_nbqscm.png", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948022/01_PAC_c9t02l.png"]
  },
  {
    name: 'PSG', label: 'PSG', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948024/14_bfyqkd.webp",
    client: 'PSG', contexte: 'Évènement caritatif', missions: 'Personnalisation textile - Sérigraphie - DTF',
    description: `Intervention réalisée au Parc des Princes dans le cadre des Cantines Solidaires, un événement associatif initié par PSG for Communities.\nUne sérigraphie en direct, en rouge et bleu, a été mise en place sur des tote bags distribués aux 1000 étudiants présents lors de l’événement.\nLe dispositif a été conçu comme une action à la fois productive et symbolique, associant fabrication sur site, identité visuelle forte et engagement solidaire.`,
    images: ["https://res.cloudinary.com/dnojcwwos/image/upload/v1774948024/14_bfyqkd.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948024/12_uauekk.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948023/07_wfmy8x.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948024/10_vemct9.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948023/06_kozgns.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948023/03_atnjgw.webp"]
  },
  {
    name: 'Reebok', label: 'Reebok', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948024/01_gujqad.webp",
    client: 'Reebok', contexte: 'Évenement promotionel', missions: 'Personnalisation textile - Sérigraphie - DTF',
    description: `Dans le cadre du lancement d’une nouvelle paire de running, la prestation live pour Reebok transforme l’espace en atelier de personnalisation en action. Sur place, le public découvre un dispositif de marquage et de personnalisation en temps réel, pensé pour prolonger l’identité du modèle et créer un lien direct avec le produit.\nChaque intervention met en avant le geste, la matière et le détail. Les participant·e·s peuvent personnaliser leur paire ou des supports textiles associés, assister aux différentes étapes du marquage et repartir avec une pièce unique, réalisée sous leurs yeux.`,
    images: ["https://res.cloudinary.com/dnojcwwos/image/upload/v1774948024/01_gujqad.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948025/04_dogdnf.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948025/02_oe1duh.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948025/03_jch3wd.webp"]
  },
  {
    name: 'Yamaha_x_union', label: 'Yamaha x Union', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/14_mnfyem.webp",
    client: 'Yamaha x Union', contexte: 'Lancement de produit', missions: 'Personnalisation textile - Sérigraphie - DTF',
    description: `Dans le cadre de l’événement En Y(amaha) organisé par Yamaha Sport à Union Jeunesse Internationale, le Bureau La Pieuvre a développé une identité graphique dédiée à la customisation live.\nEn collaboration avec Youssouf F. et Clément Gicquel, une série complète d’assets graphiques a été conçue : typographies, pictogrammes, modules illustrés et compositions adaptables pour impression sérigraphique et DTF.\nCes éléments ont été pensés pour fonctionner en système, permettre une personnalisation instantanée et garantir une cohérence visuelle forte avec l’univers Yamaha.\nCe travail a servi de base à la production en direct opérée par Atelier La Pieuvre, offrant aux participants une palette variée de visuels exploitables sur place.`,
    images: ["https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/14_mnfyem.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/13_wpusxe.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/17_x7rj1j.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/10_l5fs5q.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948027/05_ckolci.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948027/02_rrwxbs.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948028/09_ii5fzb.webp"]
  },
  {
    name: 'Station_F', label: 'Station F', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948026/07_rnpqcq.webp",
    client: 'Station F', contexte: 'Évenement promotionel', missions: 'Personnalisation textile - Sérigraphie - DTF',
    description: `Dans le cadre du lancement d’un événement organisé par Équipage Solidaire, nous avons fait de la serigraphie en live nous avons ensuite personnalisé des tote bags en direct, à l’aide de transferts DTF, pour des étudiants en situation de précarité.`,
    images: ["https://res.cloudinary.com/dnojcwwos/image/upload/v1774948025/01_b9qbtj.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948026/05_gtevkx.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948025/03_isr2i7.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948026/07_rnpqcq.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948026/04_ph6pbq.webp"]
  },
  {
    name: '93_lab', label: '93 Lab', image: "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948020/05_phjzou.webp",
    client: '93 Lab', contexte: 'Évènement Associatif', missions: 'Personnalisation textile - Sérigraphie - DTF',
    description: `Au 93 lab, nous avons eu le plaisir de guider des jeunes dans une découverte complète de la sérigraphie.\nChaque étape, du moodboard à l’impression textile, a été pensée pour les rendre acteurs du processus.\nUn atelier qui prouve que la créativité n’attend pas l’âge, mais qu’elle a besoin d’espace pour s’exprimer.\nOn est fiers d’avoir pu contribuer à cela. Merci à l’association pour cette initiative, et surtout aux jeunes, pour leur belle implication.`,
    images: ["https://res.cloudinary.com/dnojcwwos/image/upload/v1774948019/01_s6ktrs.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948019/08_btyoca.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948021/23_rcqoqk.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948021/18_hk1ckq.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948020/13_tzckc8.webp", "https://res.cloudinary.com/dnojcwwos/image/upload/v1774948019/04_drunfa.webp"]
  },
];

export default function PrestationLive() {
  const [hoveredPrestation, setHoveredPrestation] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const hoverTimer = useRef(null);
  const closeTimer = useRef(null);
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const popupRef = useRef(null);

  useEffect(() => () => {
    clearTimeout(hoverTimer.current);
    clearTimeout(closeTimer.current);
  }, []);

  const handleMouseEnter = (prestation, event) => {
    clearTimeout(hoverTimer.current);
    clearTimeout(closeTimer.current);
    setHoveredPrestation(prestation);
    setIsPopupVisible(false);
    setPopupPosition({ x: event.clientX, y: event.clientY });
    setCursorPosition({ x: event.clientX, y: event.clientY });
    cursorPositionRef.current = { x: event.clientX, y: event.clientY };
    hoverTimer.current = setTimeout(() => {
      setPopupPosition(cursorPositionRef.current);
      setIsPopupVisible(true);
    }, 600);
  };

  const handleMouseMove = (event) => {
    const nextPosition = { x: event.clientX, y: event.clientY };
    cursorPositionRef.current = nextPosition;
    setCursorPosition(nextPosition);
  };

  const handlePopupEnter = () => {
    clearTimeout(closeTimer.current);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    closeTimer.current = setTimeout(() => {
      setHoveredPrestation(null);
      setIsPopupVisible(false);
    }, 250);
  };

  useLayoutEffect(() => {
    if (!isPopupVisible || !popupRef.current) return;

    const popupRect = popupRef.current.getBoundingClientRect();
    const margin = 8;
    const maxLeft = Math.max(margin, window.innerWidth - popupRect.width - margin);
    const maxTop = Math.max(margin, window.innerHeight - popupRect.height - margin);
    const currentLeft = popupPosition.x + 6;
    const currentTop = popupPosition.y + 6;
    const nextPosition = {
      x: Math.min(Math.max(currentLeft, margin), maxLeft) - 6,
      y: Math.min(Math.max(currentTop, margin), maxTop) - 6
    };

    if (nextPosition.x !== popupPosition.x || nextPosition.y !== popupPosition.y) {
      setPopupPosition(nextPosition);
    }
  }, [isPopupVisible, popupPosition]);

  return (
    <>
    <h2>ACTIVATIONS</h2>
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
      <p>La Pieuvre propose des animations sur mesure lors <br /> d'événements extérieurs grâce à la personnalisation live.</p>

<div className="prestation-container">
  {prestations.map((p) => (
    <a
      key={p.name}
      href={`/prestationlive/${p.name}`}
      className="prestation-card"
      onMouseEnter={(event) => handleMouseEnter(p, event)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={p.image} alt={p.label} />
      <div className="overlay">{p.label}</div>
    </a>
  ))}
</div>

      {hoveredPrestation && !isPopupVisible && (
        <div
          className="prestation-hover-delay"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
          aria-hidden="true"
        />
      )}

      {hoveredPrestation && isPopupVisible && (
        <a
          ref={popupRef}
          className="prestation-hover-popup"
          href={`/prestationlive/${hoveredPrestation.name}`}
          style={{ left: popupPosition.x, top: popupPosition.y }}
          onMouseEnter={handlePopupEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3>{hoveredPrestation.label}</h3>
          <div className="prestation-hover-text">
            <p><strong>Client:</strong> {hoveredPrestation.client}</p>
            <p><strong>Contexte:</strong> {hoveredPrestation.contexte}</p>
            <p><strong>Missions:</strong> {hoveredPrestation.missions}</p>
            <p className="prestation-hover-description">{hoveredPrestation.description}</p>
          </div>
          <div className="prestation-hover-gallery">
            {hoveredPrestation.images.map((image, index) => (
              <img key={`${hoveredPrestation.name}-${index}`} src={image} alt={`${hoveredPrestation.label} ${index + 1}`} />
            ))}
          </div>
        </a>
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

          .prestation-card:hover {
            cursor: none;
          }

          .prestation-hover-delay,
          .prestation-hover-popup {
            position: fixed;
            z-index: 20;
          }

          .prestation-hover-delay {
            width: 24px;
            height: 24px;
            pointer-events: none;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: conic-gradient(var(--orange) var(--circle-progress), transparent 0);
            -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0);
            mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0);
            animation: prestation-hover-circle 0.6s linear forwards;
          }

          .prestation-hover-popup {
            display: block;
            width: min(680px, calc(100vw - 32px));
            max-height: calc(100vh - 32px);
            overflow: auto;
            box-sizing: border-box;
            padding: 1rem;
            color: #fff;
            font-size: 0.78rem;
            text-decoration: none;
            background: rgba(0, 0, 0, 0.94);
            border: 1px solid var(--orange);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
            text-align: left;
            transform: translate(6px, 6px);
            animation: prestation-hover-popup-in 0.2s ease-out both;
          }

          .prestation-hover-popup h3 {
            margin: 0 0 0.75rem;
            color: var(--orange);
            font-size: 1.1rem;
          }

          .prestation-hover-text {
            width: 100%;
            max-width: none;
          }

          .prestation-hover-text p {
            width: auto;
            margin: 0.35rem 0;
            text-align: left;
            line-height: 1.35;
          }

          .prestation-hover-text .prestation-hover-description {
            margin-top: 0.8rem;
            white-space: pre-line;
            font-size: 0.75rem;
          }

          .prestation-hover-gallery {
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 0.75rem;
            margin-top: 1rem;
            overflow-x: auto;
            padding-bottom: 0.35rem;
            scroll-snap-type: x mandatory;
          }

          .prestation-hover-gallery img {
            flex: 0 0 180px;
            display: block;
            width: 180px;
            height: 180px;
            object-fit: cover;
            scroll-snap-align: start;
          }

          @property --circle-progress {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
          }

          @keyframes prestation-hover-circle {
            0% { opacity: 0; --circle-progress: 0deg; }
            1% { opacity: 1; }
            100% { opacity: 1; --circle-progress: 360deg; }
          }

          @keyframes prestation-hover-popup-in {
            from { opacity: 0; transform: translate(6px, 10px); }
            to { opacity: 1; transform: translate(6px, 6px); }
          }
        `}
      </style>
    </div>
          <div className="voir-en-details-wrap">
            <a href="/activations" className="voir-en-details">
              VOIR PLUS
            </a>

            <svg
              className="voir-en-details-arrow"
              viewBox="0 0 12 12"
              aria-hidden="true"
              focusable="false"
            >
              <polygon points="2,1 10,6 2,11" />
            </svg>
          </div>
    </>
  );
}
