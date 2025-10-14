import PokemonCard from "./pokemonCard";

export default function GameBoard({ pokemons, onCardClick, isFlipped }) {
  return (
    <>
      <div className="grid gap-10 grid-cols-3 justify-center items-center align-center mx-auto">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onCardClick={onCardClick}
            isFlipped={isFlipped}
          />
        ))}
      </div>
    </>
  );
}
