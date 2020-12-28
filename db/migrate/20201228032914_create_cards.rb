class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :suite
      t.integer :value
      t.integer :hand_id
      t.integer :play_id

      t.timestamps
    end
  end
end
