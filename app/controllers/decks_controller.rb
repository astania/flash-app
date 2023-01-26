class DecksController < ApplicationController

      # skip_before_action :authorized, only: :create
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index 
    decks = Deck.all 
    render json: decks
  end 
  
  def create
    pp params
    deck = Deck.create!(public: params[:public], name: params[:name])
    user_deck = UserDeck.create!(deck_id: deck.id, user_id: params[:user_id]) 
    # params[:users].each{|user| UserDeck.create!(deck_id: deck.id, user_id: users[:id] )}
    deck_subject = DeckSubject.create!(deck_id: deck.id, subject_id: params[:subjects])
    params[:cards].each{|card| Card.create!(deck_id: deck.id, question: card[:question], answer: card[:answer])}
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
    params.require(:deck).permit(:public, :name, :subjects, :user_id, cards: [:id, :question, :answer])
  end 
  
  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end 

  def render_not_found_response(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :not_found
  end 
end
