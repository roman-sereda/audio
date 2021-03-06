class AudiosController < ApplicationController

  def index
    audios = Audio.all
    render json: { audios: audios }
  end

  def create
    audio = Audio.create(user_id: 1, uri: params[:audio])
    audio.save ? (render json: { audio: audio }) : (render json: { audio: '' })
  end


end
