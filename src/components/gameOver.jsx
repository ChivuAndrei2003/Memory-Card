import "../styles/gameOver.css";
export default function GameOver({ score, bestScore, onRestart }) {
  return (
    <div className="game-over-container">
      <div className="game-over-inner">
        <h2>Game Over!</h2>
        <p>Your score :{score}</p>
        <p>Your best score : {bestScore}</p>
        <button className="play-again" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}
