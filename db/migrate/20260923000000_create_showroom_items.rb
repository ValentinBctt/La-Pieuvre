class CreateShowroomItems < ActiveRecord::Migration[7.0]
  def change
    create_table :showroom_items do |t|
      t.string :name, null: false
      t.string :subname, null: false
      t.string :type, null: false
      t.integer :order, null: false

      t.timestamps
    end
  end
end