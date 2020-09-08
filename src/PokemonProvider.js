import React, {createContext, useState} from 'react';

export const PokemonContext = createContext()

export const PokemonProvider = (props) => {
    const [pokemons, setPokemons] = useState([
        { id: 1, name: 'Bulbasaur' },
        { id: 2, name: 'Charmander' },
      ]);
    const [capturedPokemons, setCapturedPokemons] = useState(
        [{ id: 3, name: 'Squirtle' }]
    );
    
    const providerValue = {
        pokemons,
        capturedPokemons,
        setPokemons,
        setCapturedPokemons
    }

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    )
}
