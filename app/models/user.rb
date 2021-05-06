class User < ApplicationRecord
  has_many :items, dependent: :destroy
  validates_associated :items
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :timeoutable
end
