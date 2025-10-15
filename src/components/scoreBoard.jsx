export default function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className="score-board">
      <div className="flex gap-5">
        <span className="current-score-title">Score : {currentScore}</span>
        <span className="best-score-title">Best score: {bestScore}</span>
      </div>
    </div>
  );
}
