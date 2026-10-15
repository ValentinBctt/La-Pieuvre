class AddTitleHoverToBureauProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :bureau_projects, :title_hover, :string
  end
end
