class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, :null => false
      t.string :real_name
      t.string :location
      t.string :email, :null => false
      t.boolean :designer, :null => false
      t.string :password_digest, :null => false
      t.string :start_date, :null => false
      t.string :session_token, :null => false
      t.timestamps
    end

    add_index :users, :username, :unique => true
    add_index :users, :email, :unique => true
    add_index :users, :session_token, :unique => true
  end
end
