TeeFuryClone::Application.routes.draw do
  get "static_pages/home"
  get "api/shirts/custom"
  resources :charges
  resources :comments, :only => [:create]
  resource :session, :only => [:create, :destroy, :new]
  resources :users, :only => [:create, :new, :show]
  namespace "api", :defaults => { :format => :json } do
    resources :shirts, :only => [:show, :index, :create, :update]
  end

  root :to => "static_pages#home"
end
