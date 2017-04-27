Rails.application.routes.draw do

  root 'application#index'



  post '/audios',         to: 'audios#create'
end
