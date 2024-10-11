import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const[displayedPokemons, setDisplayedPokemons] = useState([]);
  const[filteredPokemons, setFilteredPokemons] = useState([]);
  
  function handleSearch(search){
    const searchedPokemons = filteredPokemons.filter((poke)=>
    poke.name.toLowerCase().includes(search.toLowerCase()))

    if (search === ""){
      setDisplayedPokemons(filteredPokemons)               
    }
    else{
      setDisplayedPokemons(searchedPokemons)
    }
  }

  function onAddPokemon(newPokemon){
    const updatedPokemons = [...displayedPokemons, newPokemon];

    setDisplayedPokemons(updatedPokemons);
    setFilteredPokemons(updatedPokemons);
  }



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon = {onAddPokemon} />
      <br />
      <Search onSearch={handleSearch} />
      <br/>
      <PokemonCollection dPokemons={displayedPokemons} setPokemons={setDisplayedPokemons} setFilterP={setFilteredPokemons} />
    </Container>
  );
}

export default PokemonPage;



// Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page
// Wire up the form to add a missing Pokemon (Bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). 
// Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a POST request, etc. 
// When a new Pokemon is added, it should show on the page without having to refresh.