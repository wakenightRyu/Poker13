Rails.application.routes.draw do
  
  get '/cards' => 'cards#index'
  
  resources :types
  resources :cards
  resources :hands
  resources :plays
  resources :players
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
