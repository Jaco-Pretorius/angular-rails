AngularRails::Application.routes.draw do
  get "todo/index"
  post "todo/add"
  put "todo/update"
  delete "todo/delete"

  root :to => 'todo#index'
end
