class Item < ApplicationRecord
  belongs_to :user
  validates :name, length: { in: 0..15 }, presence: true, uniqueness: true, format: { with: /\A[^ |　]+\z/}
  validates :value, presence: true, format: { with: /\A[^0A-Za-z]+/i, message: '"数字" をご入力下さい (※又は、"0"のみの入力は出来ません)。'}
  validates :number, presence: true, format: { with: /\A[^A-Za-z]+/i, message: '"数字" をご入力下さい'}

  scope :desc_order, -> { all.order(created_at: :desc) }
  scope :detail, ->name { find_by(name: name) }

  def rev_name
    case self.daiso
    when nil
    self.daiso = self.name.to_s
      self.save
    when self.name
      self.update(daiso: nil)
    end
  end
  
end