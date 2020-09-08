import React from 'react';
import PokemonsList from './components/PokemonList';
import CapturedPokemons from './components/CapturedPokemon';
import { PokemonProvider } from './PokemonProvider'

function App() {
  return (
    <PokemonProvider>
      <PokemonsList/>
      <CapturedPokemons/>
    </PokemonProvider>
  );
}

export default App;
