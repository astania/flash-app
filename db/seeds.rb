# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create({email: "annaestania@gmail.com", password: "cats", name: "Anna Stania", profile_image: "https://i.imgur.com/M6E6DeE.jpeg"})
User.create({email: "schroena@gmail.com", password: "cats", name: "Anna Schroen", profile_image: "https://i.imgur.com/ioRE0px.jpeg"})
User.create({email: "jonas.stania@gmail.com", password: "cats", name: "Jonas Stania", profile_image: "https://i.imgur.com/GVcd0T4_d.webp?maxwidth=520&shape=thumb&fidelity=high"})

Deck.create({user_id: 1, public: true, name: "German"})
Deck.create({user_id: 2, public: true, name: "Math"})
Deck.create({user_id: 3, public: true, name: "English"})

Card.create({deck_id: 1, question: "what is yes in German?", answer: "Ja"})
Card.create({deck_id: 2, question: "what is 2 + 2?", answer: "4"})
Card.create({deck_id: 3, question: "What is the plural of goose?", answer: "Geese"})

Subject.create({name: "German Language"})
Subject.create({name: "Mathmatics"})
Subject.create({name: "English Language"})

UserDeck.create({user_id: 1, deck_id: 1})
UserDeck.create({user_id: 2, deck_id: 2})
UserDeck.create({user_id: 3, deck_id: 3})

DeckSubject.create({deck_id:1, subject_id: 1})
DeckSubject.create({deck_id:2, subject_id: 2})
DeckSubject.create({deck_id:3, subject_id: 3})

pp "Done seeding"