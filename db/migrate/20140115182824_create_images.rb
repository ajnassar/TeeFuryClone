class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :artist_id
      t.integer :shirt_id
      t.string :shirt_photo

      t.timestamps
    end
  end
end
