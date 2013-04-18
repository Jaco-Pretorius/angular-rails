AngularRails::Application.routes.draw do
  resources :todo, only: [:index, :create, :update, :destroy]

  root :to => 'todo#index'
end
