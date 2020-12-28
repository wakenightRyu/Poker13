class CreatePlays < ActiveRecord::Migration[6.0]
  def change
    create_table :plays do |t|
      t.integer :type
      t.integer :player_id

      t.timestamps
    end
  end
end
