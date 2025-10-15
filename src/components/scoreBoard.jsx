export default function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-base font-medium text-slate-100 sm:text-lg">
      <span className="flex items-center gap-2">
        <span className="text-slate-300">Score:</span>
        <span className="font-semibold text-white">{currentScore}</span>
      </span>
      <span className="flex items-center gap-2">
        <span className="text-slate-300">Best score:</span>
        <span className="font-semibold text-white">{bestScore}</span>
      </span>
    </div>
  );
}
