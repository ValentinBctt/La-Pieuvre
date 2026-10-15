class CreateBureauProjectCategories < ActiveRecord::Migration[7.0]
  def up
    create_table :bureau_project_categories do |t|
      t.references :bureau_project, null: false, foreign_key: true
      t.references :bureau_category, null: false, foreign_key: true
      t.timestamps
    end
    add_index :bureau_project_categories, %i[bureau_project_id bureau_category_id],
              unique: true, name: "index_bureau_project_categories_uniqueness"

    execute <<~SQL
      INSERT INTO bureau_project_categories (bureau_project_id, bureau_category_id, created_at, updated_at)
      SELECT id, bureau_category_id, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM bureau_projects
    SQL

    remove_foreign_key :bureau_projects, :bureau_categories
    remove_index :bureau_projects, :bureau_category_id
    remove_column :bureau_projects, :bureau_category_id
  end

  def down
    add_reference :bureau_projects, :bureau_category, null: true, foreign_key: true

    execute <<~SQL
      UPDATE bureau_projects
      SET bureau_category_id = (
        SELECT MIN(bureau_category_id) FROM bureau_project_categories
        WHERE bureau_project_categories.bureau_project_id = bureau_projects.id
      )
    SQL

    drop_table :bureau_project_categories
  end
end
