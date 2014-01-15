class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :artist_id
      t.integer :shirt_id
      t.string :url

      t.timestamps
    end
  end
end
