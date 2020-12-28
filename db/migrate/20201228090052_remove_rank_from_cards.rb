class RemoveRankFromCards < ActiveRecord::Migration[6.0]
  def change
    remove_column :cards, :rank, :string
  end
end
