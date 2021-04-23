class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :p_score
      t.integer :user_id
      t.integer :song_id

      t.timestamps
    end
  end
end
