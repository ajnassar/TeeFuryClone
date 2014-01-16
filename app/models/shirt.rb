class Shirt < ActiveRecord::Base
  attr_accessible :name, :votes

  validates :name, :presence => true

  has_many(
    :images,
    :primary_key => :id,
    :foreign_key => :shirt_id,
    :class_name => "Image"
  )


end
