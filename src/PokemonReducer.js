export const CAPTURE_POKEMON = 'CAPTURE_POKEMON'
export const RELEASE_POKEMON = 'RELEASE_POKEMON'

const defaultState = {
    pokemons: [
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Charmander' },
      { id: 3, name: 'Squirtle' }
    ],
    capturedPokemons: []
};

const getCapturedPokemons = (pokemon, capturedPokemons) =>
    capturedPokemons.filter(p => p.id!==pokemon.id)

const getPokemonList = (pokemon, pokemonList) => 
    pokemonList.filter(p => p.id !== pokemon.id)

const capturePokemons = (pokemon,state) => ({
    pokemons: getPokemonList(pokemon, state.pokemons),
    capturedPokemons: [...state.capturePokemons, pokemon]
})

const releasePokemons = (pokemon, state) => ({
    pokemons: [...state.pokemons, pokemon],
    capturedPokemons: getCapturedPokemons(pokemon, state.capturePokemons)
})

export const pokemonReducer = (state=defaultState,action) => {
    switch(action.type) {
        case 'CAPTURE_POKEMON':            
            return capturePokemons(action.pokemon, state)
        case 'RELEASE_POKEMON':
            return releasePokemons(action.pokemon, state)
        default:
            return state
    }
}

