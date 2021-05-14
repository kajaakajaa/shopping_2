Rails.application.routes.draw do
  root "items#index"
  devise_for :users, controllers: {
    sessions: "users/sessions"
  }
  devise_scope :user do
    get "users/sign_out" => "users/sessions#destroy"
  end

  resources "users", only: %i[destroy]
  resources :items, only: %i[index create update destroy] do
      patch :daiso, on: :member
  end
end