# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Song.destroy_all
Score.destroy_all

fake_acc1 = User.create(username: "fakeaccount1", topScore: 20, level: 1)
fake_acc2 = User.create(username: "fakeaccount2", topScore: 0, level: 1)
fake_acc3 = User.create(username: "fakeaccount3", topScore: 15, level: 2)

legend_easy = Song.create(name: "Legend - Easy")
legend_med = Song.create(name: "Legend - Medium")

score1 = Score.create(p_score: 20, user_id: fake_acc1.id, song_id: legend_easy.id)
score2 = Score.create(p_score: 0, user_id: fake_acc1.id, song_id: legend_med.id)
score3 = Score.create(p_score: 0, user_id: fake_acc2.id, song_id: legend_easy.id)
score4 = Score.create(p_score: 15, user_id: fake_acc3.id, song_id: legend_easy.id)