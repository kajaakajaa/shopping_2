class Item < ApplicationRecord
  validates :name, presence: true, length: { in: 1..20 }
  validates :value, presence: true, length: { in: 1..10}
  validates :number, presence: true, length: { in: 1..100 }
end
