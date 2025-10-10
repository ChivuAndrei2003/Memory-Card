import { useState, useRef, useMemo } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import PokemonCard from "./components/pokemonCard";
import Header from "./components/header";
import ScoreBoard from "./components/scoreBoard";
import { usePokemonData } from "./components/fetchPokemons";

import { DifficultySelector } from "./components/difficultySelector";
import { shuffleArray } from "./components/shuffleArray";
import GameOver from "./components/gameOver";

function App() {
  //game states:'difficulty', 'playing', 'gameOver'
  const [gameState, setGameState] = useState("difficulty");
  const [difficulty, setDifficulty] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);

  const { pokemons, isLoading, error } = usePokemonData(difficulty);
  
  return (
    <>
      <Header />
    </>
  );
}

export default App;
