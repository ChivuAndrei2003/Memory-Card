export default function PokemonCard({ pokemon, onCardClick, isFlipped }) {
  return (
    <>
      <div
        className={`pokemon-card ${isFlipped ? "flipped" : ""}`}
        onClick={() => onCardClick(pokemon.id)}
      >
        <div className=" align-center items-center max-w-2xl mx-auto">
          <div className="justify-center lign-center items-center">
            <img src={pokemon.image} className="block mx-auto " alt={pokemon.name} loading="lazy" />
            <p className="text-center">{pokemon.name}</p>
          </div>
          <div className="card-back">
            <div className="pokeball"></div>
          </div>
        </div>
      </div>
    </>
  );
}
