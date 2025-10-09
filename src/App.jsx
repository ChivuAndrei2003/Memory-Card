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
  const [isFlipped, setIsFlipped] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [onCardClick, setOnCardClick] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffleCards = (array) => {
    const newArray = [...array];
    for (let i = 0; i < newArray.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  return (
    <>
      <Header />
    </>
  );
}

export default App;
