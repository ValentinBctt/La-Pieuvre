class PrestationLive < ApplicationRecord
  has_one_attached :image
  has_many_attached :photos

  validates :name, presence: true
  validates :missions, presence: true

  scope :ordered, -> { order(position: :asc, created_at: :asc) }
end
