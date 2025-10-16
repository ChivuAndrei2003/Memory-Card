export default function PokemonCard({ pokemon, onCardClick, isFlipped }) {
  const containerClasses =
    "group relative block h-full w-full [perspective:1200px] transition-transform duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300";

  const cardInnerClasses = `relative h-full min-h-[16.5rem] w-full transition-transform duration-[350ms] ease-in-out [transform-style:preserve-3d] ${
    isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
  }`;

  const faceClasses =
    "absolute inset-0 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 text-slate-900 shadow-md backdrop-blur-sm [backface-visibility:hidden]";

  const backFaceClasses =
    "absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-indigo-500/90 to-sky-400/80 p-6 text-center text-white shadow-md backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)]";

  return (
    <button
      type="button"
      onClick={() => onCardClick(pokemon.id)}
      aria-label={`Select ${pokemon.name}`}
      className={`${containerClasses} ${
        isFlipped ? "pointer-events-none" : "hover:-translate-y-1"
      }`}
    >
      <div className={cardInnerClasses}>
        <div className={faceClasses} aria-hidden={isFlipped}>
          <div className="flex h-36 w-full items-center justify-center">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              loading="lazy"
              className="h-28 w-auto object-contain drop-shadow-sm"
            />
          </div>
          <p className="text-lg font-semibold capitalize text-slate-800">
            {pokemon.name}
          </p>
        </div>

        <div className={backFaceClasses} aria-hidden={!isFlipped}>
          <span className="text-2xl font-bold tracking-wide">Gotta match!</span>
          <span className="text-sm uppercase tracking-[0.35em] text-white/80">
            Stay focused
          </span>
        </div>
      </div>
    </button>
  );
}
