class CardsController < ApplicationController

    def index
        cards = Card.all 
        
        render json: CardSerializer.new(cards)
    end

    

end
