class CreateTimelines < ActiveRecord::Migration
  def change
    create_table :timelines do |t|
      t.integer :user_id
      t.text :messege

      t.timestamps null: false
    end
  end
end
