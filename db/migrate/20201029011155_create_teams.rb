class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :logo_img
      t.string :conference
      t.string :division
      t.string :founded
      t.string :base
      t.string :championship
      t.string :arena
      t.string :arena_img
      t.string :player1
      t.string :player2
      t.string :player3
      t.string :player4
      t.string :player5
      t.string :player1_img
      t.string :player2_img
      t.string :player3_img
      t.string :player4_img
      t.string :player5_img

      t.timestamps
    end
  end
end
