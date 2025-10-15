import ScoreBoard from "./scoreBoard.jsx";

export default function Header({ currentScore, bestScore }) {
  return (
    <header className="w-full mx-auto  max-w-6xl  flex flex-col items-center gap-4 rounded-xl bg-slate-900/70 px-6 py-8 text-white shadow-lg backdrop-blur-sm">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold sm:text-5xl">Pokemon Card Game</h1>
        <p className="text-sm text-slate-200">
          Don&apos;t click the same pokemon twice
        </p>
      </div>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}
