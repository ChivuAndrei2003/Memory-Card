export default function GameOver({ score, bestScore, onRestart }) {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-900/70 px-4 backdrop-blur">
      <div className="w-full max-w-sm rounded-2xl bg-white/90 p-8 text-center text-slate-900 shadow-xl">
        <h2 className="text-2xl font-bold text-slate-900">Game Over!</h2>
        <p className="mt-3 text-sm text-slate-600">
          Your score: <span className="font-semibold text-slate-800">{score}</span>
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Best score:{" "}
          <span className="font-semibold text-slate-800">{bestScore}</span>
        </p>
        <button
          className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          onClick={onRestart}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
