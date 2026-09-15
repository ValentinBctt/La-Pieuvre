class CreateBureauCategoriesAndProjects < ActiveRecord::Migration[7.0]
  MAIN_CATEGORIES = ["Branding", "Photo", "Merchandising", "Graphic Design", "Objects"].freeze

  def change
    create_table :bureau_categories do |t|
      t.string :name, null: false
      t.string :kind, null: false
      t.timestamps
    end

    add_index :bureau_categories, [:name, :kind], unique: true

    create_table :bureau_projects do |t|
      t.references :bureau_category, null: false, foreign_key: true
      t.string :name, null: false
      t.text :mission
      t.text :contexte
      t.text :client
      t.text :description
      t.timestamps
    end

    reversible do |direction|
      direction.up do
        MAIN_CATEGORIES.each do |name|
          execute <<~SQL
            INSERT INTO bureau_categories (name, kind, created_at, updated_at)
            VALUES (#{connection.quote(name)}, 'main', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
          SQL
        end
      end
    end
  end
end
