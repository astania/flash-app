class UserDeckSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :deck_id
end
