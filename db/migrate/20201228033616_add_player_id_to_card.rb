class AddPlayerIdToCard < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :player_id, :integer
  end
end
