class AddImgLinkToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :img_link, :string
  end
end
