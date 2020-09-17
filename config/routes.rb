Rails.application.routes.draw do
  devise_for :users
  root "items#index"
  get "/items/" => "items#index"
  post "/items/" => "items#create"
  delete "/items/destroy/:name" => "items#destroy", as: "delete"
  patch "/items/" => "items#update"
  post "/items/daiso/:name" => "items#daiso", as: "daiso"
  
  get "practice" => "items#practice"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end