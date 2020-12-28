class Card < ApplicationRecord
    include Rails.application.routes.url_helpers
    
    has_one_attached :front

    
   
end
