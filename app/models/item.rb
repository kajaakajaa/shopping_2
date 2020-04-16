class Item < ApplicationRecord
  validates :name, :value, :number, presence: {message: "空欄では無理！"}
end
