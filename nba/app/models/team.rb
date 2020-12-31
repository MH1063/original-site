class Team < ApplicationRecord
  validates :name, length: { maximum: 50 }, uniqueness: true
  validates :conference, length: { maximum: 50 }
  validates :division, length: { maximum: 50 }
  validates :founded, length: { maximum: 50 }
  validates :base, length: { maximum: 50 }
  validates :championship, length: { maximum: 50 }
  validates :arena, length: { maximum: 50 }, uniqueness: true
  validates :player1, length: { maximum: 50 }, uniqueness: true
  validates :player2, length: { maximum: 50 }, uniqueness: true
  validates :player3, length: { maximum: 50 }, uniqueness: true
  validates :player4, length: { maximum: 50 }, uniqueness: true
  validates :player5, length: { maximum: 50 }, uniqueness: true
  
  has_many :chats

  mount_uploader :logo_img, LogoUploader
  mount_uploader :arena_img, ArenaUploader
  mount_uploader :player1_img, Player1Uploader
  mount_uploader :player2_img, Player2Uploader
  mount_uploader :player3_img, Player3Uploader
  mount_uploader :player4_img, Player4Uploader
  mount_uploader :player5_img, Player5Uploader
end
