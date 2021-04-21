class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.integer :topScore
      t.integer :level

      t.timestamps
    end
  end
end
