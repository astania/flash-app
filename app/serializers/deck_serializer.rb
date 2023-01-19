class DeckSerializer < ActiveModel::Serializer
  attributes :id, :public, :name

  has_many :users
  has_many :cards
  has_many :subjects, through: :deck_subjects
  
end
