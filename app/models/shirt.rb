class Shirt < ActiveRecord::Base
  attr_accessible :name , :votes, :artist_id, :design_img, :model_img, :submitted, :color

  validates :name, :presence => true

  belongs_to(
    :designer,
    :primary_key => :id,
    :foreign_key => :artist_id,
    :class_name => "User"
  )

  has_many(
    :comments,
    :primary_key => :id,
    :foreign_key => :shirt_id,
    :class_name => "Comment"
  )

  has_attached_file :design_img, :styles => {
    :big => "618x476",
    :small => "237x186#"
  }

  has_attached_file :model_img, :styles => {
    :big => "600x600",
    :small => "237x186"
  }

  # def design_img_data=(data_value)
  #   start_idx = data_value.index(',') + 1
  #   headers = data_value[0...start_idx]
  #   data_value = data_value[start_idx..-1]
  #
  #   content_type_start_idx = headers.index(':') + 1
  #   content_type_end_idx = headers.index(';') - 1
  #   content_type = headers[content_type_start_idx..content_type_end_idx]
  #   file_extension = content_type.split('/')[1]
  #
  #   StringIO.open(Base64.strict_decode64(data_value)) do |data|
  #    data.class.class_eval { attr_accessor :original_filename, :content_type }
  #    data.original_filename = "temp#{DateTime.now.to_i}.#{file_extension}"
  #    data.content_type = content_type
  #    self.design_img = data
  #   end
  # end
end
