TeeFuryClone::Application.routes.draw do
  get "static_pages/home"

  resource :session, :only => [:create, :destroy, :new]
  resources :users, :only => [:index, :create, :new, :show]
  resources :shirts, :only => [:create]

  root :to => "static_pages#home"
end
