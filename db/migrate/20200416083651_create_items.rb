class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.integer :value, null: false
      t.integer :number, null: false
      t.string :daiso

      t.timestamps
    end
  end
end
