class RemoveImageColumnsFromCategories < ActiveRecord::Migration[7.0]
  def change
    remove_column :categories, :image, :string
    remove_column :categories, :imageorange, :string
  end
end
