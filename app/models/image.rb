class Image < ActiveRecord::Base
  attr_accessible :artist_id, :shirt_id, :url

  validates :artist_id, :shirt_id, :url, :presnece => true

  belongs_to(
    :shirt,
    :primary_key => :id,
    :foreign_key => :shirt_id,
    :class_name => "Shirt"
  )

  belongs_to(
    :designer,
    :primary_key => :id,
    :foreign_key => :artist_id,
    :class_name => "User"
  )

end
