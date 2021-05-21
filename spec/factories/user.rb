FactoryBot.define do

    # Userモデルのテストデータを定義
    factory :kajaa, class: User do
      name 'Kajaa'
      admin true
    end
  
    factory :jaaka, class: User do
      name 'Jaaka'
      admin false
    end
  
  end