class AddAttachmentDesignImgToShirts < ActiveRecord::Migration
  def self.up
    change_table :shirts do |t|
      t.attachment :design_img
    end
  end

  def self.down
    drop_attached_file :shirts, :design_img
  end
end
