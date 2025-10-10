export const DifficultySelector = ({ onSelect }) => {
  const difficulties = [
    { level: "easy", count: 8, label: "Easy" },
    { level: "medium", count: 12, label: "Medium" },
    { level: "hard", count: 20, label: "Hard" },
  ];

  return (
    <div className="difficulty-selector">
      <h2>Select Difficulty:</h2>
      <div className="difficulty-buttons">
        {difficulties.map((diff) => (
          <button
            key={difficulties.level}
            className={`difficulty-btn ${diff.level}`}
            onClick={() => onSelect(diff.count)}
          >
            {diff.label}
          </button>
        ))}
      </div>
    </div>
  );
};
