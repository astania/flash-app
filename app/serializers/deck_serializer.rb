class DeckSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :subject_id, :public
end
