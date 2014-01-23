class Comment < ActiveRecord::Base
  attr_accessible :user_id, :shirt_id, :body

  belongs_to(
    :user,
    :primary_key => :id,
    :foreign_key => :user_id,
    :class_name => "User"
  )

  belongs_to(
    :shirt,
    :primary_key => :id,
    :foreign_key => :shirt_id,
    :class_name => "Shirt"
  )
end

