class BureauProject < ApplicationRecord
  belongs_to :bureau_category

  has_one_attached :main_image
  has_many_attached :photos

  validates :name, presence: true
end
