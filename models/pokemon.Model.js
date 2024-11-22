const pokemons = [
    { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno', peso: 6.9, altura: 0.8, lvlPoder: 45},
    { id: 2, nome: 'Squirtle', tipo: 'Água', peso: 5.9, altura: 0.5, lvlPoder: 65},
    { id: 3, nome: 'Charmander', tipo: 'Fogo', peso: 6.5, altura: 0.9, lvlPoder: 95},
  ];
  
  const getPokemons = () => pokemons;
  
  const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
  

  const getPokemonByName = (nome) => pokemons.find(p => p.nome.toLowerCase() === nome.toLowerCase());

  
  const createPokemon = (nome, tipo, peso, altura, lvlPoder) => {
    const novoPokemon = { id: pokemons.length + 1, nome, tipo, peso, altura, lvlPoder};
    pokemons.push(novoPokemon);
  };
  
  module.exports = { getPokemons, getPokemonById, getPokemonByName, createPokemon };