import React, {useState} from "react";

function Search({onSearch}) {
  const[searchValue, setSearchValue]= useState('')

  function handleChange(e){
    setSearchValue(e.target.value);
    onSearch(e.target.value)
  }



  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchValue} onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
