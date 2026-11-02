class SitemapsController < ApplicationController
  # Pages publiques indexables. /bureau et /maison sont exclues tant qu'elles sont en travaux (noindex).
  PATHS = %w[/ /atelier/realisations /activation /politique-cookies /politique-confidentialite /conditions-generales /accessibilite].freeze

  def show
    expires_in 12.hours, public: true
    @paths = PATHS
  end
end
