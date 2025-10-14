import ScoreBoard from "./scoreBoard.jsx";

export default function Header({ currentScore, bestScore }) {
  return (
    <header className="mx-auto  max-w-100% flex flex-col  items-center gap-2 bg-slate-700 px-6 py-4 text-white shadow-lg">
      <div className="text-center ">
        <h1 className="text-2xl font-bold">Pokemon Card Game</h1>
        <p className="text-sm opacity-90">Don't click the same pokemon twice</p>
      </div>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}
