class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.string :summary
      t.text :description
      t.integer :cost
      t.string :img

      t.timestamps null: false
    end
  end
end
