class CardsController < ApplicationController
     # skip_before_action :authorized, only: :create
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index 
    cards = Card.all 
    render json: cards
  end 
  
  def create
    card = Card.create!(card_params)
    render json: card, status: :created
  end
  
  def show
    find_card
    if @card
      render json: @card
    end
  end


  def update 
    find_card
    if @card&.update!(card_params) 
      render json: @card
    end 
  end 

  def destroy 
    find_card
    if @card&.destroy 
      render json: {messages: "Record successfully destroyed"}
    end 
  end 

  private 

  def find_card
    @card = Card.find_by_id(params[:id])
  end 

  def card_params 
    params.permit(:question, :answer, :deck_id)
  end 
  
  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end 

  def render_not_found_response(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :not_found
  end 
end
