export default function PokemonCard({ pokemon, onCardClick, isFlipped }) {
  return (
    <button
      type="button"
      onClick={() => onCardClick(pokemon.id)}
      className={`group flex h-full  w-full transition-transform duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 ${
        isFlipped ? "pointer-events-none opacity-80" : "hover:-translate-y-1"
      }`}
    >
      <div className="flex min-h-[16.5rem] w-full flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 text-slate-900 shadow-md backdrop-blur">
        <div className="flex h-35 w-full items-center justify-center">
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
    </button>
  );
}
