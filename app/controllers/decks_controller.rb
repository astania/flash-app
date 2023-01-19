class DecksController < ApplicationController

      # skip_before_action :authorized, only: :create
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index 
    decks = Deck.all 
    render json: decks
  end 
  
  def create
    deck = Deck.create!(deck_params)
    render json: deck, status: :created
  end
  
  def show
    find_deck
    if @deck
      render json: @deck
    end
  end

  def public 
    public_decks = Deck.select{|deck| deck.public}
    render json: public_decks
  end 

  def update 
    find_deck
    if @deck&.update!(deck_params) 
      render json: @deck
    end 
  end 

  def destroy 
    find_deck
    if @deck&.destroy 
      render json: {messages: "Record successfully destroyed"}
    end 
  end 

  private 

  def find_deck 
    @deck = Deck.find_by_id(params[:id])
  end 

  def deck_params 
    params.permit(:public, :name)
  end 
  
  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end 

  def render_not_found_response(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :not_found
  end 
end
