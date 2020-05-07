Rails.application.routes.draw do
  
  root "items#index"
  get "items/" => "items#index"
  post "items/" => "items#create"
  delete "items/:id" => "items#destroy"
  patch "items/:id" => "items#update"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end