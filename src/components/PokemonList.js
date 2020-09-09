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
    return pokemons.filter(p => p.name!==rmPokemon.name)
    
  }

  const capture = (pokemon) => {
    if(!capturedPokemons) {
      setCapturedPokemons([pokemon])
      setPokemons(removePokemonFromList(pokemon))
    } else {
      setCapturedPokemons([...capturedPokemons,pokemon])
      setPokemons(removePokemonFromList(pokemon))  
    }
    
  }
    
    return (
      <div className="pokemons-list">
        <h2>Pokemons List</h2>
        
        {pokemons.map((pokemon) =>
          <div key={`${pokemon.id}-${pokemon.name}`}>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <button onClick={() => capture(pokemon)}>capture me</button>
          </div>)}
      </div>
    )
  }
  
  export default PokemonsList;
  