class ChatsController < ApplicationController
  before_action :correct_user, only: [:destroy]
  skip_before_action :authenticate!, only: [ :index, :show, ]
  
  def index
    @chats = Chat.where(team_id: params[:id])
    render :formats => :json
  end
  
  def show
    @chat = Chat.find(params[:id])
    
    render :formats => :json
  end

  def create
    @chat = current_user.chats.build(chat_params)
    if @chat.save
      render json: {message: 'chat in success'}
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
