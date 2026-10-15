class BureauProject < ApplicationRecord
  has_many :bureau_project_categories, dependent: :destroy
  has_many :bureau_categories, through: :bureau_project_categories

  has_one_attached :main_image
  has_many_attached :photos

  validates :name, presence: true
  validates :bureau_categories, presence: true

  after_save :clear_bureau_cache
  after_destroy :clear_bureau_cache

  private

  def clear_bureau_cache
    Rails.cache.delete('bureau_index')
  end
end
