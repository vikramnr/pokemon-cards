import React, { useContext } from 'react';
import { PokemonContext } from '../PokemonProvider'

const CapturedPokemons = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  } = useContext(PokemonContext)
  
  return (
    <div className="pokedex">
      <h2>Captured Pokemons</h2>
      {capturedPokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
        </div>)}
    </div>
  )
}

export default CapturedPokemons