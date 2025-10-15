import ScoreBoard from "./scoreBoard.jsx";

export default function Header({ currentScore, bestScore }) {
  return (
    <header className="mx-full max-w-full flex flex-col  items-center gap-3 px-6 py-7 text-black shadow-lg">
      <div className="text-center  ">
        <h1 className="text-5xl font-bold">Pokemon Card Game</h1>
        <p className="text-sm opacity-90">Don't click the same pokemon twice</p>
      </div>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}
