const mongoose = require('mongoose')

const pokemonSchema = mongoose.Schema({
  name: String,
  image: String,
  moves: [String],
  type: [String],
  id: Number
})

const Pokemon = mongoose.model('pokemon', pokemonSchema)

module.exports = Pokemon