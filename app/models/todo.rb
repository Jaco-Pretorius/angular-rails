class Todo
  include Mongoid::Document

  field :description
  field :completed, type: Boolean, default: false
end
