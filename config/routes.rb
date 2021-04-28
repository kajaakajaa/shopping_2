Rails.application.routes.draw do
  root "items#index"
  devise_for :users
  devise_scope :user do
    get "users/sign_out" => "users/sessions#destroy"
  end

  scope :users do
    resources :items, only: %i[index create]
    patch "/items/" => "items#update"
    delete "/items/destroy/:name" => "items#destroy", as: "delete"
    post "/items/daiso/:name" => "items#daiso", as: "daiso"
  end

end