require "administrate/base_dashboard"
require "administrate/field/active_storage"

class PrestationLiveDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    name: Field::String,
    client: Field::String,
    contexte: Field::Text,
    missions: Field::Text,
    texte: Field::Text,
    image: Field::ActiveStorage.with_options(show_preview: true),
    photos: Field::ActiveStorage.with_options(show_preview: true),
    position: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime
  }.freeze

  COLLECTION_ATTRIBUTES = %i[
    id
    name
    client
    image
  ].freeze

  SHOW_PAGE_ATTRIBUTES = %i[
    id
    name
    client
    contexte
    missions
    texte
    image
    photos
    position
    created_at
    updated_at
  ].freeze

  FORM_ATTRIBUTES = %i[
    name
    client
    contexte
    missions
    texte
    image
    photos
    position
  ].freeze

  COLLECTION_FILTERS = {}.freeze
end

PrestationLifeDashboard = PrestationLiveDashboard
