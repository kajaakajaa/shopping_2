class AddDaisoToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :daiso, :string
  end
end
