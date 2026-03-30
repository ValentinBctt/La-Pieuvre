class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  # Permet à tous les modèles d'avoir une image attachée
  has_one_attached :image
end
