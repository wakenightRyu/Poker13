class Play < ApplicationRecord
    has_many :card_plays
    has_many :cards, through: :card_plays
end
