class FavoritesController < ApplicationController
  before_action :set_chat, only: [:destroy]
  def create
    chat = Chat.find(params[:chat_id])
    current_user.favorite(chat)
    render json: {message: 'favorite in success'}
  end

  #def destroy
    #chat = Chat.find(params[:data][:chat_id])
   # current_user.unfavorite(chat)
    #render json: {message: 'unfavorite in success'}
  #end
  
  def destroy
    current_user.unfavorite(@chat)
    render json: {message: 'unfavorite in success'}
  end
  
  
  private
    def set_chat
      @chat = Chat.find(params[:id])
    end
    
end
