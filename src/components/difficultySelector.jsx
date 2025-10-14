export const DifficultySelector = ({ onSelect }) => {
  const difficulties = [
    { level: "easy", count: 8, label: "Easy" },
    { level: "medium", count: 12, label: "Medium" },
    { level: "hard", count: 20, label: "Hard" },
  ];

  const baseButtonClasses =
    "w-full rounded-xl border px-6 py-3 text-lg font-semibold uppercase tracking-wide transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const levelStyles = {
    easy:
      "border-emerald-400 bg-emerald-500/10 text-black hover:bg-emerald-500/20 focus-visible:outline-emerald-300",
    medium:
      "border-amber-400 bg-amber-500/10 text-black hover:bg-amber-500/20 focus-visible:outline-amber-300",
    hard:
      "border-rose-400 bg-rose-500/10 text-black hover:bg-rose-500/20 focus-visible:outline-rose-300",
  };

  return (
    <div className="flex flex-col items-center gap-6 text-center text-slate-100">
      <h2 className="text-2xl font-bold">Select Difficulty</h2>
      <p className="max-w-md text-sm text-slate-300">
        Choose how many Pokemon cards you want to remember. Harder levels mean
        more cards to track!
      </p>
      <div className="grid w-full max-w-lg grid-cols-1 gap-4 sm:grid-cols-3 ">
        {difficulties.map((diff) => (
          <button
            key={diff.level}
            className={`${baseButtonClasses} ${levelStyles[diff.level]}`}
            onClick={() => onSelect(diff.count)}
          >
            {diff.label}
          </button>
        ))}
      </div>
    </div>
  );
};
