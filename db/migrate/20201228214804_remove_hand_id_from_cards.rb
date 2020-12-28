class RemoveHandIdFromCards < ActiveRecord::Migration[6.0]
  def change
    remove_column :cards, :hand_id, :integer
  end
end
