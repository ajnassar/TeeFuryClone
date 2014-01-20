class AddColorToShirts < ActiveRecord::Migration
  def change
    add_column :shirts, :color, :string
  end
end
