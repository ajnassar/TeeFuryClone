class Shirt < ActiveRecord::Base
  attr_accessible :name , :votes, :artist_id, :design_img, :model_img, :submitted

  validates :name, :presence => true

  has_many(
    :images,
    :primary_key => :id,
    :foreign_key => :shirt_id,
    :class_name => "Image"
  )

  has_attached_file :design_img, :styles => {
    :big => "600x600",
    :small => "50x50#"
  }

  has_attached_file :model_img, :styles => {
    :big => "600x600",
    :small => "50x50#"
  }
end
