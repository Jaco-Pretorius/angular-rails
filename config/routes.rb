AngularRails::Application.routes.draw do
  get "todo/index"
  get "todo/add"
  get "todo/update"
  get "todo/delete"

  root :to => 'todo#index'
end
