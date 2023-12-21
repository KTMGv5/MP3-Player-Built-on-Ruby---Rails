Rails.application.routes.draw do
  root 'home#index'
  
  get '/music', to: 'player#index', as: 'music'
end
