class RemoveColumnsFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :real_name
    remove_column :users, :location
    remove_column :users, :email
    remove_column :users, :designer
    remove_column :users, :start_date

  end
end
