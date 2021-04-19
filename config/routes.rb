Rails.application.routes.draw do
  devise_for :users, controllers: {
    # sessions: 'users/sessions',
    registrations: "users/registrations"
  }
  devise_scope :user do
    get "users/sign_out" => "users/sessions#destroy"
  end

  root "items#index"
  get "/items/" => "items#index"
  post "/items/" => "items#create"
  delete "/items/destroy/:name" => "items#destroy", as: "delete"
  patch "/items/" => "items#update"
  post "/items/daiso/:name" => "items#daiso", as: "daiso"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end