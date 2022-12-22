class SubjectsController < ApplicationController
       # skip_before_action :authorized, only: :create
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index 
    subjects = Subject.all 
    render json: subjects
  end 
  
  def create
    subject = Subject.create!(subject_params)
    render json: subject, status: :created
  end
  

  def update 
    find_subject
    if @subject&.update!(subject_params) 
      render json: @subject
    end 
  end 

  def destroy 
    find_subject
    if @subject&.destroy 
      render json: {messages: "Record successfully destroyed"}
    end 
  end 

  private 

  def find_subject
    @subject = Subject.find_by_id(params[:id])
  end 

  def subject_params 
    params.permit(:name)
  end 
  
  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end 

  def render_not_found_response(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :not_found
  end 
end
