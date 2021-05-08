class AddReferenceToItems < ActiveRecord::Migration[6.0]
  def change
    add_reference :items, :user, null: false, foreign_key: true
    add_index :items, [:name, :user_id], unique: true
  end
end
