class UsersController < ApplicationController

  wrap_parameters format: []
  # skip_before_action :authorized, only: :create
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index 
    users = User.all 
    render json: users, include: ['decks', 'decks.cards']
  end 
  
  # def create
  #   user = User.create!(user_params)
  #   if user.valid?
  #     session[:user_id] = user.id
  #     render json: user, status: :created
  #   end
  # end
  
  # GET '/me'
  def show
    find_user
    if @user
      render json: @user, include: ['decks', 'decks.cards']
    else
      render json: {messages: "No user found"}, status: :not_found
    end
  end

  def update 
    find_user
    added_deck = UserDeck.create!(deck_id: added_deck[:deck_id], user_id: added_deck[:user_id])
    if @user&.update!(user_params) 
      render json: @user, include: ['decks', 'decks.cards']
    end 
  end 

  def destroy 
    find_user
    if @user&.destroy 
      render json: {messages: "Record successfully destroyed"}
    end 
  end 

  private 

  def find_user 
    @user = User.find_by(id: session[:user_id])
  end 

  def user_params 
    params.permit(:email, :profile_image, decks: [:id, :cards, :public, :name, :users, :addedDeck],)
  end 
  
  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end 

  def render_not_found_response(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :not_found
  end 
      
end
