class Item < ApplicationRecord
  validates :name, length: { in: 1..15 }
  validates :value, :number, presence: true
end
