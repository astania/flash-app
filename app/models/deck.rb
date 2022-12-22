class Deck < ApplicationRecord

    has_many :user_decks
    has_many :users, through: :user_decks

    has_many :deck_subjects
    has_many :subjects, through: :deck_subjects

    has_many :cards  

    # belongs_to :creator, :foreign_key => "user_id", :class_name => "User"

end
