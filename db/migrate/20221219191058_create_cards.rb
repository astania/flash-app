class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.text :question
      t.text :answer
      t.integer :deck_id

      t.timestamps
    end
  end
end
