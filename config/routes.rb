TeeFuryClone::Application.routes.draw do
  get "static_pages/home"

  resource :session, :only => [:create, :destroy, :new]
  resources :users, :only => [:create, :new, :show]
  namespace "api", :defaults => { :format => :json } do
    resources :shirts, :only => [:show, :index, :create]
  end

  root :to => "static_pages#home"
end
