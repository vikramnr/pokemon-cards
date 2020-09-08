import React, {useContext} from 'react'
import { PokemonContext } from "../PokemonProvider";

const PokemonsList = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  } = useContext(PokemonContext)
  

  const removePokemonFromList = (rmPokemon) => {
    pokemons.filter(p => p!==rmPokemon)
  }

  const capture = (pokemon) => {
    setCapturedPokemons([...capturedPokemons,pokemon])
    setPokemons(removePokemonFromList(pokemon))
  }
  console.log(pokemons)

    return (
      <div className="pokemons-list">
        <h2>Pokemons List</h2>
        
        {pokemons.map((pokemon) =>
          <div key={`${pokemon.id}-${pokemon.name}`}>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <button onClick={() => capture(pokemon)}>+</button>
          </div>)}
      </div>
    )
  }
  
  export default PokemonsList;
  