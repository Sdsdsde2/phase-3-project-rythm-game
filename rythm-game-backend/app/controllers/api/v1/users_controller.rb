class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def new
        user = User.new
    end

    def create
        user = User.create(params.require(:user).permit(:id, :username, :topScore, :level))
    end
end
