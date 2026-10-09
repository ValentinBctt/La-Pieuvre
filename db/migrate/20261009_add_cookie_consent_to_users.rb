class AddCookieConsentToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :cookie_consent_accepted, :boolean, default: false
  end
end
