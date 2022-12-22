class UserDecksController < ApplicationController

    def index 
        user_decks = UserDeck.all 
        render json: UserDecks
      end 
      
      def create
        user_deck = UserDeck.create!(user_deck_params)
        render json: user_deck, status: :created
      end
      
      def update 
        find_user_deck
        if @user_deck&.update!(user_deck_params) 
          render json: @user_deck
        end 
      end 
    
      def destroy 
        find_user_deck
        if @user_deck&.destroy 
          render json: {messages: "Record successfully destroyed"}
        end 
      end 
    
      private 
    
      def find_user_deck
        @user_deck = UserDeck.find_by_id(params[:id])
      end 
    
      def user_deck_params 
        params.permit(:user_id, :deck_id)
      end 
      
      def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end 
    
      def render_not_found_response(invalid)
        render json: {errors: invalid.record.errors.full_messages }, status: :not_found
      end 
end
