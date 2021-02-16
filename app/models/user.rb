class User < ApplicationRecord
  before_save { self.email.downcase! }
  validates :name, presence: true, length: { maximum: 50 }
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i },
                    uniqueness: { case_sensitive: false }
  validates :token, uniqueness: true
  has_secure_password
  has_secure_token
  
  has_many :chats, dependent: :destroy
  
  mount_uploader :like_player_img, PlayerUploader
  mount_uploader :like_team_img, TeamUploader
  mount_uploader :icon_img, IconUploader
  
  has_many :relationships, dependent: :destroy
  has_many :followings, through: :relationships, source: :follow, dependent: :destroy
  has_many :reverses_of_relationship, class_name: 'Relationship', foreign_key: 'follow_id', dependent: :destroy
  has_many :followers, through: :reverses_of_relationship, source: :user, dependent: :destroy
  
  has_many :favorites, dependent: :destroy
  has_many :favoritings, through: :favorites, source: :chat, dependent: :destroy
  
  def follow(other_user)
    unless self == other_user
      self.relationships.find_or_create_by(follow_id: other_user.id)
    end
  end

  def unfollow(other_user)
    relationship = self.relationships.find_by(follow_id: other_user.id)
    relationship.destroy if relationship
  end

  def following?(other_user)
    self.followings.include?(other_user)
  end
  
  def favorite(chat)
    self.favorites.find_or_create_by(chat_id: chat.id)
  end
  
  def unfavorite(chat)
    favorite = self.favorites.find_by(chat_id: chat.id)
    favorite.destroy if favorite
  end
  
  def favoriting?(chat)
    self.favoritings.include?(chat)
  end
end
