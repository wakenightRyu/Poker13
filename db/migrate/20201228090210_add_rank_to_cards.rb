class AddRankToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :rank, :string
  end
end
