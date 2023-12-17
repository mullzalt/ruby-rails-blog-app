class AddThumbnailToArticle < ActiveRecord::Migration[7.2]
  def change
    add_column :articles, :thumbnail, :text
  end
end
