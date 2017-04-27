Rails.application.routes.draw do

  root 'application#index'



  post '/audios',         to: 'audios#create'
  get '/audios',          to: 'audios#index'
end
