class BureauProject < ApplicationRecord
  belongs_to :bureau_category

  has_one_attached :main_image
  has_many_attached :photos

  validates :name, presence: true

  after_save :clear_bureau_cache
  after_destroy :clear_bureau_cache

  private

  def clear_bureau_cache
    Rails.cache.delete('bureau_index')
  end
end
