Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'atelier#index'
  get '/atelier', to: 'atelier#index'
  # Bureau et Maison : pages "en travaux" en attendant leur domaine
  get '/bureau', to: 'under_construction#show', defaults: { section: 'bureau' }
  get '/bureau/projects/:id', to: 'under_construction#show', defaults: { section: 'bureau' }
  get '/maison', to: 'under_construction#show', defaults: { section: 'maison' }
  get '/activation', to: 'atelier/activations#index'
  get '/activations', to: 'atelier/activations#index'
  get '/realisation', to: redirect('/atelier/realisations')
  get '/realisations', to: redirect('/atelier/realisations')
  get '/prestationlive/:name', to: 'prestationlive#show', as: :prestationlive
  get '/politique-cookies', to: 'pages#cookie_policy', as: :cookie_policy
  get '/politique-confidentialite', to: 'pages#privacy_policy', as: :privacy_policy
  get '/conditions-generales', to: 'pages#terms', as: :terms
  get '/accessibilite', to: 'pages#accessibility', as: :accessibility
  get '/sitemap.xml', to: 'sitemaps#show', defaults: { format: 'xml' }

  namespace :api do
    resources :contacts, only: [:create]
    resources :products, only: [:index]
    resources :showroom_items, only: [:index]
    resources :prestation_lives, only: [:index]
    post 'cookie_consent', to: 'cookie_consent#create'
    get 'cookie_consent', to: 'cookie_consent#show'
  end

  namespace :atelier do
    get 'activations', to: 'activations#index', as: :activations
    get 'prestationlive/:name', to: 'prestationlive#show', as: :prestationlive
    get 'realisations', to: 'realisations#index', as: :realisations
  end

  # Administration : uniquement sur le domaine Atelier en production
  admin_host = ->(req) do
    !Rails.env.production? || [Rails.configuration.x.domains.atelier, "www.#{Rails.configuration.x.domains.atelier}"].include?(req.host)
  end

  constraints(admin_host) do
    namespace :admin do
      resources :categories
      resources :products
      resources :showroom_items
      resources :prestation_lives
      resources :bureau_categories
      resources :bureau_projects
      root to: "categories#index"
    end
  end
end
