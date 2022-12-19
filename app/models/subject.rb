class Subject < ApplicationRecord
    has_many :deck_subjects
    has_many :decks, through: :deck_subjects

end
