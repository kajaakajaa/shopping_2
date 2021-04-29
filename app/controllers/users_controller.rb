class UsersController < ApplicationController
    def destroy
        @user = User.find(params[:id])
        @user.destroy
        redirect_to "/users/sign_in"
    end
end
