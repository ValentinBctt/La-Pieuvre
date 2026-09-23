Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'atelier#index'
  get '/atelier', to: 'atelier#index'
  get '/bureau', to: 'bureau#index'
  get '/bureau/projects/:id', to: 'bureau#show'
  get '/activation', to: 'atelier/activations#index'
  get '/activations', to: 'atelier/activations#index'
  get '/realisation', to: redirect('/atelier/realisations')
  get '/realisations', to: redirect('/atelier/realisations')
  get '/prestationlive/:name', to: 'prestationlive#show', as: :prestationlive

  namespace :api do
    resources :contacts, only: [:create]
    resources :products, only: [:index]
    get 'bureau', to: 'bureau#index'
    get 'bureau/projects/:id', to: 'bureau#show', as: :bureau_project
  end

  namespace :atelier do
    get 'activations', to: 'activations#index', as: :activations
    get 'prestationlive/:name', to: 'prestationlive#show', as: :prestationlive
    get 'realisations', to: 'realisations#index', as: :realisations
  end


namespace :admin do
  resources :categories
  resources :products
  resources :prestation_lives
  resources :bureau_categories
  resources :bureau_projects
  root to: "categories#index"
end

namespace :api do
  resources :prestation_lives, only: [:index]
end
end
