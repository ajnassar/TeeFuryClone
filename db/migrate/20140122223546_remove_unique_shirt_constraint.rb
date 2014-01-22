class RemoveUniqueShirtConstraint < ActiveRecord::Migration
  def change
    change_column :shirts, :name, :string, :null => false

  end
end
