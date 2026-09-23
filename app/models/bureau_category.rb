class BureauCategory < ApplicationRecord
  enum :kind, { main: "main", project: "project" }

  has_many :bureau_projects, dependent: :restrict_with_error

  validates :name, presence: true, uniqueness: { scope: :kind }
  validates :kind, presence: true
end
