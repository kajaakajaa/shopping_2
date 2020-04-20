class Item < ApplicationRecord
  validates :name, :value, :number, presence:{ message: "空欄では、ん無理！"}
  # validates :body, presence:{ message: "短いんじゃボケィ！！"}
end
