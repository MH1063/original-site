Rails.application.routes.draw do
  
    post 'favorites/create'
    delete 'favorites/destroy'
  
    post 'relationships/create'
    delete 'relationships/destroy'
  
    get 'chats/index'
    get 'chats/:id', to: 'chats#show'
    post 'chats/create'
    delete 'chats/destroy/:id', to: 'chats#destroy'
    
    get 'teams/index'
    get 'teams/:id', to: 'teams#show'
    post 'teams/create'
    put 'teams/:id', to: 'teams#update'
    
  
    post 'sessions/create'
    delete 'sessions/:id', to: 'sessions#destroy'
  
    resources :users do
      member do
        get :followings
        get :followers
        get :likes
        put :image_update
      end
    end
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

