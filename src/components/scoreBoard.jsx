export default function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className="score-board">
      <div className="current-score">
        <span className="current-score-title">Score : {currentScore}</span>
      </div>
      <div className="best-score">
        <span className="best-score-title">Best score: {bestScore}</span>
      </div>
    </div>
  );
}
