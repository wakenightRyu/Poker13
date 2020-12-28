class RemovePlayIdFromCards < ActiveRecord::Migration[6.0]
  def change
    remove_column :cards, :play_id, :integer
  end
end
