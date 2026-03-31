Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'pages#home'
  get '/atelier', to: 'atelier#index'
  get '/bureau', to: 'bureau#index'
  get '/prestationlive/:name', to: 'prestationlive#show', as: :prestationlive

  namespace :api do
  resources :contacts, only: [:create]
end

  namespace :atelier do
    get 'prestationlive/:name', to: 'prestationlive#show', as: :prestationlive
    get 'realisations', to: 'realisations#index', as: :realisations
  end
end
