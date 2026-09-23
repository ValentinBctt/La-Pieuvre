require "administrate/base_dashboard"
require "administrate/field/active_storage"

class BureauProjectDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    name: Field::String,
    bureau_category: Field::BelongsTo,
    mission: Field::Text,
    contexte: Field::Text,
    client: Field::Text,
    description: Field::Text,
    main_image: Field::ActiveStorage.with_options(show_preview: true),
    photos: Field::ActiveStorage.with_options(show_preview: true),
    created_at: Field::DateTime,
    updated_at: Field::DateTime
  }.freeze

  COLLECTION_ATTRIBUTES = %i[id name bureau_category main_image].freeze
  SHOW_PAGE_ATTRIBUTES = %i[
    id name bureau_category main_image photos mission contexte client description created_at updated_at
  ].freeze
  FORM_ATTRIBUTES = %i[
    name bureau_category main_image photos mission contexte client description
  ].freeze
  COLLECTION_FILTERS = {}.freeze
end
