class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :description, :cost, :img
end
