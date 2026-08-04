class RemoveImageColumnsFromCategoriesLate < ActiveRecord::Migration[7.0]
  def change
    return unless table_exists?(:categories)

    remove_column :categories, :image, :string, if_exists: true
    remove_column :categories, :imageorange, :string, if_exists: true
  end
end