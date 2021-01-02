class Card < ApplicationRecord
    has_many :card_plays
    has_many :plays, through: :card_plays

end
