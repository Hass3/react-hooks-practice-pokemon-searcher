import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name,sprites,hp}) {
  const[sp, setSp]=useState(sprites.front)

  function handleClick(){
    if(sp === sprites.front){
      setSp(sprites.back)
    }
    else{
      setSp(sprites.front)
    }
  }


  return (
    <Card>
      <div>
        <div onClick={handleClick} className="image">
          <img src={sp} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
