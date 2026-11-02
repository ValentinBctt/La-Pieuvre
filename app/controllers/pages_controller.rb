class PagesController < ApplicationController
  layout 'home', only: [:home]

  LEGAL_META = {
    cookie_policy: ["Politique cookies", "Politique de cookies de La Pieuvre : gestion de vos préférences et des traceurs."],
    privacy_policy: ["Politique de confidentialité", "Politique de confidentialité de La Pieuvre : vos données personnelles et vos droits."],
    terms: ["Conditions générales", "Conditions générales de La Pieuvre."],
    accessibility: ["Accessibilité", "Déclaration d'accessibilité du site La Pieuvre."]
  }.freeze

  before_action :set_legal_meta, only: LEGAL_META.keys

  def set_legal_meta
    title, description = LEGAL_META.fetch(action_name.to_sym)
    @page_title = "La Pieuvre - #{title}"
    @meta_description = description
  end

  def home
  end

  def cookie_policy
  end

  def privacy_policy
  end

  def terms
  end

  def accessibility
  end
end
