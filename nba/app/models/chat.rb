class Chat < ApplicationRecord
  belongs_to :user
  belongs_to :team
  
  validates :content, presence: true, length: {maximum: 255}
  
  has_many :favorites, dependent: :destroy
  has_many :favoriter,through: :favorites, source: :user, dependent: :destroy
end
