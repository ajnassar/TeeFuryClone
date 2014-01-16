class Image < ActiveRecord::Base
  attr_accessible :artist_id, :shirt_id, :shirt_photo

  validates :artist_id, :shirt_id, :url, :presence => true

  has_attached_file :shirt_photo, :styles => {
    :big => "600x600",
    :small => "50x50#"
  }

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
