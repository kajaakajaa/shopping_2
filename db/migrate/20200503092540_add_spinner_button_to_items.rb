class AddSpinnerButtonToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :spinner_button, :integer
  end
end
