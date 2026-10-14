class AddDateToBureauProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :bureau_projects, :date, :integer
  end
end
