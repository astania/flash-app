class User < ApplicationRecord

    has_many :user_decks, dependent: :destroy
    has_many :decks, through: :user_decks

    accepts_nested_attributes_for :decks, :user_decks
   

end
