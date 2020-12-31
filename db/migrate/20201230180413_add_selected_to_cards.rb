class AddSelectedToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :selected, :boolean, default: false
  end
end
