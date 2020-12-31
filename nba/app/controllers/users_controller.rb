class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy, :followings, :followers]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    counts(@user)
    #render json: @user
    render json: {user: @user, count_chats: @count_chats, count_followings: @count_followings, count_followers: @count_followers, count_favoritings: @count_favoritings, followings: @followings, favoritings: @favoritings}
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end
  
  def followings
    @followings = @user.followings
    counts(@user)
    #render json: @followings
    respond_to do |f|
      f.json { render json: {user: @user, count_chats: @count_chats, count_followings: @count_followings, count_followers: @count_followers, count_favoritings: @count_favoritings }}
    end
  end
  
  def followers
    @followers = @user.followers
    counts(@user)
    #render json: @followers
    respond_to do |f|
      f.json { render json: {user: @user, count_chats: @count_chats, count_followings: @count_followings, count_followers: @count_followers, count_favoritings: @count_favoritings }}
    end
  end
  
  def likes
    @favoritings = @user.favoritings
    counts(@user)
    #render json: @favoritings 
    respond_to do |f|
      f.json { render json: {user: @user, count_chats: @count_chats, count_followings: @count_followings, count_followers: @count_followers, count_favoritings: @count_favoritings }}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :self, :like_player, :like_team, :like_player_img, :like_team_img, :icon_img)
    end
    
end
