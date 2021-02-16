class ApplicationController < ActionController::API
 
 
 #include ActionController::Cookies
 
 include ActionController::HttpAuthentication::Token::ControllerMethods

 #before_action :authenticate!
 
 
 private
 
 def authenticate!
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(token: token).present?
    end
 end

  def current_user
    @current_user ||= User.find_by(token: request.headers['Authorization'].split[1])
  end
  
 
  #def current_user
    #@current_user ||= User.find_by(id: params[:session][:user_id])
    #@current_user ||= User.find_by(id: session[:user_id]) #実際にブラウザで動かす時はこっちこのコードにしなければならない。理由、すでにruby側のsessionにデータが入っているから。。
  #end
 
  def counts(user)
    @count_chats = user.chats.count
    @count_followings = user.followings.count
    @count_followers = user.followers.count
    @count_favoritings = user.favoritings.count
    
    @followings = user.followings#js側で、follow,unfollowの仕分けをするために使う。
    @favoritings = user.favoritings#js側で、favorite,unfavoriteの仕分けをするために使う。
    
  end
end
