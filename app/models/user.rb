class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         authentication_keys: [:name]

  # Validation pour le nom (obligatoire et unique)
  validates :name, presence: true, uniqueness: true

  # Désactiver l'email pour Devise
  def email_required?
    false
  end

  def email_changed?
    false
  end
end
