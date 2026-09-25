import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

function buildActivationAnchor(prestation) {
  return `activation-${prestation.id}`;
}

function buildLabel(name = "") {
  return name.replace(/_/g, " ");
}

function mapApiPrestation(prestation) {
  return {
    id: prestation.id,
    name: prestation.name,
    label: buildLabel(prestation.name),
    image: prestation.image,
    client: prestation.client,
    contexte: prestation.contexte,
    missions: prestation.missions,
    description: prestation.texte,
    images: Array.isArray(prestation.photos) ? prestation.photos : []
  };
}

export default function PrestationLive() {
  const [prestations, setPrestations] = useState([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    let isMounted = true;

    fetch('/api/prestation_lives')
      .then((response) => response.json())
      .then((data) => {
        if (!isMounted) return;
        const nextPrestations = Array.isArray(data) ? data.map(mapApiPrestation) : [];
        setPrestations(nextPrestations);
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setPrestations([]);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleMouseEnter = (prestation, event) => {

     if (isMobile) return;
     
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
  {prestations.slice(0, 6).map((p) => (
    <a
      key={p.id}
      href={`/activation#${buildActivationAnchor(p)}`}
      className="prestation-card"
      onMouseEnter={(event) => handleMouseEnter(p, event)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={p.image} alt={p.label} loading="lazy" decoding="async" />
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
          href={`/activation#${buildActivationAnchor(hoveredPrestation)}`}
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
              <img
                key={`${hoveredPrestation.name}-${index}`}
                src={image}
                alt={`${hoveredPrestation.label} ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </a>
      )}

      {!loading && prestations.length === 0 && (
        <p>Aucune prestation live disponible pour le moment.</p>
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
            scrollbar-width: thin;
            scrollbar-color: var(--orange) #000;
          }

          .prestation-hover-gallery::-webkit-scrollbar {
            height: 8px;
            background: #000;
          }

          .prestation-hover-gallery::-webkit-scrollbar-track {
            background: #000;
          }

          .prestation-hover-gallery::-webkit-scrollbar-thumb {
            background: var(--orange);
            border-radius: 999px;
            border: 1px solid #000;
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
            <a href="/activation" className="voir-en-details">
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
