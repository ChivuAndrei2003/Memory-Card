import PokemonCard from "./pokemonCard";


export default function GameBoard({ pokemons, onCardClick, isFlipped }) {
  return (
    <>
      <div className=" flex-1 overflow-y-auto mt-4 grid  gap-10 grid-cols-4 justify-center justify-items-center items-center  mx-5"
      //style={{backgroundImage:`url(${background})`}}
      >
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
