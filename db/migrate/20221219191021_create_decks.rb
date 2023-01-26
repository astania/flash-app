class CreateDecks < ActiveRecord::Migration[7.0]
  def change
    create_table :decks do |t|
      t.boolean :public
      t.string :name

      t.timestamps
    end
  end
end
