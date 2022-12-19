class CreateDecks < ActiveRecord::Migration[7.0]
  def change
    create_table :decks do |t|
      t.integer :user_id
      t.boolean :public
      t.string :name

      t.timestamps
    end
  end
end
