require "administrate/base_dashboard"

class BureauCategoryDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    name: Field::String,
    kind: Field::Select,
    bureau_projects: Field::HasMany,
    created_at: Field::DateTime,
    updated_at: Field::DateTime
  }.freeze

  COLLECTION_ATTRIBUTES = %i[id name kind bureau_projects].freeze
  SHOW_PAGE_ATTRIBUTES = %i[id name kind bureau_projects created_at updated_at].freeze
  FORM_ATTRIBUTES = %i[name kind].freeze
  COLLECTION_FILTERS = {}.freeze

  def display_resource(category)
    category.name
  end
end
