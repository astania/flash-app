class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :profile_image

  has_many :decks
end
