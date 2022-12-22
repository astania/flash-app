class DeckSubjectsController < ApplicationController
    def index 
        deck_subjects = DeckSubject.all 
        render json: deck_subjects
      end 
      
      def create
        deck_subject = DeckSubject.create!(deck_subject_params)
        render json: deck_subject, status: :created
      end
      
    
      def update 
        find_deck_subject
        if @deck_subject&.update!(deck_subject_params) 
          render json: @deck_subject
        end 
      end 
    
      def destroy 
        find_deck_subject
        if @deck_subject&.destroy 
          render json: {messages: "Record successfully destroyed"}
        end 
      end 
    
      private 
    
      def find_deck_subject
        @deck_subject = DeckSubject.find_by_id(params[:id])
      end 
    
      def subject_params 
        params.permit(:deck_id, :subject_id)
      end 
      
      def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end 
    
      def render_not_found_response(invalid)
        render json: {errors: invalid.record.errors.full_messages }, status: :not_found
      end 
end
