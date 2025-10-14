import PokemonCard from "./pokemonCard";
import "../styles/gameBoard.css";

export default function GameBoard({ pokemons, onCardClick, isFlipped }) {
  return (
    <>
      <div className="pokemons-grid">
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
