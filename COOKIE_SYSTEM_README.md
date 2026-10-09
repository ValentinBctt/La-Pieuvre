# Système de Gestion des Cookies 🍪

## Description
Un système complet de gestion des cookies avec frontend React et backend Rails. Permet aux utilisateurs d'accepter ou refuser les cookies avec persistance.

## Fichiers créés

### Frontend
- **`app/frontend/components/CookiePopup.jsx`** - Composant popup principal
- **`app/frontend/styles/cookiepopup.css`** - Styling du popup
- **`app/frontend/components/CookiePolicy.jsx`** - Page de politique de cookies

### Backend
- **`app/controllers/api/cookie_consent_controller.rb`** - Contrôleur API Rails
- **`config/routes.rb`** - Routes mises à jour
- **`db/migrate/20261009_add_cookie_consent_to_users.rb`** - Migration de base de données

## Installation

### 1. Appliquer la migration Rails
```bash
rails db:migrate
```

### 2. Importer le composant CookiePopup dans votre layout principal

Dans votre layout principal (par exemple `app/frontend/entrypoints/application.jsx`), ajoutez :

```jsx
import CookiePopup from '../components/CookiePopup';

// Dans votre composant principal :
<>
  <CookiePopup />
  {/* Reste du contenu */}
</>
```

### 3. Ajouter les routes pour la politique de cookies

Dans `config/routes.rb`, ajoutez :

```ruby
get '/politique-cookies', to: 'pages#cookie_policy' # ou votre page statique
```

Ou utilisez le composant React directement si vous avez un système de routing frontend.

## Fonctionnalités

✅ Popup animé avec effect de slide-up
✅ Stockage du consentement en cookie (visiteurs non connectés)
✅ Stockage en base de données (utilisateurs connectés)
✅ Vérification automatique du consentement au chargement
✅ Design responsive (mobile et desktop)
✅ Intégration avec Devise (utilisateurs)
✅ API RESTful pour la gestion des cookies

## Endpoints API

### GET /api/cookie_consent
Vérifie si l'utilisateur a accepté les cookies

**Réponse :**
```json
{
  "accepted": true
}
```

### POST /api/cookie_consent
Enregistre le choix de l'utilisateur

**Body :**
```json
{
  "accepted": true
}
```

**Réponse :**
```json
{
  "success": true,
  "message": "Consentement enregistré"
}
```

## Personnalisation

### Modifier le texte du popup
Éditez le contenu dans `app/frontend/components/CookiePopup.jsx`, section `cookie-popup-content`.

### Modifier les couleurs
Les couleurs utilisent les variables CSS du projet :
- `--orange` : couleur primaire
- `--black` : fond
- `--white` : texte principal
- `--grey` : texte secondaire

Modifiez dans `app/frontend/styles/cookiepopup.css`.

### Ajouter des analytics après consentement
Après `handleAcceptCookies()`, ajoutez votre script d'analytics :

```javascript
if (response.ok) {
  // Charger Google Analytics, Facebook Pixel, etc.
  loadAnalyticsScript();
  setCookiesAccepted(true);
  setShowCookies(false);
}
```

## Notes importantes

⚠️ **Sécurité** : Le contrôleur utilise `skip_before_action :verify_authenticity_token` pour POST. Assurez-vous que c'est intentionnel ou utilisez un token CSRF.

⚠️ **RGPD** : Ce système respecte le RGPD en demandant le consentement avant de charger les cookies non-essentiels.

⚠️ **Cookies essentiels** : Les cookies essentiels (CSRF, session) continuent de fonctionner même sans consentement.

## Exemple d'intégration avec Google Analytics

```jsx
// Dans CookiePopup.jsx, après handleAcceptCookies()

const loadGoogleAnalytics = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', 'YOUR_GA_ID');
};
```

## Support

Pour des questions ou problèmes, consultez la documentation du projet ou contactez le support.
