class ChatsController < ApplicationController
  #before_action :require_user_logged_in おそらくフロンド側で実行可能なので、必要無い。
  before_action :correct_user, only: [:destroy]
  
  def index
    @chats = Chat.all.order(team_id: :desc)
    render json: @chats
  end

  def create
    @chat = current_user.chats.build(chat_params)
    if @chat.save
      render json: @chat, status: :created 
    else
      render json: @chat.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @chat.destroy
    render json: {message: "success in destroy"}
  end
  
  private
  
  def chat_params
    params.require(:chat).permit(:content, :team_id)
  end
  
  def correct_user
    @chat = current_user.chats.find_by(id: params[:id])
    unless @chat
      render json: {message: "fale"}
    end
  end
  
end