export default function ScoreBoard({ currentScore, bestScore }) {
  return (
    
    <div className="score-board">
      <div className="current-score">
        <span className="current-score-title">Score :</span>
        <span className="current-score-number">{currentScore}</span>
      </div>
      <div className="best-score">
        <span className="best-score-title">Besr score:</span>
        <span className="best-score-numbber">{bestScore}</span>
      </div>
    </div>
  );
}
