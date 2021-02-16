class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy, :image_update]
  skip_before_action :authenticate!, only: [ :index, :show, :create, :image_update, :log_in ]

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
  #def create
    #@user = User.new(user_params)
    #if @user.save
      #session[:user_id] = @user.id
      #render json: @user, status: :created, location: @user
    #else
      #render json: @user.errors, status: :unprocessable_entity
    #end
  #end
  
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 400
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
  
  def image_update
    if @user.update(user_image_params)
      render json: @user, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
  
  #api用のtoken認証
  def log_in
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      render json: @user
    else
      render json: { errors: ['ログインに失敗しました'] }, status: 401
    end
  end
  
  def log_out
    render json: {message: "logout in success"}
  end
  
  def me
    render json: current_user
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
    
    def user_image_params
      params.permit(:like_player_img, :like_team_img, :icon_img)
    end
end
