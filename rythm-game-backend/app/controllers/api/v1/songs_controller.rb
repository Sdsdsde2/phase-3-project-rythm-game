class Api::V1::SongsController < ApplicationController
    def index
        songs = Song.all
        render json: songs
    end

    def show
        song = Song.find_by(id: params[:id])
        render json: score
    end
end
