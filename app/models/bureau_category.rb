class BureauCategory < ApplicationRecord
  enum :kind, { main: "main", project: "project" }

  has_many :bureau_project_categories, dependent: :restrict_with_error
  has_many :bureau_projects, through: :bureau_project_categories

  validates :name, presence: true, uniqueness: { scope: :kind }
  validates :kind, presence: true
end
