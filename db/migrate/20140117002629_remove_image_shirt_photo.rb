class RemoveImageShirtPhoto < ActiveRecord::Migration
  def change
    remove_column :images, :shirt_photo
  end
end
