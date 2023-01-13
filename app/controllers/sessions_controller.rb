class SessionsController < ApplicationController
    wrap_parameters format: []
    # skip_before_action :authorized, only: :create

    # DELETE '/logout'
    def destroy
        session.delete :user_id 
        head :no_content
    end

    # POST '/login'
    def create 
        user = User.find_or_create_by(email: params[:googleUser][:email], profile_image: params[:googleUser][:profile_image])
        session[:user_id] = user.id
        render json: user
    end 
end
