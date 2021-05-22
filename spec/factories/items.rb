FactoryBot.define do
  factory :item do
    sequence(:name) { |n| "kajaa#{n}" }
    # sequence(:value) {  }
    association :user
  end
end
