class Item < ApplicationRecord
  validates :name, length: { in: 0..15 }, presence: true, uniqueness: true, format: { with: /\A[^ |　]+\z/}
  validates :value, presence: true, format: { with: /\A[^0A-Za-z]+/i, message: '"数字" をご入力下さい (※又は、"0"のみの入力は出来ません)。'}
  validates :number, presence: true, format: { with: /\A[^A-Za-z]+/i, message: '"数字" をご入力下さい'}
end