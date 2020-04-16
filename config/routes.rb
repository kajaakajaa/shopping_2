Rails.application.routes.draw do
  
  root "items#index"
  get "index" => "items#index"
  post 'create' => "items#create"
  delete 'destroy/:id' => "items#destroy", as: :destroy

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
