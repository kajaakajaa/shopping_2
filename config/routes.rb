Rails.application.routes.draw do
  devise_for :users
  root "items#index"
  get "/items/" => "items#index"
  post "/items/" => "items#create"
  delete "/items/update/:name" => "items#destroy", as: "delete"
  patch "/items/" => "items#update"
  
  get "practice" => "items#practice"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end