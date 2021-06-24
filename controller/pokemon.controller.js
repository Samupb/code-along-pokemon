const axios = require('axios')
const apiClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const Pokemon = require('../models/pokemons.model')

exports.getPokemons = (req, res) => {
  Pokemon.find(req.query)
    .then(pokemons => res.json(pokemons))
    .catch(err => res.send(err))
}

exports.getPokemonsByParams = (req, res) => {
  Pokemon.find({$and: [{type: req.params.type}, {moves: req.params.move}]})
    .then(pokemons => res.json(pokemons))
    .catch(err => res.send(err))
}

exports.createPokemon = (req, res) => {
  Pokemon.create(req.body)
    .then(pokemon => res.json(pokemon))
    .catch(err => res.send(err))
}

exports.getTypes = (req, res) => {
  apiClient.get('https://pokeapi.co/api/v2/type/')
    .then(result => res.json(result.data.results.map(type => type.name)))
    .catch(err => res.send(err))
}

exports.getMoves = (req, res) => {
  apiClient.get('https://pokeapi.co/api/v2/move?limit=844')
    .then(result => res.json(result.data.results.map(move => move.name)))
    .catch(err => res.send(err))
}