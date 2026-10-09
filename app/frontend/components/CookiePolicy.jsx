import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="cookie-policy-container">
      <div className="cookie-policy-content">
        <h1>Politique de Cookies</h1>

        <section>
          <h2>1. Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez notre site web. 
            Les cookies nous permettent de reconnaître votre appareil et de mémoriser vos préférences.
          </p>
        </section>

        <section>
          <h2>2. Quels types de cookies utilisons-nous ?</h2>
          <ul>
            <li>
              <strong>Cookies essentiels :</strong> Nécessaires pour le fonctionnement du site (authentification, sécurité).
            </li>
            <li>
              <strong>Cookies analytiques :</strong> Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
            </li>
            <li>
              <strong>Cookies de préférence :</strong> Mémorisent vos choix et paramètres personnels.
            </li>
            <li>
              <strong>Cookies de marketing :</strong> Utilisés pour afficher des publicités pertinentes basées sur vos intérêts.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Comment gérer vos préférences de cookies ?</h2>
          <p>
            Vous pouvez contrôler les cookies à tout moment via les paramètres de votre navigateur. 
            Cependant, la désactivation de certains cookies peut affecter la fonctionnalité du site.
          </p>
        </section>

        <section>
          <h2>4. Consentement</h2>
          <p>
            En continuant à naviguer sur notre site après la notification de cookie, vous acceptez notre utilisation des cookies. 
            Vous pouvez modifier vos préférences à tout moment.
          </p>
        </section>

        <section>
          <h2>5. Contact</h2>
          <p>
            Pour toute question concernant notre politique de cookies, veuillez nous contacter à : contact@lapieuvre.fr
          </p>
        </section>
      </div>
    </div>
  );
}
