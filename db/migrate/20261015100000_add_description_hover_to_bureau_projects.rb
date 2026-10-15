class AddDescriptionHoverToBureauProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :bureau_projects, :description_hover, :text
  end
end
