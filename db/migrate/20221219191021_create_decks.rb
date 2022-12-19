class CreateDecks < ActiveRecord::Migration[7.0]
  def change
    create_table :decks do |t|
      t.integer :user_id
      t.integer :subject_id
      t.boolean :public

      t.timestamps
    end
  end
end
