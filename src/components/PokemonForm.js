import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const[nameValue, setNameValue]= useState('')
  const[hpValue, setHpValue]= useState('')
  const[frontImageValue, setFrontImageValue]= useState('')
  const[backImageValue, setBackImageValue]= useState('')

  function handleSubmit(e){
    e.preventDefault();
    let newPokemon ={
      name: nameValue,
      hp: hpValue,
      sprites: {
        front: frontImageValue,
        back: backImageValue
      }  
    }
    fetch("http://localhost:3001/pokemon", {
      method : "POST", 
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(newPokemon)
    })
    .then(r=>r.json())
    .then((pokemon) => onAddPokemon(pokemon))
    setNameValue('');
    setHpValue('');
    setFrontImageValue('')
    setBackImageValue('');

  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input  fluid label="Name" placeholder="Name" name="name"  value={nameValue} onChange={e=> setNameValue(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hpValue} onChange={e=> setHpValue(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImageValue}
            onChange={e=> setFrontImageValue(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImageValue}
            onChange={e=> setBackImageValue(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
