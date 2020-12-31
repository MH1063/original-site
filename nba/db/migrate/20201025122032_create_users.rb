class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :self
      t.string :like_player
      t.string :like_team
      t.string :like_player_img
      t.string :like_team_img
      t.string :icon_img

      t.timestamps
    end
  end
end
