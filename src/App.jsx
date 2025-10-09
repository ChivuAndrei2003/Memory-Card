//import { useState,useRef,useMemo } from 'react'
import "./App.css";
import GameBoard from "./components/GameBoard";
import PokemonCard from "./components/pokemonCard";
import Header from "./components/header";
import ScoreBoard from "./components/scoreBoard";
import { usePokemonData } from "./components/fetchPokemons";
import { useState } from "react";

function App() {
  //const [count, setCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState('');
  const [pokemon, setPokemon] = useState('');
  const [onCardClick, setOnCardClick] = useState('');
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  return (
    <>
      <Header />
    </>
  );
}

export default App;
