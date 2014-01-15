class CreateShirts < ActiveRecord::Migration
  def change
    create_table :shirts do |t|
      t.string :name, :null => false
      t.integer :votes

      t.timestamps
    end
    add_index :shirts, :name, :unique => true
  end
end
