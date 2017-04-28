class CreateAudios < ActiveRecord::Migration[5.1]
  def change
    create_table :audios do |t|

      t.string :uri
      t.string :name

      t.integer :user_id
    end
  end
end
