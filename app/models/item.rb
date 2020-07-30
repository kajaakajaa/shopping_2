class Item < ApplicationRecord
  validates :name, presence: true, length: { in: 1..15 }
  validates :value, :number, presence: true
end
