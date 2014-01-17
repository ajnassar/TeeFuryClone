class AddAttachmentShirtPhotoToImages < ActiveRecord::Migration
  def self.up
    change_table :images do |t|
      t.attachment :shirt_photo
    end
  end

  def self.down
    drop_attached_file :images, :shirt_photo
  end
end
