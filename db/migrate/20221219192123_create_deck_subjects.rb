class CreateDeckSubjects < ActiveRecord::Migration[7.0]
  def change
    create_table :deck_subjects do |t|
      t.integer :deck_id
      t.integer :subject_id

      t.timestamps
    end
  end
end
