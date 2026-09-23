require "administrate/base_dashboard"
require "administrate/field/active_storage"

class ShowroomItemDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    image: Field::ActiveStorage.with_options(show_preview: true),
    name: Field::String,
    subname: Field::String,
    type: Field::String,
    order: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  COLLECTION_ATTRIBUTES = %i[
    id
    image
    name
    type
    order
  ].freeze

  SHOW_PAGE_ATTRIBUTES = %i[
    id
    image
    name
    subname
    type
    order
    created_at
    updated_at
  ].freeze

  FORM_ATTRIBUTES = %i[
    image
    name
    subname
    type
    order
  ].freeze

  COLLECTION_FILTERS = {}.freeze
end