class RelationshipsController < ApplicationController
  before_action :set_follow, only: [:destroy]
  def create
    user = User.find(params[:follow_id])
    current_user.follow(user)
    render json: {message: 'follow in success'}
  end

  #def destroy
    #user = User.find(params[:data][:follow_id])
    #current_user.unfollow(user)
    #render json: {message: 'unfollow in success'}
  #end
  
  def destroy
    current_user.unfollow(@user)
    render json: {message: 'unfollowe in success'}
  end
  
  
  private
    
    def set_follow
      @user = User.find(params[:id])
    end
end
