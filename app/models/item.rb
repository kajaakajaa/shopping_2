class Item < ApplicationRecord
  validates :name, :value, :number, presence: true
end
