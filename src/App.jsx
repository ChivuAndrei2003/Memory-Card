import { useEffect, useRef, useState } from "react";
import GameBoard from "./components/gameBoard";
import Header from "./components/header";
import { usePokemonData } from "./components/fetchPokemons";
import { DifficultySelector } from "./components/difficultySelector";
import { shuffleArray } from "./components/shuffleArray";
import GameOver from "./components/gameOver";
import { LoadingScreen } from "./components/loadingScreen";
import "./index.css";
import background from "./assets/background.webp";

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
  const backgroundStyle = { backgroundImage: `url(${background})` };

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
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4"
        style={backgroundStyle}
      >
        <div className="flex min-h-screen items-center justify-center">
          <div className="w-full max-w-md rounded-2xl bg-white/90 p-8 text-center text-slate-900 shadow-xl backdrop-blur">
            <h2 className="text-2xl font-bold">Something went wrong</h2>
            <p className="mt-2 text-sm text-slate-600">{error}</p>
            <button
              className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              onClick={handleRetry}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === "loading" || (isLoading && gameState !== "difficulty")) {
    return (
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
        style={backgroundStyle}
      >
        <LoadingScreen />
      </div>
    );
  }

  if (gameState === "difficulty") {
    return (
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
        style={backgroundStyle}
      >
        <div className="w-full max-w-3xl rounded-2xl bg-slate-900/70 px-6 py-10 text-center text-white shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold">Pokemon Memory Game</h1>
          <p className="mt-3 text-sm text-slate-200">
            Choose how many cards you want to remember.
          </p>
          <div className="mt-8">
            <DifficultySelector onSelect={handleDifficultySelect} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 pb-12 "
      style={backgroundStyle}
    >
      <div className="flex min-h-screen w-full flex-col items-center gap-6 pt-10">
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
      </div>
    </div>
  );
}

export default App;
