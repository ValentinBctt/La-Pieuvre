import React, { useState, useEffect } from 'react';
import '../styles/cookiepopup.css';

export default function CookiePopup() {
  const [showCookies, setShowCookies] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [themeColor, setThemeColor] = useState('atelier'); // 'atelier', 'bureau', 'maison'
  const [isClosing, setIsClosing] = useState(false);

  // Déterminer le thème selon la page actuelle
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname.includes('/maison')) {
      setThemeColor('maison');
    } else if (pathname.includes('/bureau')) {
      setThemeColor('bureau');
    } else {
      setThemeColor('atelier');
    }
  }, []);

  // Vérifier si les cookies ont déjà été acceptés
  useEffect(() => {
    const checkCookieConsent = async () => {
      try {
        const response = await fetch('/api/cookie_consent', {
          method: 'GET',
          credentials: 'include',
          headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.accepted) {
            setCookiesAccepted(true);
          } else {
            setShowCookies(true);
          }
        } else {
          setShowCookies(true);
        }
      } catch (error) {
        console.error('Erreur lors de la vérification des cookies:', error);
        setShowCookies(true);
      }
    };

    checkCookieConsent();
  }, []);

  const handleAcceptCookies = async () => {
    setIsClosing(true);
    setTimeout(async () => {
      try {
        const response = await fetch('/api/cookie_consent', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ accepted: true })
        });

        if (response.ok) {
          setCookiesAccepted(true);
          setShowCookies(false);
          // Optionnel : récharger la page ou rediriger vers des scripts d'analyse
        }
      } catch (error) {
        console.error('Erreur lors de l\'acceptation des cookies:', error);
      }
    }, 300); // Attendre la fin de l'animation
  };

  const handleRejectCookies = async () => {
    setIsClosing(true);
    setTimeout(async () => {
      try {
        await fetch('/api/cookie_consent', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ accepted: false })
        });

        setCookiesAccepted(false);
        setShowCookies(false);
      } catch (error) {
        console.error('Erreur lors du rejet des cookies:', error);
      }
    }, 300); // Attendre la fin de l'animation
  };

  if (!showCookies || cookiesAccepted) {
    return null;
  }

  return (
    <div className={`cookie-popup-overlay cookie-theme-${themeColor} ${isClosing ? 'closing' : ''}`}>
      <div className={`cookie-popup ${isClosing ? 'slideOut' : ''}`}>
        <div className="cookie-popup-content">
          <h3>🍪 Politique de Cookies</h3>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
            Ces cookies nous permettent d'analyser le trafic et de personnaliser le contenu.
          </p>
          <div className="cookie-popup-links">
            <a href="/politique-cookies" target="_blank" rel="noopener noreferrer">
              En savoir plus
            </a>
          </div>
        </div>

        <div className="cookie-popup-actions">
          <button 
            className="cookie-btn cookie-btn-reject"
            onClick={handleRejectCookies}
          >
            Refuser
          </button>
          <button 
            className="cookie-btn cookie-btn-accept"
            onClick={handleAcceptCookies}
          >
            Accepter tous
          </button>
        </div>
      </div>
    </div>
  );
}
