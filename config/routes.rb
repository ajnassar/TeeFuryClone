TeeFuryClone::Application.routes.draw do
  get "static_pages/home"

  resource :session, :only => [:create, :destroy, :new]
  resources :users, :only => [:index, :create, :new, :show]
  resources :shirts, :only => [:create]
  namespace "api", :defaults => { :format => :json } do
    resources :shirts, :only => [:show, :index]
  end

  root :to => "static_pages#home"
end
