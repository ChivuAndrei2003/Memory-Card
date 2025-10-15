import PokemonCard from "./pokemonCard";

export default function GameBoard({ pokemons, onCardClick, isFlipped }) {
  return (
    <div className="flex-1 w-full max-w-6xl mx-auto mt-6 grid auto-rows-fr gap-6 overflow-y-auto px-6 pb-16 [grid-template-columns:repeat(auto-fit,minmax(13rem,1fr))]">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onCardClick={onCardClick}
          isFlipped={isFlipped}
        />
      ))}
    </div>
  );
}
