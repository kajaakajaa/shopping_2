class Item < ApplicationRecord
  belongs_to :user
  validates :name, length: { in: 0..15 }, presence: true, uniqueness: { scope: :user_id }, format: { with: /\A[^ |　]+\z/}
  validates :value, presence: true, format: { with: /\A[^0A-Za-z]+/i, message: '"数字" をご入力下さい (※又は、"0"のみの入力は出来ません)。'}
  validates :number, presence: true, format: { with: /\A[^A-Za-z]+/i, message: '"数字" をご入力下さい'}

  scope :desc_order, -> { order(created_at: :desc) }

  def self.detail(name, user_id, current_user)
    return self.find_by(:name => name, :user_id => current_user.id)
  end

  def self.rev_name(current_user, detail)
    if detail.user_id == current_user.id && detail.daiso == nil
      detail.daiso = detail.name.to_s
      detail.save
    elsif detail.user_id == current_user.id && detail.daiso != nil
      detail.update(daiso: nil)
    end
  end
  
end