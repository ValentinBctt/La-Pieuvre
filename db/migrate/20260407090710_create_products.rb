class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.references :category, null: false, foreign_key: true
      t.string :image
      t.string :reference
      t.string :name
      t.string :subname
      t.text :description
      t.text :colors
      t.string :sizes_available
      t.string :grammage
      t.string :matiere
      t.string :quality
      t.integer :position

      t.timestamps
    end
  end
end
