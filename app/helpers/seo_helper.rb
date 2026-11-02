module SeoHelper
  SITE_NAME = "La Pieuvre".freeze
  DEFAULT_DESCRIPTION = "La Pieuvre, atelier print & event : impression textile et prestations live.".freeze
  LOGO_URL = "https://res.cloudinary.com/dnojcwwos/image/upload/v1776416329/08a6a08d-1b8c-4227-8c88-718ef85ffe28.png".freeze

  # Plusieurs URL pointent vers le même contenu : on indexe une seule version.
  CANONICAL_PATHS = {
    "/atelier" => "/",
    "/activations" => "/activation"
  }.freeze

  def site_base_url
    return request.base_url unless Rails.env.production?

    "https://#{Rails.configuration.x.domains.atelier}"
  end

  def canonical_url
    path = CANONICAL_PATHS.fetch(request.path, request.path)
    "#{site_base_url}#{path}"
  end

  def meta_description
    @meta_description.presence || DEFAULT_DESCRIPTION
  end
end
