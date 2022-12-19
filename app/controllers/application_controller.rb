class ApplicationController < ActionController::API

    # inheriting from ActionController gives us the ability to define the actions within the controllers 
    include ActionController::Cookies

    # before_action :authorized

    def authorized
      return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
    end

end
