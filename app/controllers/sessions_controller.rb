class SessionsController < ApplicationController
  def create
    email = params[:session][:email].downcase
    password = params[:session][:password]
    if login(email, password)
      render json: {user: @user, message: "sign in success"}
    else
      render json: {message: "unauthorized"}
    end
  end

  #def destroy
    #email = params[:session][:email].downcase
    #password = params[:session][:password]
    #if logout(email, password)
      #render json: {session: user_id, message: "logout in success"}
      #render json: {message: "logout in success"}
    #else
      #render json: {message: "logout in fale"}
    #end
  #end
  
  def destroy
    session[:user_id] = nil
    render json: {message: "logout in success"}
  end
  
  private

  def login(email, password)
    @user = User.find_by(email: email)
    if @user && @user.authenticate(token, password)
      # ログイン成功
      session[:user_id] = @user.id
      return @user
      #return true
    else
      # ログイン失敗
      return false
    end
  end
  
  #def logout(email, password)
    #@user = User.find_by(email: email)
    #if @user && @user.authenticate(password)
      #ログアウト成功
      #session[:user_id] = nil
      #return true
    #else
      #ログアウト失敗
      #return false
    #end
  #end
end
