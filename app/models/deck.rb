class Deck < ApplicationRecord

    has_many :user_decks
    has_many :users, through: :user_decks

    has_many :deck_subjects
    has_many :subjects, through: :deck_subjects

    has_many :cards  

    accepts_nested_attributes_for :users, :user_decks, :deck_subjects, :subjects, :cards

    validates :subjects, :name, :cards, presence: true

    # belongs_to :creator, :foreign_key => "user_id", :class_name => "User"

end
