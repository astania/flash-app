class CardSerializer < ActiveModel::Serializer
  attributes :deck_id, :question, :answer, :id
end
