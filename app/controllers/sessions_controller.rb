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
        user = User.find_by(email: params[:googleUser][:email])
        pp session
        if user
            session[:user_id] = user.id
            render json: user
        else 
            render json: {errors: ["Invalid email or password"]}, status: :unauthorized
        end 

    end 
end
