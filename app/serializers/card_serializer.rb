class CardSerializer < ActiveModel::Serializer
  attributes :id, :deck_id, :question, :answer
end
