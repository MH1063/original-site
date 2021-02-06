class TeamsController < ApplicationController
  before_action :set_team, only: [:show, :update]
  
  def index
    @teams = Team.all
    render json: @teams
  end

  
  def show
    render json: @team
  end
  
  def create
    @team = Team.new(team_params)
    if @team.save
      render json: @team, status: :created
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end
  
  def update
    if @team.update(team_params)
      render json: @team
    else
      render json: {message: 'false'}
    end
  end
  
  private
  
  def set_team
    @team = Team.find(params[:id])
  end
  
  def team_params
      params.require(:team).permit(:name, :logo_img, :conference, :division, :founded, :base, :championship, :arena, :arena_img, :player1, :player2, :player3, :player4, :player5, :player1_img, :player2_img, :player3_img, :player4_img, :player5_img)
  end
  
end