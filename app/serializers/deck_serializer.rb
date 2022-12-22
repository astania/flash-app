class DeckSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :public, :name

  belongs_to :user
  has_many :cards
  has_many :deck_subjects
  has_many :subjects, through: :deck_subjects
  
end
