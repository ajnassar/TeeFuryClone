class AddArtistIdToShirts < ActiveRecord::Migration
  def change
    add_column :shirts, :artist_id, :integer, {:null => false}
  end
end
