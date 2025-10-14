import { useEffect, useRef, useState } from "react";
import GameBoard from "./components/gameBoard";
import Header from "./components/header";
import { usePokemonData } from "./components/fetchPokemons";
import { DifficultySelector } from "./components/difficultySelector";
import { shuffleArray } from "./components/shuffleArray";
import GameOver from "./components/gameOver";
import { LoadingScreen } from "./components/loadingScreen";
import './index.css'
function App() {
  const [gameState, setGameState] = useState("difficulty");
  const [difficulty, setDifficulty] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [_clickedPokemons, setClickedPokemons] = useState([]);
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [fetchRequestId, setFetchRequestId] = useState(0);

  const shuffleTimeoutRef = useRef(null);

  const { pokemons, isLoading, error } = usePokemonData(
    difficulty,
    fetchRequestId
  );

  useEffect(() => {
    if (pokemons.length > 0) {
      setDisplayedPokemons(pokemons);
      setGameState("playing");
    }
  }, [pokemons]);

  useEffect(() => {
    return () => {
      if (shuffleTimeoutRef.current) {
        clearTimeout(shuffleTimeoutRef.current);
      }
    };
  }, []);

  const clearShuffleTimer = () => {
    if (shuffleTimeoutRef.current) {
      clearTimeout(shuffleTimeoutRef.current);
      shuffleTimeoutRef.current = null;
    }
  };

  const resetRoundState = () => {
    clearShuffleTimer();
    setCurrentScore(0);
    setClickedPokemons([]);
    setIsFlipped(false);
    setDisplayedPokemons([]);
  };

  const handleDifficultySelect = (count) => {
    resetRoundState();
    setDifficulty(count);
    setGameState("loading");
    setFetchRequestId((prev) => prev + 1);
  };

  const handleRetry = () => {
    resetRoundState();
    setGameState("loading");
    setFetchRequestId((prev) => prev + 1);
  };

  const shuffleCards = () => {
    clearShuffleTimer();
    setIsFlipped(true);

    shuffleTimeoutRef.current = setTimeout(() => {
      setDisplayedPokemons((prev) => shuffleArray(prev));
      setIsFlipped(false);
      shuffleTimeoutRef.current = null;
    }, 300);
  };

  const handleCardClick = (pokemonId) => {
    if (isFlipped) return;

    setClickedPokemons((prevClicked) => {
      if (prevClicked.includes(pokemonId)) {
        setBestScore((prevBest) => Math.max(prevBest, prevClicked.length));
        setCurrentScore(0);
        shuffleCards();
        return [];
      }

      const updatedClicked = [...prevClicked, pokemonId];

      setCurrentScore(updatedClicked.length);
      setBestScore((prevBest) => Math.max(prevBest, updatedClicked.length));

      if (updatedClicked.length === pokemons.length) {
        setGameState("gameOver");
      } else {
        shuffleCards();
      }

      return updatedClicked;
    });
  };

  const handleRestart = () => {
    resetRoundState();
    if (pokemons.length > 0) {
      setDisplayedPokemons(shuffleArray(pokemons));
      setGameState("playing");
    }
  };

  if (error) {
    return (
      <div className="error-screen">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={handleRetry}>Try Again</button>
      </div>
    );
  }

  if (gameState === "loading" || (isLoading && gameState !== "difficulty")) {
    return (
      <div className="app">
        <LoadingScreen />
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

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />

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
