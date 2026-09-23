class ShowroomItem < ApplicationRecord
  self.inheritance_column = :_type_disabled

  validates :name, :subname, :type, presence: true
  validates :order, presence: true, numericality: { only_integer: true }
  validate :image_attached

  scope :ordered, -> { order(order: :asc, updated_at: :desc) }

  private

  def image_attached
    errors.add(:image, :blank) unless image.attached?
  end
end