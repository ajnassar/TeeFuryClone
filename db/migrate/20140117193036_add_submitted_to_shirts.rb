class AddSubmittedToShirts < ActiveRecord::Migration
  def change
    add_column :shirts, :submitted, :boolean, {:null => false}
  end
end
