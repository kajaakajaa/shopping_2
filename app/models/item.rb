class Item < ApplicationRecord
  validates :name, length: { in: 0..15 }, presence: true, uniqueness: true, format: { with: /\A[^ |　]+\z/}
  validates :value, presence: true, format: { with: /\A[^0A-Za-z]+/i, message: '"数字" をご入力下さい (※又は、"0"のみの入力は出来ません)。'}
  validates :number, presence: true, format: { with: /\A[^A-Za-z]+/i, message: '"数字" をご入力下さい'}

  scope :desc_order, -> { all.order(created_at: :desc) }
  scope :detail, ->name { where(name: name) }
 
  def self.reve(details)
    details.each do |detail|
      binding.pry
      if detail.daiso == nil
        detail.daiso = detail.name.to_s
        detail.save
          redirect_to action: :index
      elsif detail.daiso == detail.name
          detail.update(daiso: nil)
        redirect_to action: :index
      end
    end
  end
end