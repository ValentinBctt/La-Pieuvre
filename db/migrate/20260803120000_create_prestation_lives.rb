class CreatePrestationLives < ActiveRecord::Migration[7.0]
  def change
    create_table :prestation_lives do |t|
      t.string :name
      t.string :client
      t.text :contexte
      t.text :missions
      t.text :texte
      t.integer :position

      t.timestamps
    end
  end
end
