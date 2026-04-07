	class Category < ApplicationRecord
		has_one_attached :image
		has_one_attached :imageorange

		# Décale les positions pour garantir l'unicité
		before_save :shift_positions_if_needed

		private

		def shift_positions_if_needed
			return if position.nil?
			# Si la position change ou si c'est une nouvelle catégorie
			if new_record? || will_save_change_to_position?
				Category.where('position >= ? AND id != ?', position, id || 0).order(position: :desc).each do |cat|
					cat.update_column(:position, cat.position + 1)
				end
			end
		end
	end
