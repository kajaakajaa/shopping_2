class Item < ApplicationRecord
  validates :name, presence: true
  validates :value, presence: true
  validates :number, presence: true
end
