class BureauProjectCategory < ApplicationRecord
  belongs_to :bureau_project
  belongs_to :bureau_category

  validates :bureau_category_id, uniqueness: { scope: :bureau_project_id }
end
