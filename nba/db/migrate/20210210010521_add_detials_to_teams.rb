class AddDetialsToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :player1_hw, :string
    add_column :teams, :player1_birth, :string
    add_column :teams, :player1_start, :string
    add_column :teams, :player1_pro, :string
    add_column :teams, :player2_hw, :string
    add_column :teams, :player2_birth, :string
    add_column :teams, :player2_start, :string
    add_column :teams, :player2_pro, :string
    add_column :teams, :player3_hw, :string
    add_column :teams, :player3_birth, :string
    add_column :teams, :player3_start, :string
    add_column :teams, :player3_pro, :string
    add_column :teams, :player4_hw, :string
    add_column :teams, :player4_birth, :string
    add_column :teams, :player4_start, :string
    add_column :teams, :player4_pro, :string
    add_column :teams, :player5_hw, :string
    add_column :teams, :player5_birth, :string
    add_column :teams, :player5_start, :string
    add_column :teams, :player5_pro, :string
  end
end
