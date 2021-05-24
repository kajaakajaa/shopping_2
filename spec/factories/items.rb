FactoryBot.define do
  factory :item do
    sequence(:name) { |n| "kajaa#{n}" }

    association :user
  end
end
