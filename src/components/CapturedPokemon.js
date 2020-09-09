import React, { useContext } from 'react';
import { PokemonContext } from '../PokemonProvider'

const CapturedPokemons = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  } = useContext(PokemonContext)

  const removePokemonFromList = (rmPokemon) => {
   return capturedPokemons.filter(p => p.name!==rmPokemon.name)
  }

  const release = (rlPokemon) => {
    setPokemons([...pokemons, rlPokemon])
    setCapturedPokemons(removePokemonFromList(rlPokemon))
  }

  if(!capturedPokemons) {
    return <h2>Capture somethings</h2>
  }
  
  return (
    <div className="pokedex">
      <h2>Captured Pokemons</h2>
      {capturedPokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <button onClick={() => release(pokemon)}>release me!!!</button>
        </div>)}
    </div>
  )
}

export default CapturedPokemons