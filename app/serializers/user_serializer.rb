class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :profile_image

  has_many :decks
end
