Rails.application.routes.draw do
  resources :deck_subjects
  resources :user_decks
  resources :cards
  resources :decks
  resources :subjects
  resources :users

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'
  
  get '/me', to: 'users#show'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
