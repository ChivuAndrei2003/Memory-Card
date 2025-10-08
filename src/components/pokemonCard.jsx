//import { useState } from "react";
import "../styles/card.css";

export default function PokemonCard({ pokemon, onCardClick, isFlipped }) {
  return (
    <>
      <div
        className={`pokemon-card ${isFlipped ? "flipped" : ""}`}
        onClick={() => onCardClick(pokemon.id)}
      >
        <div className="card-inner">
          <div className="card-front">
            <img src={pokemon.image} alt={pokemon.image} loading="lazy" />
            <p className="pokemon-name">{pokemon.name}</p>
          </div>
          <div className="card-back">
            <div className="pokeball"></div>
          </div>
        </div>
      </div>
    </>
  );
}
