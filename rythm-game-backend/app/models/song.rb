class Song < ApplicationRecord
    belongs_to :score
    belongs_to :user
end
