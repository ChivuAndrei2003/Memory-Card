import { useEffect, useState } from "react";

export const usePokemonData = (count) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const randomIds = [];
        while (randomIds.length < count) {
          const randomId = Math.floor(Math.random() * 898) + 1;
          if (!randomIds.includes(randomId)) {
            randomIds.push(randomId);
          }
        }

        const pokemonPromises = randomIds.map(async (id) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const data = await response.json();

          return {
            id: data.id,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            image: data.sprites.other["official-artwork"].front_default,
          };
        });

        const pokemonData = await Promise.all(pokemonPromises);
        setPokemons(pokemonData);
      } catch (err) {
        setError("Failed to load pokemon data");
        console.error("Failed to fetch the pokemon : ", err);
      } finally {
        setIsLoading(false);
      }
    };
    if (count > 0) {
      fetchPokemons();
    }
  }, [count]);

  return {
    pokemons,
    isLoading,
    error,
  };
};
