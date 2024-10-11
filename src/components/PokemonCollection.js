import React, {useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({dPokemons, setPokemons,setFilterP}) {

  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(r=>r.json())
    .then(pokemons =>{
      setPokemons(pokemons)
      setFilterP(pokemons)
    })
  },[])


  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {dPokemons.map(poke => 
       <PokemonCard key={poke.id} name={poke.name} sprites = {poke.sprites} hp={poke.hp}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
