class SetDefaultColorShirts < ActiveRecord::Migration
  def change
    change_column :shirts, :color, :string, { :default => "#00BC05"}
  end
end
