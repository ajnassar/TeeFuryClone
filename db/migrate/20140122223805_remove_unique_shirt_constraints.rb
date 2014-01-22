class RemoveUniqueShirtConstraints < ActiveRecord::Migration
  def change
      change_column :shirts, :name, :string, :unique => false
  end
end
