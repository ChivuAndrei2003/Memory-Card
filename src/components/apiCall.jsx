//  import { useEffect } from "react";

import {  useEffect, useState } from "react";

export default function GetPokemon() {
  const pokemonsNames = [
    "pikachu",
    "Charmander",
    "Squirtle",
    "Jigglypuff",
    "Meowth",
    "Psyduck",
    "Snorlax",
    "Bulbasaur",
  ];
  //const [query, setQuery] = useState(pokemonsNames[0]);
  //const [data, setData] = useState(null);
 // const [status, setStatus] = useState("idle");
/*
  async function fetchPokemo(nameOrID) {
    try {
      setStatus("loading");
      setData(null);
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`
      );
      if (!res.ok) throw new Error(`Not found: ${nameOrID}`);
      const json = await res.json();

      const img = json.sprites.other?.dream_world?.front_default;

      setData({
        id: json.id,
        name: json.name,
        image: img,
         
             height: json.height,
              weight: json.weight,
      });
      setStatus("idle");
    } catch (e) {
      setStatus("error");
    }
      
      useEffect(() => {
          fetchPokemo(query);
      }, []);
  }
}