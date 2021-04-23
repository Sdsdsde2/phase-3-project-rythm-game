class User < ApplicationRecord
    has_many :songs
    has_many :scores, through: :songs
end
