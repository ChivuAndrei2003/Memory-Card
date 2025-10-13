import { useState,  useEffect } from "react";
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

  useEffect(() => {
    if (pokemons.length > 0) {
      setDisplayedPokemons(pokemons);
      setGameState("playing");
    }
  }, [pokemons]);

  const handleDifficultySelect = (count) => {
    setDifficulty(count);
    resetGame();
  };

  const handleCardClick = (pokemonId) => {
    if (isFlipped) return; //prevent clicking if it's already flipped

    if (clickedPokemons.includes(pokemonId)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setGameState("gameOver");
    } else {
      //continue game
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setClickedPokemons([...clickedPokemons, pokemonId]);

      //verify winning
      if (newScore === pokemons.length) {
        setBestScore(newScore);
        setGameState("gameOver");
      } else {
        shuffleCards();
      }
    }
  };

  const shuffleCards = () => {
    setIsFlipped(true);
    setTimeout(() => {
      setDisplayedPokemons(shuffleArray(displayedPokemons));
      setIsFlipped(false);
    }, 600);
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClickedPokemons([]);
    setIsFlipped(false);
    setGameState("difficulty");
  };

  const handleRestart = () => {
    setCurrentScore(0);
    setClickedPokemons([]);
    setIsFlipped(false);
    setDisplayedPokemons(shuffleArray(pokemons));
    setGameState("playing");
  };

  if (error) {
    return (
      <div className="error-screen">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={resetGame}>Try Again</button>
      </div>
    );
  }
  if (gameState === "difficulty") {
    return (
      <div className="app">
        <div className="start-screen">
          <h1 className="main-title">Pokemon Memory Game</h1>
          <DifficultySelector onSelect={handleDifficultySelect} />
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="app">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <>
      <Header curretScore={currentScore} bestScore={bestScore} />

      <GameBoard
        pokemons={displayedPokemons}
        onCardClick={handleCardClick}
        isFlipped={isFlipped}
      />

      {gameState === "gameOver" && (
        <GameOver
          score={currentScore}
          bestScore={bestScore}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

export default App;
