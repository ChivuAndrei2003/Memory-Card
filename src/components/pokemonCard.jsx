export default function PokemonCard({ pokemon, onCardClick, isFlipped }) {
  return (
    <>
      <div
        className={`pokemon-card ${isFlipped ? "flipped" : ""}`}
        onClick={() => onCardClick(pokemon.id)}
      >
        <div className=" items-center max-w-2xl mx-auto">
          <div className="justify-center text-2xl justify-items-center items-center border-2">
            <img src={pokemon.image} className="block mx-auto items-center justify-center " alt={pokemon.name} loading="lazy" />
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
