class BureauProjectCategory < ApplicationRecord
  belongs_to :bureau_project
  belongs_to :bureau_category

  validates :bureau_category_id, uniqueness: { scope: :bureau_project_id }

  after_commit :clear_bureau_cache

  private

  def clear_bureau_cache
    Rails.cache.delete('bureau_index')
  end
end
