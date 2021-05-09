Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  root to: "static#home"
  get :logged_in, to: "sessions#logged_in"
end


