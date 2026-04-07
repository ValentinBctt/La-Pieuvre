class Product < ApplicationRecord
  belongs_to :category
  serialize :colors, Array

  before_validation :clean_colors
  # Décale les positions pour garantir l'unicité dans la catégorie
  before_save :shift_positions_in_category_if_needed

  private

  def clean_colors
    self.colors = Array(colors).map(&:strip).select { |c| c.match?(/\A#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/) }
  end

  def shift_positions_in_category_if_needed
    return if position.nil? || category_id.nil?
    # Si la position change ou si c'est un nouveau produit
    if new_record? || will_save_change_to_position? || will_save_change_to_category_id?
      Product.where('category_id = ? AND position >= ? AND id != ?', category_id, position, id || 0).order(position: :desc).each do |prod|
        prod.update_column(:position, prod.position + 1)
      end
    end
  end
end
