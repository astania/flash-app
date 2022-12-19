class DeckSubject < ApplicationRecord
    belongs_to :deck
    belongs_to :subject 
end
