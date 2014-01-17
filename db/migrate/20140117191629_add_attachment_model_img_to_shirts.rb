class AddAttachmentModelImgToShirts < ActiveRecord::Migration
  def self.up
    change_table :shirts do |t|
      t.attachment :model_img
    end
  end

  def self.down
    drop_attached_file :shirts, :model_img
  end
end
