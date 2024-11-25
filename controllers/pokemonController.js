const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokémon não encontrado');
    }   
};

const getAddPokemonPage = (req, res) => {
    res.render('add-pokemon');
};

const addPokemon = (req, res) => {
    const { nome, tipo, peso, altura, lvlPoder } = req.body;
    pokemonModel.createPokemon(nome, tipo, peso, altura, lvlPoder);
    res.redirect('/'); // Redirecione para a página inicial ou outra página após o cadastro
};

module.exports = { getAllPokemons, getPokemon, getAddPokemonPage, addPokemon };

