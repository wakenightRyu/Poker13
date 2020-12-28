class Player < ApplicationRecord
    has_one :hand
    has_many :cards 
    has_many :plays
end
