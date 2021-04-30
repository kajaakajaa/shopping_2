class UsersController < ApplicationController
    def index
        @user = User.all
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        redirect_to "/users/sign_in"
    end
end
