import { useEffect, useState } from "react";

export const usePokemonData = (count, refreshKey = 0) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (count <= 0) {
      setPokemons([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();
    let isCancelled = false;

    const fetchPokemons = async () => {
      setIsLoading(true);
      setError(null);
      setPokemons([]);

      try {
        const randomIds = new Set();
        while (randomIds.size < count) {
          const randomId = Math.floor(Math.random() * 898) + 1;
          randomIds.add(randomId);
        }

        const pokemonPromises = Array.from(randomIds).map(async (id) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`,
            { signal: controller.signal }
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch pokemon with id ${id}`);
          }

          const data = await response.json();

          return {
            id: data.id,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            image: data.sprites.other["official-artwork"].front_default,
          };
        });

        const pokemonData = await Promise.all(pokemonPromises);

        if (!isCancelled) {
          setPokemons(pokemonData);
        }
      } catch (err) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Failed to fetch the pokemon : ", err);

        if (!isCancelled) {
          setError("Failed to load pokemon data");
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchPokemons();

    return () => {
      isCancelled = true;
      controller.abort();
    };
  }, [count, refreshKey]);

  return {
    pokemons,
    isLoading,
    error,
  };
};
