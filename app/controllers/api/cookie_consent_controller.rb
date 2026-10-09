class Api::CookieConsentController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  # GET /api/cookie_consent
  # Vérifie si l'utilisateur a déjà accepté/refusé les cookies
  def show
    if user_signed_in?
      # Si l'utilisateur est connecté, chercher son préférence en base
      accepted = current_user.cookie_consent_accepted || false
    else
      # Sinon, vérifier le cookie du navigateur
      accepted = cookies[:cookie_consent_accepted].present? && cookies[:cookie_consent_accepted] == 'true'
    end

    render json: { accepted: accepted }
  end

  # POST /api/cookie_consent
  # Enregistre le consentement de l'utilisateur
  def create
    accepted = params.fetch(:accepted, false)
    
    if user_signed_in?
      # Enregistrer la préférence en base pour les utilisateurs connectés
      current_user.update(cookie_consent_accepted: accepted)
      render json: { success: true, message: 'Consentement enregistré' }, status: :ok
    else
      # Enregistrer via cookie pour les visiteurs non connectés
      # Le cookie expire dans 1 an
      cookies[:cookie_consent_accepted] = {
        value: accepted.to_s,
        expires: 1.year.from_now,
        secure: Rails.env.production?,
        httponly: false
      }
      
      render json: { success: true, message: 'Consentement enregistré via cookie' }, status: :ok
    end
  rescue => e
    render json: { success: false, error: e.message }, status: :unprocessable_entity
  end
end
