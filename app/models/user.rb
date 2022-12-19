class User < ApplicationRecord
    has_secure_password

    has_many :user_decks, dependent: :destroy
    has_many :decks, through: :user_decks
    has_many :cards, through: :decks

end
