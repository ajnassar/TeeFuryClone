TeeFuryClone::Application.routes.draw do
  get "static_pages/home"

  resources :users, :only => [:index, :create, :new, :show]
  resources :shirts, :only => [:index]

  root :to => "static_pages#home"
end
