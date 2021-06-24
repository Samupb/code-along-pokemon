const router = require('express').Router()

const {
  getPokemons,
  getPokemonsByParams,
  createPokemon,
  getTypes,
  getMoves
} = require('../controller/pokemon.controller')

router.get('/pokemons', getPokemons)
router.get('/pokemons/type/:type/move/:move', getPokemonsByParams)
router.post('/pokemons', createPokemon)

router.get('/types', getTypes)

router.get('/moves', getMoves)

module.exports = router