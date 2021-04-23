class Api::V1::ScoresController < ApplicationController
    def index
        scores = Score.all
        render json: scores
    end

    def show
        score = Score.find_by(id: params[:id])
        render json: score
    end

    def new
        score = Score.new
    end

    def create
        score = Score.create(params.require(:score).permit(:id, :p_score, :user_id, :song_id))
    end
end
